import  express from 'express';

import fs from 'fs'
var app = express();
var path = require('path');

app.use(express.static('public'));
app.use(express.static(path.join(__dirname, 'view')));
const htmlContent = fs.readFileSync('./views/home2.html', 'utf8');
const aboutContent = fs.readFileSync('./views/about.html', 'utf8');
const accordion = fs.readFileSync('./views/accordion.html', 'utf8');

app.get('/', function (req, res) {
  res.send(htmlContent);
});

app.get('/acc', function (req, res) {
    res.send(accordion);
  });

app.get('/about', function (req, res) {
    res.send(aboutContent);
  });

app.listen(8000, '0.0.0.0', function () {
  console.log('Server listening on port 8000');
});

module.exports = app;
