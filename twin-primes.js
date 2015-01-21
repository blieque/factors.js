#!/usr/local/bin/node

var factors	= require('./factors.js'),
	max		= process.argv[2],
	primes	= [0],
	lastPrime;

if (max == undefined) {
	console.log('no number given\nusage: twin-primes.js <num>');
} else {
	for (var i = 1; i <= max; i++) {
		if (factors.getFactors(i).length == 2) {
			primes.push([lastPrime,i]);
			lastPrime = i;
		}
	}
	primes = primes.splice(2,primes.length);	// remove zero from start
	if (primes.length != 0) {
		console.log(primes.length + ' prime pairs found under ' + max + ': ' + JSON.stringify(primes).replace(/\[\[/g,'[').replace(/\]\]/g,']'));
	} else {
		console.log('no prime pairs found under ' + max);
	}
}
