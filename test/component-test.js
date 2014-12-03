'use strict';

var webdriverio = require('webdriverio');
var assert = require('assert');
//https://github.com/vvo/selenium-standalone

// Docu: https://code.google.com/p/selenium/source/browse/javascript/webdriver/webdriver.js

var options = {
    desiredCapabilities: {
        browserName: 'phantomjs'
    }
};

describe('Simple Calculator', function() {

    var url = 'http://localhost:3000';

    this.timeout(99999999);
    var client = {};

    before(function(done) {
        client = webdriverio.remote(options);
        client
            .init()
            .url(url)
            .call(done);

    });

    after(function(done) {
        client.end(done);
    });

    it('has title', function(done) {

        client
            .url(url)
            .title(function(err, res) {
                assert(err === null);
                assert(res.value === 'Component Test');
            })
            .call(done);
    });

    it('has a heading', function(done) {
        client
            .url(url)
            .getText('.simple-calculator h2', function(err, text) {
                assert(!err);
                assert.equal(text, 'Simple Calculator');
            })
            .call(done);
    });

    it('has inputs for addition', function(done) {
        client
            .setValue('.simple-calculator input[name=augend]', '3')
            .setValue('.simple-calculator input[name=addend]', '4')
            .click('.add')
            .getValue('.simple-calculator input[name=sum]', function(err, value) {
                assert(!err);
                assert.equal(value, '7');
            })
            .call(done);
    });

    it('has inputs for subtraction', function(done) {
        client
            .setValue('.simple-calculator input[name=minuend]', '7')
            .setValue('.simple-calculator input[name=subtraend]', '4')
            .click('.subtract')
            .getValue('.simple-calculator input[name=difference]', function(err, value) {
                assert(!err);
                assert.equal(value, '3');
            })
            .call(done);
    });

    it('has inputs for multiplication', function(done) {
        client
            .setValue('.simple-calculator input[name=multiplicand]', '7')
            .setValue('.simple-calculator input[name=multiplier]', '4')
            .click('.multiply')
            .getValue('.simple-calculator input[name=product]', function(err, value) {
                assert(!err);
                assert.equal(value, '28');
            })
            .call(done);
    });

    it('has inputs for division', function(done) {
        client
            .setValue('.simple-calculator input[name=div1]', '4')
            .setValue('.simple-calculator input[name=div2]', '2')
            .click('.divide')
            .getValue('.simple-calculator input[name=divResult]', function(err, value) {
                assert(!err);
                assert.equal(value, '2');
            })
            .call(done);
    });

});