const port = process.env.PORT || 4000;
const dbURI = 'mongodb://localhost/neighbourgood';
const secret = process.env.SECRET || 'G6^sk*/>ersTSauV2';

module.exports = { port, dbURI, secret };
