var helpers = require( '../_helpers.js' )
    baseUrl = helpers.getUrl( casper.cli.options.env, casper.cli.options.site );

casper.test.begin('Suite #3: Featured Article', function suiteOne(){

	casper.start(baseUrl, function(){

		console.log('---- Checking Featured Article ----');
		if (this.visible('.article-tile-image')) {
			this.test.assert(true, '1/1 Featured Article Tile Image is rendering correctly');
		} else {
			this.test.assert(false, 'Featured Article Tile Image is not rendering correctly');	
		}
		if (this.visible('.article-tile-content')) {
			this.test.assert(true, '2/2 Featured Article Tile Content is rendering correctly');
		} else {
			this.test.assert(false, 'Featured Article Tile Content is not rendering correctly');	
		}
	});

	casper.run(function() {
        casper.test.done();
    });
});
