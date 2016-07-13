var helpers = require( '../_helpers.js' )
    baseUrl = helpers.getUrl( casper.cli.options.env, casper.cli.options.site );

casper.test.begin('Suite #2: Header', function suiteOne(){

	casper.start(baseUrl, function(){

			console.log('---- Checking Header Elements ----');

			if (this.visible('.header-logo')) {
				this.test.assert(true, 'Test 1/3 Logo is rendering correctly');
			} else {
				this.test.assert(false, 'Logo is not rendering correctly');	
			}
			if (this.visible('.header-search')) {
				this.test.assert(true, 'Test 2/3 Search bar is rendering correctly');
			} else {
				this.test.assert(false, 'Search bar is not rendering correctly');	
			}
			if (this.visible('.social-link')) {
				this.test.assert(true, 'Test 3/3 Social media icons are rendering correctly');
			} else {
				this.test.assert(false, 'Social media icons are not rendering correctly');	
			}

			var i = 1;
			var navTopLabels = ['Main', 'Features', 'Style','Homes','Weddings', 'Cuisine', 'Events', 'Advertising', 'About Us'];
			console.log('Are pages visible and clickable?');
			
			casper.each(navTopLabels, function(self, navTopLabel){
				
				if (casper.clickLabel(navTopLabel, 'a') == true) {
					this.test.assert(true, 'Page: ' + i + 'of' + navTopLabels.length + ' ' + navTopLabel + ' -> ' + casper.clickLabel(navTopLabel, 'a'));
				}
				i++;
			});

			if (this.visible('.splitter-container')) {
				this.test.assert(true, 'Splitter container is rendering correctly');
			} else {
				this.test.assert(false, 'Splitter container is not rendering correctly');	
			}

		});

	casper.run(function() {
        casper.test.done();
    });
});