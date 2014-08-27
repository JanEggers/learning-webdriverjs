'use strict';

var webdriverjs = require('webdriverjs');
var assert = require('assert');


//https://github.com/vvo/selenium-standalone

// Docu: https://code.google.com/p/selenium/source/browse/javascript/webdriver/webdriver.js

describe('Component', function () {

	var url = 'http://localhost:3000';

	this.timeout(99999999);
	var client = {};

	before(function (done) {
		client = webdriverjs.remote({desiredCapabilities: { browserName: 'phantomjs' }} );
            client.init(done);
	});

	it('has title', function (done) {
	
		client
			.url(url)
			.getTitle(function(err, title) {
                 		assert(err === null);
                 		assert(title === 'Component Test');
             	})
			.call(done);
	});

	it('has heading', function (done) {
	
		client
			.url(url)
			.getText ('#component h2', function(err, text)  {
				assert(err === null);
				assert.equal(text, 'Currency Converter');
			})
			.call(done);
	});

	after(function(done) {
        	client.end(done);
    	});
});