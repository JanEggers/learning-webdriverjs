'use strict';

var assert = require('assert');
var controller = require('./../component/controller');

describe('Controller', function() {

    var ctrl;

    beforeEach(function() {
        ctrl = controller();
    });

    afterEach(function() {
        ctrl = null;
    });

    it('can add', function() {
        assert.equal(ctrl.add(2, 3), 5);
        assert.equal(ctrl.add('2', '3'), 5);
    });

    it('can multiply', function() {
        assert.equal(ctrl.multiply(2, 3), 6);
        assert.equal(ctrl.multiply('2', '3'), 6);
    });

    it('can subtract', function() {
        assert.equal(ctrl.subtract(3, 2), 1);
        assert.equal(ctrl.subtract('3', '2'), 1);
    });

    // Todo: Write asserts for extreme cases such as:
    // - missing argument
    // - non numeric type
});