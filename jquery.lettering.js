// encoding: utf-8
// ----------------------------------------------------------------------------------
// jQuery.fn.lettering v 1.0
// ----------------------------------------------------------------------------------
// (c) 2010 Már Örlygsson -- http://mar.anomy.net
// ----------------------------------------------------------------------------------
// An almost completely rewritten fork off Dave Rupert's original plugin
// http://daverupert.com/2010/09/lettering-js/
//
// Dual licensed under a MIT licence (http://en.wikipedia.org/wiki/MIT_License)
// and GPL 2.0 or above (http://www.gnu.org/licenses/old-licenses/gpl-2.0.html).
//
//
//
// Requires: jQuery 1.2.6+
//
//
// Usage:
//   jQuery('p').lettering();                         // defaults to the 'letters' preset
//   jQuery('p').lettering( methodName );             // falls back to 'letters' for undefined methodNames (presets)
//   jQuery('p').lettering( methodName, extraOpts );  // using a preset but mixing it with some extraOtions
//   jQuery('p').lettering( options );                // using custom options
//
//
// The default options:
//  jQuery.fn.lettering.defaults = {
//        split:   '',          // String or RegExp to split the original element's text on. Defaults to ('') single character splits.
//        prep:    undefined,   // (Example: `function ( elm ){ var cfg = this; /*...*/ }`) Function that gets run before the injector function is run
//        addAttr: false,       // Specifies whether to set each element's content as data-cont="" attribute (allows letter-pair-based kerning, for example)
//        mapAttr: undefined,   // (Example: `''.toLowerCase`) Optional transformation function that the content of element is passed through before being assigning to the data-cont="" attribute.
//        after:   '',          // Optional HTML content that gets injected after each injected element.
//        tag:     'span',      // tagName for the injected elements.
//        cl:      'char',      // className for the injected elements.
//        num:     true         // Specifies whether to add indexed-classNames (char1, char2, char3, etc...) 
//      };
//
//
// The default methodNames (presets) available:
//     `letters` // splits the element's contents into individual <span class="char char{N}"/>s
//     `kern`    // splits the element's contents into individual <span class="char"/>s - setting data-cont="" attribute on each
//     `words`   // destructively splits element's .text() on spaces, tabs, and newlines. Adds the classNames `word word{N}`
//     `lines`   // destructively splits element's .text() on <br/>s. Adds the classNames `line line{N}`
//
//
(function($){

  var lettering = $.fn.lettering = function ( presetName, extraCfg ) {
          //cfg = $.extend({}, defaults, (typeof cfg != 'string' ? cfg : (presets[cfg]||presets.letters)) );
          var cfg = $.extend({}, defaults, presets[presetName]||presetName||presets.letters, extraCfg );  // in praxis this behaves the same as the above line ... trades mess for compactness.
          return this.each(function(){
              cfg.prep && cfg.prep( this );
              injector.call(this, cfg );
              if ( cfg.num )
              {
                $(this).find( cfg.tag+'.'+cfg.cl.replace(/\s/g, '.') )
                    .addClass(function (i) { return cfg.cl+(i+1) });
              }
            });
        },

      injector = function ( cfg, count ) {
          var node = this,
              arr = cfg.split ?
                        $(node).text().split(cfg.split):
                    node.nodeType == 3 ? // textNode
                        node.nodeValue.split(''):
                    node.nodeType == 1 ? // Element
                        node.childNodes:
                        [],
              contentAttr,
              newHtml = [],
              i = arr.length;
          while ( i-- )
          {
            var item = arr[i];
            if  ( item )
            {
              if ( typeof item == 'string' )
              {
                contentAttr = '';
                if ( cfg.addAttr )
                {
                  item = cfg.matAttr ? cfg.mapAttr.call(item) : item;
                  contentAttr = ' data-cont="'+(item=='"'?'&quot;':item)+'"';
                }
                newHtml.push(
                    '<span class="'+cfg.cl+'"'+contentAttr+'>'+item+'</span>'+(cfg.after||'')
                  );
              }
              else
              {
                injector.call( item, cfg );
              }
            }
          }
          newHtml.length  &&  $(node)[cfg.split?'html':'replaceWith']( newHtml.reverse().join('') );
        },

      presets = lettering.presets = {
          letters: {},
          kern:    {  addAttr: !0/*true*/,  num:!1/*false*/  },
          words:   {  split: /\s+/,  cl: 'word',  after: ' '  },
          lines:   {
              cl:   'line',
              prep: function ( elm ) {
                  this.split = '|'+(new Date()).getTime()+'|';
                  // Replace <br>s because it's hard to split a <br/> tag consistently across browsers,
                  $(elm).find('br').replaceWith( this.split );
                }
            }
        },

      defaults = lettering.defaults = {
          //split: '',
          //prep:    undefined,   // function ( elm ){ var cfg = this; /*...*/ },
          //addAttr: false,
          //mapAttr: undefined,   // ''.toLowerCase,
          //after: '',
          tag:   'span',
          cl:    'char',
          num:   !0 // true
        };


})(jQuery);