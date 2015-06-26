'use strict';

var React = require('react');
var Router = require('react-router');
var Route = Router.Route;
var Home = require('./components/Home');

var routes = (
	<Route name="home" path="/" handler={Home}>
	</Route>
);

module.exports = routes;
