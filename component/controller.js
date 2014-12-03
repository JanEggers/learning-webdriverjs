'use strict';

var EventEmitter = require('events').EventEmitter;
var extend = require('extend');

function Controller(config) {
	EventEmitter.call(this);
	this.init(config);
}

extend(Controller.prototype, {
	constructor: Controller,
	init : function (config) {
		// currently does nothing
	},
	add : function (a, b) {
		return Number(a) + Number(b);
	},
	multiply : function (a, b) {
		return Number(a) * Number(b);
	},
	subtract : function (a, b) {
		return Number(a) - Number(b);
	},
    divide : function (a, b) {
        return Number(a) / Number(b);
    }
});

module.exports = function (config) {
	return new Controller(config);
};