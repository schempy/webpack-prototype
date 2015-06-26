'use strict';

var express = require('express');
var router = express.Router();
var serialize = require('serialize-javascript');
var products = require('../data/products');
var categories = require('../data/categories');
var renderAppToString = require('../renderAppToString');

router.get('/:product', function(req, res) {
	renderAppToString('/products' + req.url, {
		categories: categories,
		products: products[req.params.product]
	}, function (html) {
		res.render('pages/index', {
			appOutput: html,
			stateOutput: 'window.App=' + serialize({
				categories: categories,
				products: products[req.params.product]
			})
		});
	});
});

module.exports = router;
