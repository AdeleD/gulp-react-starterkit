/** @jsx React.DOM */

var React = require('react');
var HelloMessage  = require('./react/components/HelloMessage');

function MyClass(name) {
    this.name = name;
}

MyClass.prototype.renderHelloMessage = function(container) {
    React.renderComponent(
        <HelloMessage name={this.name} />,
        container
    );
}

module.exports = MyClass;