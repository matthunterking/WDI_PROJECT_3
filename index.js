const express = require('express');
const app = express();

const { port } = require('./config/environment');
// const router = require('./config/router');


app.listen(port, () => console.log(`We're up and running on port ${port}`));
