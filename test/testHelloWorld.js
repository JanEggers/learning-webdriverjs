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

describe('Component', function() {

    var url = 'http://localhost:3000';

    this.timeout(99999999);
    var client = {};

    before(function(done) {
        client = webdriverio.remote(options);
        client.init(done);
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

    it('has heading', function(done) {

        client
            .url(url)
            .getText('#component h2', function(err, text) {
                assert(!err);
                assert.equal(text, 'Currency Converter');
            })
            .call(done);
    });


});