/*global jQuery */
/*!
* Lettering.JS 0.6.1
*
* Copyright 2010, Dave Rupert http://daverupert.com
* Released under the WTFPL license
* http://sam.zoy.org/wtfpl/
*
* Thanks to Paul Irish - http://paulirish.com - for the feedback.
*
* Date: Mon Sep 20 17:14:00 2010 -0600
*/
(function($){
	function injector(options) {
    var opt = options || {};
		var a = opt.t.text().split(opt.splitter), inject = '';
		if (a.length) {
			$(a).each(function(i, item) {
        if (opt.nwords && parseInt(opt.nwords, 10) <= i ) {
          inject += item+opt.after;
        } else {
          inject += '<span class="'+opt.klass+(i+1)+'">'+item+'</span>'+opt.after;
        }
			});
			opt.t.empty().append(inject);
		}
	}

	var methods = {
		init : function() {

			return this.each(function() {
				injector({t: $(this), splitter: '', klass: 'char', after: ''});
			});

		},

		words : function() {

			return this.each(function() {
				injector({t: $(this), splitter: ' ', klass: 'word', after: ' '});
			});

		},

		nwords : function(number_of_words) {
      var nwords = number_of_words || 0;

			return this.each(function() {
				injector({t: $(this), splitter: ' ', klass: 'word', after: ' ', nwords: nwords});
			});

		},

		lines : function() {

			return this.each(function() {
				var r = "eefec303079ad17405c889e092e105b0";
				// Because it's hard to split a <br/> tag consistently across browsers,
				// (*ahem* IE *ahem*), we replaces all <br/> instances with an md5 hash
				// (of the word "split").  If you're trying to use this plugin on that
				// md5 hash string, it will fail because you're being ridiculous.
				injector({t: $(this).children("br").replaceWith(r).end(), splitter: r, klass: 'line', after: ''});
			});

		}
	};

	$.fn.lettering = function( method ) {
		// Method calling logic
		if ( method && methods[method] ) {
			return methods[ method ].apply( this, [].slice.call( arguments, 1 ));
		} else if ( method === 'letters' || ! method ) {
			return methods.init.apply( this, [].slice.call( arguments, 0 ) ); // always pass an array
		}
		$.error( 'Method ' +  method + ' does not exist on jQuery.lettering' );
		return this;
	};

})(jQuery);