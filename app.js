var express = require('express');
var logger = require('morgan');
var path = require('path');
var api = require('./api');
var app = express();

app.use(logger('dev'));
app.use(express.static(path.join(__dirname, 'public')));
app.use('/api', api);

app.get('/news', function(request, response) {
  response.send('stand in news page');
});

app.get('/work', function(request, response) {
  response.send('stand in work page');
});

app.get('/ideas', function(request, response) {
  response.send('stand in ideas page');
});

app.get('/events', function(request, response) {
  response.send('stand in events page');
});


module.exports = app;
