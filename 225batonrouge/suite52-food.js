var helpers = require( '../_helpers.js' )
    baseUrl = helpers.getUrl( casper.cli.options.env, casper.cli.options.site );

casper.test.begin('Suite #52: Checking food page', function suiteOne(){

	casper.start(baseUrl + 'food', function(){
		
		console.log(this.getCurrentUrl());

		console.log('articles loaded: ' + this.getElementsInfo('.article-tile-content').length);
		console.log('waiting 3 more seconds...');

		casper.waitFor(function(){
			
			this.scrollToBottom();
			this.wait(3000, function(){
				console.log('waiting 3 more seconds...');
			});
			return true;

		}, function(){
					
			console.log('articles loaded: ' + this.getElementsInfo('.article-tile-content').length);
			console.log('waiting 3 more seconds...');
			this.scrollToBottom();
			this.wait(5000, function(){
					
				console.log('articles loaded: ' + this.getElementsInfo('.article-tile-content').length);
			});
		});

		casper.then(function(){
			
				if (this.getElementsInfo('.article-tile-content').length > 25) {
					casper.test.assert(true, "infinite scrolling is working, articles loaded: " + this.getElementsInfo('.article-tile-content').length);
				} else {
					casper.test.assert(false, "infinite scrolling is not working properly, articles loaded: " + this.getElementsInfo('.article-tile-content').length);
				}
		});

		casper.then(function(){
	
			console.log('------------------- Checking Newsletter -------------------');
			if (this.visible('.front-newsletter-box')) {
				this.test.assert(true, 'newsletter box is rendering correctly');
			} else {
				this.test.assert(false, 'newsletter box is not rendering correctly');	
			}
			casper.test.assertElementCount('.front-newsletter-box', 2, 'newsletter box x2 has been found.');	

		});
	});

	casper.run(function() {
        casper.test.done();
    });
});