const rp = require('request-promise');
const User = require('../models/user');
const jwt = require('jsonwebtoken');
const { secret } = require('../config/environment');


function google(req, res, next) {

  rp({
    method: 'POST',
    url: 'https://accounts.google.com/o/oauth2/token',
    body: {
      client_id: req.body.clientId,
      client_secret: process.env.GOOGLE_SECRET,
      code: req.body.code,
      redirect_uri: req.body.redirectUri
    },
    json: true
  })
    .then(response => {
      return rp({
        method: 'GET',
        url: 'https://www.googleapis.com/plus/v1/people/me/openIdConnect',
        qs: {
          access_token: response.access_token
        },
        headers: {
          'User-Agent': 'NeighbourGood'
        },
        json: true
      });
    })
    .then(response => {
      return User.findOne({ $or: [
        {email: response.email},
        {googleid: response.id}                     /* <----- */
      ] })
        .then(user => {
          if(!user) {
            user = new User({
              username: response.login,
              googleid: response.id                 /* <----- first name and last name is required so that is whats required */
            });
          }
          user.googleid = response.id;              /* <----- */
          return user.save();
        });
    })
    .then(user => {
      const token = jwt.sign({ sub: user._id }, secret, { expiresIn: '6h' });
      res.json({
        message: `Welcome back ${user.username}!`,
        token,
        user
      });
    })
    .catch(next);
}

module.exports = { google };
//
// function google(req, res) {
//   console.log(req.body);
//   res.sendStatus(200);
// }
//
// module.exports = { google };
