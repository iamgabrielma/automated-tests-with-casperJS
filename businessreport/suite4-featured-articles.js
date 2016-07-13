var helpers = require( '../_helpers.js' )
    baseUrl = helpers.getUrl( casper.cli.options.env, casper.cli.options.site );

casper.test.begin('Suite #4: Featured Articles', function suiteOne(){

	casper.start( baseUrl, function(){

		console.log('---- Checking Featured Articles ----');
		//if (this.visible('.big-article-image')) {
		if (this.visible('.article-feature-image--preload')) {
			this.test.assert(true, '1/2 Featured article image is rendering correctly');
		} else {
			this.test.assert(false, 'Featured article image is not rendering correctly');
		}
		if (this.visible('.big-article-title')) {
			this.test.assert(true, '2/2 Featured article title is rendering correctly');
		} else {
			this.test.assert(false, 'Featured article title is not rendering correctly');
		}

		casper.then(function(){

			console.log('---- Checking 10 Articles Display ----');
			casper.test.assertElementCount('.article-list-article', 10, '10 articles has been found.');

		});

	});

	casper.run(function() {
        casper.test.done();
    });
});
