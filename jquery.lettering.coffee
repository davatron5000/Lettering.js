$ = jQuery # CoffeeScript already wraps our function in a closure, so don't bother doing it again
injector = (t, splitter, klass, after) ->
	a = t.text().split splitter
	inject = ''
	if a.length
		$(a).each (i, item) ->
			inject += '<span class="'+klass+(i+1)+'">'+item+'</span>'+after
			return
	t.empty().append inject
	return
methods =
	init: ->
		@.each ->
			injector $(@), '', 'char', ''
			return
	words: ->
		@.each ->
			injector $(@), ' ', 'word', ' '
			return
	lines: ->
		@.each ->
			r = "eefec303079ad17405c889e092e105b0"
			# Because it's hard to split a <br/> tag consistently across browsers,
			# (*ahem* IE *ahem*), we replaces all <br/> instances with an md5 hash
			# (of the word "split").  If you're trying to use this plugin on that
			# md5 hash string, it will fail because you're being ridiculous.
			injector $(@).children("br").replaceWith(r).end(), r, 'line', ''
			return

$.fn.lettering = ( method ) ->
	# Method calling logic
	return if method? and methods[method]?
	then methods[ method ].apply @, [].slice.call( arguments, 1 )
	else methods.init.apply @, [].slice.call( arguments, 0 ) # Always pass an array
	$.error 'Method ' +  method + ' does not exist on jQuery.lettering'
	return @
