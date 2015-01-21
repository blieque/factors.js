// "export" contents to scripts that include this
module.exports = {

	// function available when factors.js is included
	getFactors: function(num) {

		// initialise an array for factors
		var div = [];

		// starting at one as we can'ne divide by zero.
		for (var i = 1; i < num / 2 + 1; i++) {

			if (num % i == 0) {
				// if we have a factor, push it to the array
				div.push(num / i);
			}

		}

		// 'cause one's, like, always a factor, yo
		div.push(1);
		// return our array of factors
		return div;

	}

};
