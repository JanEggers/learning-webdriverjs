'use strict';

//https://github.com/vvo/selenium-standalone

var webdriverjs = require('webdriverjs');
var assert = require('assert');


// Docu: https://code.google.com/p/selenium/source/browse/javascript/webdriver/webdriver.js

describe('HSR Startpage', function () {
	this.timeout(99999999);
	var client = {};

	before(function (done) {
		client = webdriverjs.remote({desiredCapabilities: { browserName: 'phantomjs' }} );
            client.init(done);
	});

	it('has title', function (done) {
	
		client
			.url('http://www.hsr.ch/')
			.getTitle(function(err, title) {
                 		assert(err === null);
                 		assert(title === 'HSR Hochschule für Technik Rapperswil: Home');
             	})
			.call(done);
	});

	it('has a logo', function (done) {
	
		client
			.url('http://www.hsr.ch/')
			.getTagName ('#logo', function(err, tagName)  {
				console.log(tagName, err);
			});
			.call(done);
	});

	after(function(done) {
        	client.end(done);
    	});
});