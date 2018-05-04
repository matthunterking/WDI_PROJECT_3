const express = require('express');
const app = express();
const router = require('./config/router');

const { port } = require('./config/environment');
// const router = require('./config/router');

app.use('/api', router);


app.listen(port, () => console.log(`We're up and running on port ${port}`));
