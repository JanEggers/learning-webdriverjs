'use strict';

var view = {};

exports.create = function (node, ctrl) {

	view.$ = function(selector) {
    var elements = node.querySelectorAll(selector);
    return elements.length === 1 ? elements[0] : elements;
	}; 


	// Addition
	var addBtn = view.$('.add');
	var augend = view.$('input[name=augend]');
	var addend = view.$('input[name=addend]');
	var sum = view.$('input[name=sum]');

	addBtn.addEventListener('click', function (evt) {
		sum.value = Number(augend.value) + Number(addend.value);
	}, false);

	// Subtraction
	var subtractBtn = view.$('.subtract');
	var minuend = view.$('input[name=minuend]');
	var subtraend = view.$('input[name=subtraend]');
	var difference = view.$('input[name=difference]');

	subtractBtn.addEventListener('click', function (evt) {
		difference.value = Number(minuend.value) - Number(subtraend.value);
	}, false);

	// Multiplication
	var multiplyBtn = view.$('.multiply');
	var multiplicand = view.$('input[name=multiplicand]');
	var multiplier = view.$('input[name=multiplier]');
	var product = view.$('input[name=product]');

	multiplyBtn.addEventListener('click', function (evt) {
		product.value = ctrl.multiply(multiplicand.value, multiplier.value);
	}, false);

};
