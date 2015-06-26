'use strict';

var express = require('express');
var app = express();
var port = 5000;
var path = require('path');
var proxy = require('proxy-middleware');
var url = require('url');

// Set the view engine to ejs
app.set('view engine', 'ejs');

// Set the view directory.
app.set('views', path.join(__dirname, 'views'));

// Proxy for static assets.
app.use('/public', proxy(url.parse('http://127.0.0.1:8080/public')));

// Proxy for images.
app.use('/images', proxy(url.parse('http://127.0.0.1:5000/public/images')));

// Routes
app.use('/', require('./routes/index'));
app.use('/products', require('./routes/products'));
app.use('/api', require('./routes/api'));

var server = app.listen(port, function () {
    var host = server.address().address;

    console.log('Listening at http://%s:%s', host, port);
});
