'use strict';

var controller = require('./controller');
var view = require('./view');

function $(selector) {
    var elements = document.querySelectorAll(selector);
    return elements.length === 1 ? elements[0] : elements;
}

var ctrl = controller();
var view = view.create($('.simple-calculator'), ctrl);