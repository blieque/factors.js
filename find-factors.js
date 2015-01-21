#!/usr/local/bin/node

var factors	= require('./factors.js'),
	max		= process.argv[2],
	fac		= factors.getFactors(max);

if (max == undefined) {
	console.log('no number given\nusage: find-factors.js <num>');
} else {
	if (fac.length == 2) {
		console.log(max + ' has only two factors, ' + max + ' and 1.\nit\'s a prime!');
	} else {
		console.log(fac.length + ' factors found of ' + max + ': ' + JSON.stringify(fac).replace(/[\[\]]/g,''));
	}
}
