const rp = require('request-promise');
const User = require('../models/user');
const jwt = require('jsonwebtoken');
const { secret } = require('../config/environment');


function google(req, res, next) {

  rp({
    method: 'POST',
    url: 'https://accounts.google.com/o/oauth2/token',
    form: {
      client_id: req.body.clientId,
      client_secret: process.env.GOOGLE_SECRET,
      code: req.body.code,
      redirect_uri: req.body.redirectUri,
      grant_type: 'authorization_code'
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
      console.log(response);
      return User.findOne({ $or: [
        {email: response.email},
        {googleId: response.sub}                     /* <----- */
      ] })
        .then(user => {
          console.log(user);
          if(!user) {
            user = new User({
              email: response.email,                /* <----- first name and last name is required so that is whats required */
              firstname: response.given_name,
              surname: response.family_name
            });
          }
          user.googleId = response.sub;              /* <----- */
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
