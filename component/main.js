(function () {
    'use strict';

    function $(selector) {
        var elements = document.querySelectorAll(selector);
        return elements.length === 1 ? elements[0] : elements;
    }

    var addBtn = $('.add');
    var augend = $('input[name=augend]');
    var addend = $('input[name=addend]');
    var sum = $('input[name=sum]');

    addBtn.addEventListener('click', function (evt) {
    	sum.value = Number(augend.value) + Number(addend.value);
    }, false);

}());