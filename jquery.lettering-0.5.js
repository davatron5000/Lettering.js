/* Lettering.JS 0.5 by Dave Rupert  - http://daverupert.com */
(function($){
	var methods = {
		init : function() {

			return this.each(function() {
				var t = $(this), c = new Array(); //c = chars
				c = t.text().split('');
				if(c.length > 0) {
					t.empty();
					$(c).each(function(i, char) {

						t.append('<span class="char'+(i+1)+'">'+char+'</span>');

					});
				}
			});

		},

		words : function() {

			return this.each(function() {
				var t = $(this), w = new Array(); //w = words
				w = t.text().split(' ');
				if(w.length > 0) {
					t.empty();
					$(w).each(function(i, word) {

						t.append('<span class="word'+(i+1)+'">'+word+'</span> ');

					});
				}
			});

		},
		
		lines : function() {

			return this.each(function() {
				var t = $(this), r = "eefec303079ad17405c889e092e105b0", l = new Array(); // r = replacement string, l = lines
				// Because it's hard to split a <br/> tag consistently across browser, 
				// we replaces all <br/> instances with an md5 hash (of the word "split").
				// If you're trying to usd this plugin on that md5 hash it will fail
				// because you're being ridiculous.
				t.children("br").replaceWith(r);
				// then we immediately split that.
				l = t.text().split(r); // changed .html() to .text() 
				if(l.length > 0) {
					t.empty();
					$(l).each(function(i, line) {

						t.append('<span class="line'+(i+1)+'">'+line+'</span>');

					});
				}
			});

		}
	};


	$.fn.lettering = function( method ) {
		// Method calling logic
		if ( methods[method] ) {
			return methods[ method ].apply( this, Array.prototype.slice.call( arguments, 1 ));
		} else if ( method == 'letters' || ! method ) {
			return methods.init.apply( this, arguments );
		} else {
			$.error( 'Method ' +  method + ' does not exist on jQuery.lettering' );
		}
	};

})(jQuery);