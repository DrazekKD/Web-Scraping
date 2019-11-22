const rp = require('request-promise');
const $ = require('cheerio');
const url = 'https://chmaro.com/';
let STATE = []
rp(url)
	.then(function(html){
		$('h1', html).map(function (i,el) {
			STATE.push({header:$(this).text()})
		}).get()
		$('article > a', html).map(function (i,el) {
			STATE.push({url:url+$(this)['0'].attribs.href})
		}).get()
	})
	.then(function(){
		console.log(STATE)
	})
	.catch(function(err){
		//handle error
	});
