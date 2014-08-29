'use strict';

var controller = require("./controller");

function $(selector) {
    var elements = document.querySelectorAll(selector);
    return elements.length === 1 ? elements[0] : elements;
}

var ctrl = controller();

// Addition
var addBtn = $('.add');
var augend = $('input[name=augend]');
var addend = $('input[name=addend]');
var sum = $('input[name=sum]');

addBtn.addEventListener('click', function (evt) {
	sum.value = Number(augend.value) + Number(addend.value);
}, false);

// Subtraction
var subtractBtn = $('.subtract');
var minuend = $('input[name=minuend]');
var subtraend = $('input[name=subtraend]');
var difference = $('input[name=difference]');

subtractBtn.addEventListener('click', function (evt) {
	difference.value = Number(minuend.value) - Number(subtraend.value);
}, false);

// Multiplication
var multiplyBtn = $('.multiply');
var multiplicand = $('input[name=multiplicand]');
var multiplier = $('input[name=multiplier]');
var product = $('input[name=product]');

multiplyBtn.addEventListener('click', function (evt) {
	product.value = ctrl.multiply(multiplicand.value, multiplier.value);
}, false);

