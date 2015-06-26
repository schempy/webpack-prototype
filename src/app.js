'use strict';

var React = require('react');
var Router = require('react-router');
var assign = require('object-assign');
var appRoutes = require('./routes.jsx');
var Promise = require('es6-promise').Promise;

function render(path) {
    return new Promise(function (resolve, reject) {
        var router = Router.create({
            routes: appRoutes,
            location: path,
            onAbort: function defaultAbortHandler(abortReason) {
                reject(abortReason);
            }
        });
        router.run(function (Handler, state) {

			// Client rendering.
            if (typeof document !== 'undefined') {
				var props = assign(state.params, window.App);

                React.render(React.createFactory(Handler)(props), document.getElementById('app'));
                resolve(true); // for good measure of our es6 promises .. not really used..

            // Server rendering.
            } else {
                var html = React.renderToString(React.createFactory(Handler)({}));
                resolve(html);
            }

        });
    });
}
//autoexec if on client side....
if (typeof document !== 'undefined') {
    render(Router.HistoryLocation);
}

module.exports.renderAppToString = render;
