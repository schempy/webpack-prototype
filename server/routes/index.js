'use strict';

var express = require('express');
var router = express.Router();
var serialize = require('serialize-javascript');
var categories = require('../data/categories');
var renderAppToString = require('../renderAppToString');

router.get('/', function(req, res) {
	renderAppToString(req.url, {
		categories: categories
	}, function (html) {
		res.render('pages/index', {
			appOutput: html,
			stateOutput: 'window.App=' + serialize({
				categories: categories
			})
		});
	});
});

module.exports = router;
