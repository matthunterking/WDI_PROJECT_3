const { env } = require('../config/environment');

function errorHandler(err, req, res, next) { // eslint-disable-line
  if(env !== 'test') console.log(err);

  if(err.name === 'ValidationError') {
    return res.status(422).json({ message: err.toString() });
  }

  res.status(500).json({ message: 'Internal Server Error' });
}

module.exports = errorHandler;
