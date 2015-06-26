'use strict';

var React = require('react/addons');
var ReactCSSTransitionGroup = React.addons.CSSTransitionGroup;

if (process.env.BROWSER) {
    require('./home.less');
}

React.initializeTouchEvents(true);

var Home = React.createClass({

    render: function () {
        return (
            <div className='home'>
                <h2>HL 1</h2>
                <div>
                    <div>
                        <p>
                            &copy; 2015 Hawaii Life Real Estate Brokers | 844-667-0111
                        </p>
                    </div>
                    <img src="images/logo-hl-sm.png"/>
                </div>
            </div>
        );
    }
});

module.exports = Home;
