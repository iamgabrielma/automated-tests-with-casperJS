var helpers = require( '../_helpers.js' )
    baseUrl = helpers.getUrl( casper.cli.options.env, casper.cli.options.site );

casper.test.begin('Suite #2: Header', function suiteOne(){

	casper.start( baseUrl, function(){

	/* Changed the login to outside start() function, maybe not necessary if the validation for the staging environment has been done in the previous test (suite #1) as the website has been validated already and we can keep testing without requiring Auth */
	});
	if ( casper.cli.options.env == 'staging' ) { casper.setHttpAuth( 'lbi', 'goaway' ); }
	casper.thenOpen(baseUrl, function(){
			console.log('---- Checking Header Elements ----');

			if (this.visible('.header-logo')) {
				this.test.assert(true, '1/3 Logo is rendering correctly');
			} else {
				this.test.assert(false, 'Logo is not rendering correctly');
			}
			if (this.visible('.header-search')) {
				this.test.assert(true, '2/3 Search bar is rendering correctly');
			} else {
				this.test.assert(false, 'Search bar is not rendering correctly');
			}
			if (this.visible('.header-social')) {
				this.test.assert(true, '3/3 Social media icons are rendering correctly');
			} else {
				this.test.assert(false, 'Social media icons are not rendering correctly');
			}

			var i = 1;
			var navTopLabels = ['Home', 'Business', 'Politics','Real Estate','Daily Report AM', 'Daily Report PM', 'Events'];
			console.log('Are pages visible and clickable?');

			casper.each(navTopLabels, function(self, navTopLabel){

				if (casper.clickLabel(navTopLabel, 'a') == true) {
					this.test.assert(true, 'Page: ' + i + 'of' + navTopLabels.length + ' ' + navTopLabel + ' -> ' + casper.clickLabel(navTopLabel, 'a'));
				}
				i++;
			});		
	});

	casper.run(function() {
        casper.test.done();
    });
});
