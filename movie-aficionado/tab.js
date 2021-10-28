tab.Core = function() {
  // quote controller
  this.quoteCtrl = new tab.QuoteCtrl();
}

tab.Core.prototype = {
  // `setQuote` method
	// This method should set the `quoteStr` property of the momentum core. This method will be used as the callback for quoteCtrl's `fetchQuote` function.
	// 
	// hint. check out the `Date` object! Use `getHours` and `getMinutes`.
	// hint. figure out what kind of response the quoteData is going to be, and see how you might be able to access the quote of the day from that.
  setQuote: function(quoteData) {
		this.quoteStr = quoteData.message;
		this.quoteEl.text(this.quoteStr);
		this.render();
  },

  // `updateQuote` method
	// This function should call quoteCtrl.fetchQuote and pass in this.setQuote as the callback.
	//
	// note. you might run into scoping issues again. You should know how to solve them by now, using .call, .apply, or .bind.
	updateQuote: function() {
		// YOUR CODE HERE
		this.quoteCtrl.fetchQuote(this.setQuote.bind(this));

	},

  // `start` method
	// This method will call some of the `update...` methods. This function will be called when the page has finished loading, so that Momentum can start off with the more up-to-date data.
	start: function() {

		function error() {
		  throw "Error occured!";
		};
		
		this.updateQuote();
		this.render();
	},

  // `render` method
	// This method should "render" the time, quote and weather strings on your page by replacing the text value of your elements with their respective properties.
	// ex. this.timeStr will be rendered on to the screen using this.timeEl.text(this.timeStr);
  render: function() {
		// YOUR CODE HERE
		this.quoteEl.text(this.quoteStr);
  }
}