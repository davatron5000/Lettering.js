/*global jQuery */
/*!
* Lettering.JS 0.7
*
* Copyright 2010, Dave Rupert http://daverupert.com
* Released under the WTFPL license
* http://sam.zoy.org/wtfpl/
*
* Thanks to Paul Irish - http://paulirish.com - for the feedback.
*
* Regexified, classinated, configurablised & deloopified by Robert O'Rourke - http://sanchothefat.com
*
* Date: Tue Apr 5 10:00:00 2011
*/
(function($){
	function injector(t, opts) {
		var i = 0,
			c = [],
			inject = t.text().replace(opts.rgxp, function(){
				c = [];
				if ( opts.classes.klass ) c.push(opts.klass);
				if ( opts.classes.text  ) c.push(opts.klass + '-' + escape( arguments[1] ).replace('%','u') ); // sanitise for class name
				if ( opts.classes.num   ) c.push(opts.klass + ++i);
				return '<span class="' + c.join(' ') + '">'+ arguments[1] +'</span>';
			});
		t.html( inject );
	}

	var methods = {
		letters : function( options ) {

			return this.each(function() {
				injector( $(this), $.extend({ rgxp: /(.)/gim, klass: 'char', classes: { klass: false, text: true, num: true } }, options) );
			});

		},

		words: function( options ) {

			return this.each(function(){
				injector( $(this), $.extend({ rgxp: /([^\s]+)/gim, klass: 'word', classes: { klass: false, text: true, num: true } }, options) );
			});

		},

		lines : function( options ) {

			return this.each(function() {
				// Because it's hard to split a <br/> tag consistently across browsers,
				// (*ahem* IE *ahem*), we replaces all <br/> instances with an md5 hash
				// (of the word "split").  If you're trying to use this plugin on that
				// md5 hash string, it will fail because you're being ridiculous.
				injector( $(this).children("br").replaceWith('eefec303079ad17405c889e092e105b0').end(), $.extend({ rgxp: /\s*(.*?)\s*(eefec303079ad17405c889e092e105b0|$)/gim, klass: 'line', classes: { klass: false, text: false, num: true } }, options) );
				$('span:last',this).remove(); // currently leaves a blank extra span at the end :|
			});

		},

		dropcap: function( options ) {

			return this.each(function(){
				injector( $(this), $.extend({ rgxp: /^(\w)/im, klass: 'dropcap', classes: { klass: true, text: true, num: false } }, options) );
			});

		}
	};

	$.fn.lettering = function( method ) {
		// Method calling logic
		if ( methods[method] ) {
			return methods[ method ].apply( this, Array.prototype.slice.call( arguments, 1 ));
		} else if ( typeof method === 'object' || ! method ) {
			return methods.letters.apply( this, arguments ); // default to letters method
		} else {
			$.error( 'Method ' +  method + ' does not exist on jQuery.lettering' );
		}
		return this;
	};

})(jQuery);
