'use strict';

var dom = require('./../lib/dom');

var view = {};

exports.create = function (node, ctrl) {

	// helper
	view.el = function(selector) {
    return dom.el(selector, node);
	}; 

	// Addition
	var addBtn = view.el('.add');
	var augend = view.el('input[name=augend]');
	var addend = view.el('input[name=addend]');
	var sum = view.el('input[name=sum]');

	addBtn.addEventListener('click', function (evt) {
		sum.value = ctrl.add(augend.value, addend.value);
	}, false);

	// Subtraction
	var subtractBtn = view.el('.subtract');
	var minuend = view.el('input[name=minuend]');
	var subtraend = view.el('input[name=subtraend]');
	var difference = view.el('input[name=difference]');

	subtractBtn.addEventListener('click', function (evt) {
		difference.value = ctrl.multiply(minuend.value, subtraend.value);
	}, false);

	// Multiplication
	var multiplyBtn = view.el('.multiply');
	var multiplicand = view.el('input[name=multiplicand]');
	var multiplier = view.el('input[name=multiplier]');
	var product = view.el('input[name=product]');

	multiplyBtn.addEventListener('click', function (evt) {
		product.value = ctrl.multiply(multiplicand.value, multiplier.value);
	}, false);

    var divBtn = view.el('.divide');
    var div1 = view.el('input[name=div1]');
    var div2 = view.el('input[name=div2]');
    var divResult = view.el('input[name=divResult]');

    divBtn.addEventListener('click', function (evt) {
        divResult.value = ctrl.divide(div1.value, div2.value);
    }, false);
};
