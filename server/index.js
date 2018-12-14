const express = require('express');
const parser = require('body-parser');
const path = require('path');
const helmet = require('helmet');
const app = express();
const port = 80;

app.use(helmet());
app.use(parser.json());
app.use(parser.urlencoded({extended: true}));
app.use(express.static(path.resolve(__dirname, '../static/')));

app.listen(port, () => {
  console.log('connected to port ', port);
});