const express = require('express');
const app = express();
const mongoose = require('mongoose');
const bodyParser = require('body-parser');

const router = require('./config/router');
const { port, dbURI } = require('./config/environment');
// const router = require('./config/router');
mongoose.connect(dbURI);

app.use(bodyParser.json());
app.use('/api', router);

app.listen(port, () => console.log(`We're up and running on port ${port}`));
