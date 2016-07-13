var helpers = require( '../_helpers.js' )
    baseUrl = helpers.getUrl( casper.cli.options.env, casper.cli.options.site );

casper.test.begin('Suite #5: Checking Most Read Block', function suiteOne(){

	casper.start( baseUrl, function(){
	    casper.test.assertElementCount('.most-read', 1, 'Most read block has been found.');
	});

	casper.run(function() {
        casper.test.done();
    });
});
