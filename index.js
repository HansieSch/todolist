var express = require('express');
var app = express();
var mongoose = require('mongoose');
var bodyParser = require('body-parser');
var morgan = require('morgan');
var path = require('path');

var api = require('./app/routes/api')(express, app);

app.use(bodyParser.urlencoded({ extended: true}));
app.use(bodyParser.json());
app.use(morgan('dev'));

mongoose.connect('mongodb://127.0.0.1:27017/todoDB');
app.use(express.static(__dirname + '/public'));

app.use(api);

app.all('*', function (req, res) {
    res.sendFile(path.join(__dirname + '/public/app/views/index.html'));
});

app.listen(3000);