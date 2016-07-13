var helpers = require( '../_helpers.js' )
    baseUrl = helpers.getUrl( casper.cli.options.env, casper.cli.options.site );

casper.test.begin('Suite #8: Checking daily report PM', function suiteOne(){

	casper.start(baseUrl + 'daily_report_pm', function(){
		
		console.log(this.getCurrentUrl());
		/* WIP */
		console.log('Testing infinite scrolling 1/5...');
		console.log('articles loaded: ' + this.getElementsInfo('.article-page').length);

		//console.log(this.getElementAttribute('h2'));

		casper.waitFor(function(){
			
			this.scrollToBottom();
			this.wait(3000, function(){
				//console.log('waiting 3 more seconds...');
				console.log('Testing infinite scrolling 2/5...');
				theJSONObject = JSON.stringify(this.getElementsInfo('h2.title'));
				theNewJSONObject = JSON.parse(theJSONObject);
				console.log(theNewJSONObject[0]['text']);
			});
			return true;

		}, function(){
					
			//console.log('articles loaded: ' + this.getElementsInfo('.article-page').length);
			console.log('Testing infinite scrolling 3/5...');
			this.scrollToBottom();
			this.wait(3000, function(){
					
				console.log('articles loaded: ' + this.getElementsInfo('.article-page').length);
				console.log(theNewJSONObject[1]["text"]);
			});
		});

		casper.then(function(){

			casper.waitFor(function(){
			
			this.scrollToBottom();
			this.wait(3000, function(){
				console.log('Testing infinite scrolling 4/5...');

				theJSONObject = JSON.stringify(this.getElementsInfo('h2.title'));

				theNewJSONObject = JSON.parse(theJSONObject);

				console.log(theNewJSONObject[2]['text']);

			});
			return true;

		}, function(){
					
			console.log('Testing infinite scrolling 5/5...');
			this.scrollToBottom();
			this.wait(3000, function(){
	
				console.log('articles loaded: ' + this.getElementsInfo('.article-page').length);
				console.log(theNewJSONObject[3]["text"]);
				
			});
		});

		});

		casper.then(function(){
			
				if (this.getElementsInfo('.article-page').length > 4) {
					casper.test.assert(true, "infinite scrolling is working, articles loaded: " + this.getElementsInfo('.article-page').length);
				} else {
					casper.test.assert(false, "infinite scrolling is not working properly, articles loaded: " + this.getElementsInfo('.article-page').length);
				}
		});
	});

	casper.run(function() {
        casper.test.done();
    });
});