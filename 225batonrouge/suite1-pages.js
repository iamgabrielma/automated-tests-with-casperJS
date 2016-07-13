var helpers = require( '../_helpers.js' )
    baseUrl = helpers.getUrl( casper.cli.options.env, casper.cli.options.site );

var links           = [],
	paginationLinks = [];

//staging server
//if ( casper.cli.options.env == 'staging' ) { casper.setHttpAuth( 'lbi', 'goaway' ); }

casper.test.begin('Suite #1: Checking scaffolding, links, images and general structure', function suiteOne(){

	function getLinks(){
		links = document.querySelectorAll('a');
		return Array.prototype.map.call(links, function(e){
			return e.getAttribute('href');
		});
	}

	casper.start(baseUrl, function(){

	});

	if ( casper.cli.options.env == 'staging' ) { casper.setHttpAuth( 'lbi', 'goaway' ); }

	casper.thenOpen(baseUrl, function(){
		console.log('starting...');
		links = links.concat(this.evaluate(getLinks));
		console.log('A total of ' + links.length + ' links have been found.');
		casper.then(function(){
			console.log('cleaning up links...and locating valid ones to check');
			var validElements = [];
			var re = new RegExp('http://www.225batonrouge.com\/.*');

			function replaceElement(element, index, array){
				if (re.test(element)) {
					validElements.push(array[index]);
				}
			}
			links.forEach(replaceElement);


		});
	});

	casper.run(function() {
        casper.test.done();
    });
});
