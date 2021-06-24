require('dotenv').config();

const app = require('./app.js');
const config = require('./lib/config');

app(() => console.log(`Server has been started on port ${config.port}`));
