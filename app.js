const express = require('express');
const app = express();

const rotaMural = require('./routes/mural');

app.use('/mural', rotaMural);

module.exports = app;