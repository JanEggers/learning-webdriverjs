'use strict';

var dom = require('./../lib/dom');
var controller = require('./controller');
var view = require('./view');

var ctrl = controller();
var view = view.create(dom.el('.simple-calculator'), ctrl);