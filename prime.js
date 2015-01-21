#!/usr/local/bin/node

var factors	= require('./factors.js'),
	max		= process.argv[2],
	primes	= [];

if (max == undefined) {
	console.log('no number given\nusage: iterate-prime.js <num>');
} else {
	for (var i = 1; i <= max; i++) {
		if (factors.getFactors(i).length == 2) {
			primes.push(i);
		}
	}
	primes = primes.splice(1,primes.length);
	if (primes.length != 0) {
		console.log(primes.length + ' primes found under ' + max + ': ' + JSON.stringify(primes).replace(/[\[\]]/g,''));
	} else {
		console.log('no primes found under ' + max);
	}
}
