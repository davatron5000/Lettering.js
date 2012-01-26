/* Pure javascript version of lettering.js without dependencies */
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
(function(){
	function injector(t, splitter, klass, after) {
	    //Find a cross browser innerText
	    if (typeof t.textContent != 'undefined') {
	        var a = t.textContent;
	    } else {
	        var a = t.innerText;
	    }
		var a = a.split(splitter), inject = '';
		if (a.length) {
		    for(var i=0, len=a.length; item=a[i], i<len; i++) {
				inject += '<span class="'+klass+(i+1)+'">'+item+'</span>'+after;		    
		    }
			t.innerHTML = inject;
		}
	}
	
	var methods = {
		init : function( el ) {
			for(var i=el.length-1; i>=0; --i) {
				injector(el[i], '', 'char', '');
			}

		},

		words : function( el ) {

			for(var i=el.length-1; i>=0; --i) {
				injector(el[i], ' ', 'word', ' ');
			}

		},
		
		lines : function( el ) {
		    
			for(var i=el.length-1; i>=0; --i) {
				var r = "eefec303079ad17405c889e092e105b0";
				// Because it's hard to split a <br/> tag consistently across browsers,
				// (*ahem* IE *ahem*), we replaces all <br/> instances with an md5 hash 
				// (of the word "split").  If you're trying to use this plugin on that 
				// md5 hash string, it will fail because you're being ridiculous.
				el[i].innerHTML = el[i].innerHTML.replace(/<br\s*[\/]?>/gi, r);
				injector(el[i], r, 'line', '');
			}

		}
	};

	lettering = function( el, method ) {
	    if (el == null) {
	        return;
	    }
	    if (typeof(el.length) == "undefined") {
	        el = [el];
	    }
		// Method calling logic
		if ( method && methods[method] ) {
		    methods[ method ](el);
		} else if ( method === 'letters' || ! method ) {
		    methods.init(el);
		}
	};

})();