'use strict';

module.exports = {
	el : function (selector, optNode) {
		var elem = document;

		if (optNode) {
			elem = optNode;
		}

    var elements = elem.querySelectorAll(selector);

    return elements.length === 1 ? elements[0] : elements;
  }
};