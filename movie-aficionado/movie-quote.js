// "use strict";

// window.momentum = window.momentum || {};

// // Quotes

// momentum.QuoteCtrl = function() {
//   this.apiUrl = "https://horizonshq.herokuapp.com/api/inspirationalquotes";
// };

// momentum.QuoteCtrl.prototype = {
//   fetchQuote: function(cb) {
//     $.ajax({
//       url: this.apiUrl,
//       method: "GET",
//       success: cb
//     });
//   }
// };

//GET
fetch("https://andruxnet-random-famous-quotes.p.rapidapi.com/?cat=famous&count=10", {
	"method": "GET",
	"headers": {
		"x-rapidapi-host": "andruxnet-random-famous-quotes.p.rapidapi.com",
		"x-rapidapi-key": "f4a3bf37d9mshea179a8d1b02ad6p155b59jsn5e38c3ea6dd6"
	}
})
.then(response => {
	console.log(response);
})
.catch(err => {
	console.error(err);
});

//POST
fetch("https://andruxnet-random-famous-quotes.p.rapidapi.com/?cat=movies&count=10", {
	"method": "POST",
	"headers": {
		"x-rapidapi-host": "andruxnet-random-famous-quotes.p.rapidapi.com",
		"x-rapidapi-key": "f4a3bf37d9mshea179a8d1b02ad6p155b59jsn5e38c3ea6dd6"
	}
})
.then(response => {
	console.log(response);
})
.catch(err => {
	console.error(err);
});