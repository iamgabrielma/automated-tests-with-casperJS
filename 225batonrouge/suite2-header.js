var helpers = require( '../_helpers.js' )
    baseUrl = helpers.getUrl( casper.cli.options.env, casper.cli.options.site );

var socialLinks = [];

casper.test.begin('Suite #2: Header', function suiteOne(){

	function getSocialLinks(){
		socialLinks = document.querySelectorAll('.social-link');
		return Array.prototype.map.call(socialLinks, function(e){
			return e.getAttribute('href');
		});
	}

	casper.start(baseUrl, function(){

			console.log('---- Checking Header Elements ----');

			if (this.visible('.logo-225')) {
				this.test.assert(true, 'Test 1/3 Logo is rendering correctly');
			} else {
				this.test.assert(false, 'Logo is not rendering correctly');	
			}
			
			socialLinks = socialLinks.concat(this.evaluate(getSocialLinks));
			if (socialLinks.length > 3) {
				this.test.assert(true, 'Test 2/3 social links are rendering correctly');
			} else {
				this.test.assert(false, 'social links are not rendering correctly');	
			}
			

			if (this.visible('#js-header-search-button')) {
				this.test.assert(true, 'Test 3/3 js-header-search-button is rendering correctly');
			} else {
				this.test.assert(false, 'js-header-search-button not rendering correctly');	
			}



		});



		casper.then(function(){
			var i = 1;
			console.log('---- Checking Top Navigation: Visible and Clickable? ----');
			var navTopLabels = ['Home','Entertainment','Food','Style','Community','Best of 225','Events'];
			casper.each(navTopLabels, function(self, navTopLabel){
				if (casper.clickLabel(navTopLabel, 'a') == true) {
					this.test.assert(true, i + '/' + navTopLabels.length + ' ' + navTopLabel + ' -> ' + casper.clickLabel(navTopLabel, 'a'));
				}
				i++;
			});
		});


	casper.run(function() {
        casper.test.done();
    });
});
