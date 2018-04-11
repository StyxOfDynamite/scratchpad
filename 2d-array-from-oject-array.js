	const whitelist = [
		{ url: 'https://styxofdynamite.github.io/scratchpad/json-ld.html' },
	  	{ url: 'https://styxofdynamite.github.io/scratchpad/json-ld.html' },
	  	{ url: 'afafa.com/a' }
	];

	const array = [];
	for (var i = whitelist.length - 1; i >= 0; i--) {
		console.log(JSON.parse(whitelist[i]));
		//array.push(whitelist[i.url]);
	}

	console.log(array);

