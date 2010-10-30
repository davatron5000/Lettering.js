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
* Optimized by Már Örlygsson - http://mar.anomy.net/
*/
(function($){
	var injector = function (c, splitter, klass, after, addContent) {
		c.each(function(){
			var t = $(this),
			    a = t.text().split(splitter),
			    inject = '';
			if (a.length) {
				$(a).each(function(i, item) {
					var contentAttr = addContent ? ' data-chr="'+item+'"' : '';
					inject += '<span class="'+klass+(i+1)+'"'+contentAttr+'>'+item+'</span>'+after;
				});	
				t.html(inject);
			}
		});
	}
	var methods = {
		letters : function ( t ) {
			injector( t, '', 'char', '' );
		},
		kern : function ( t ) {
			injector( t, '', 'char char', '', true );
		},
		words : function( t ) {
			injector( t, /\s+/, 'word', ' ' );
		},
		lines : function( t ) {
			var r = 'eefec303079ad17405c889e092e105b0';
			// Because it's hard to split a <br/> tag consistently across browsers,
			// (*ahem* IE *ahem*), we replaces all <br/> instances with an md5 hash 
			// (of the word "split").  If you're trying to use this plugin on that 
			// md5 hash string, it will fail because you're being ridiculous.
			injector( t.find('br').replaceWith(r).end(), r, 'line', '' );
		}
	};

	$.fn.lettering = function( method ) {
		method = method || 'letters';
		if ( methods[method] ) {
			methods[ method ]( this );
		} else {
			$.error( 'Method ' +  method + ' does not exist on jQuery.lettering' );
		}
		return this;
	};

})(jQuery);