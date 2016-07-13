var helpers = require( '../_helpers.js' )
    baseUrl = helpers.getUrl( casper.cli.options.env, casper.cli.options.site );

casper.test.begin('Suite #5: Checking Must-Read Block', function suiteOne(){

	casper.start(baseUrl, function(){
		console.log('---- Checking Sidebar Must-Read Block Elements ----');

	    casper.test.assertElementCount('.must-read-block', 4, '4of4 must-read blocks has been found.');
	}).viewport( 1600, 900 );


	casper.run(function() {
        casper.test.done();
    });
});
