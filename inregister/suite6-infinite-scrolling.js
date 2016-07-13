var helpers = require( '../_helpers.js' )
    baseUrl = helpers.getUrl( casper.cli.options.env, casper.cli.options.site );

casper.test.begin('Suite #6: Checking Infinite Scrolling', function suiteOne(){

	casper.start(baseUrl, function(){

		//elements are loaded from beginning or not? no, just locates 1
		console.log('articles loaded: ' + this.getElementsInfo('.article-tile-image').length);
		// > 1
		console.log('Scrolling to bottom and waiting 3 seconds...');		
		casper.then(function(){
			casper.waitFor(function(){
				//this.page.scrollPosition = { top: this.page.scrollPosition["top"] + 4000, left: 0 };
				this.scrollToBottom();
				this.wait(3000, function(){
					console.log('waiting 3 more seconds...');
				});
				return true;
			}, function(){
				console.log('articles loaded: ' + this.getElementsInfo('.article-tile-image').length);
				// > 2 works.
				console.log('waiting 3 more seconds...');
				this.scrollToBottom();
				this.wait(5000, function(){
					//console.log('waited another 3 seconds');
					console.log('articles loaded: ' + this.getElementsInfo('.article-tile-image').length);
				});
			});
		});
		casper.then(function(){
			
				if (this.getElementsInfo('.article-tile-image').length > 12) {
					casper.test.assert(true, "infinite scrolling is working, articles loaded: " + this.getElementsInfo('.article-tile-image').length);
				} else {
					casper.test.assert(false, "infinite scrolling is not working properly, articles loaded: " + this.getElementsInfo('.article-tile-image').length);
				}
		});


	});

	casper.run(function() {
        casper.test.done();
    });
});
