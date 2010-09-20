# Lettering.js, a jQuery plugin for radical Web Typography
We developed a lightweight, easy to use Javascript `span` injector for radical Web Typography, we're calling it "Lettering Dot JS", and we're releasing it today for free over on Github. Let me demo it for you: `</stevejobs>`

## Individual Letter Control with Lettering.js
We'll start with some really basic markup:

	<h1 class="fancy_title">Some Title</h1>

After including jQuery, [download and include the minified version of Lettering.js](http://github.com/davatron5000/Lettering.js/downloads), then a script block with the magical `.lettering()` method:
	
	<script src="path/to/jquery-1.4.2.min.js"></script>
	<script src="path/to/jquery.lettering.min.js"></script>
	<script>
	$(document).ready(function() {
	  $(".fancy_title").lettering();
	});
	</script>
	
The resulting code will churn your `.fancy_title` and output the following:

	<h1 class="fancy_title">
	  <span class="char1">S</span>
	  <span class="char2">o</span>
	  <span class="char3">m</span>
	  <span class="char4">e</span>
	  <span class="char5"></span>
	  <span class="char6">T</span>
	  <span class="char7">i</span>
	  <span class="char8">t</span>
	  <span class="char9">l</span>
	  <span class="char10">e</span>
	</h1>

Magical. Now the text is easy to manipulate in your CSS using an ordinal `.char#` pattern.  This plugin assumes basic counting skills, but it's a pretty fast and easy way to get control over every letter.

As you can imagine, it would be a pain in the ass to have all those `spans` littering your markup and a nightmare to maintain. If the client came by the next day and said that the SEO Expert demands that you have to change the title to "Cool Title", it'd just be a matter of changing the original clean markup to:

	<h1 class="fancy_title">Cool Title</h1>

It also plays nicely with CMSs like WordPress or Expression Engine and art direction plugins.

## Wrap Words with Lettering.js
Once we developed this e-solution and played with it, we found it useful enough to broaden the scope so that we could break apart and wrap words in a sentence in a span tag.

Here's an example of the `.lettering('words')` method:

	<p class="word_split">Don't break my heart.</p>

	<script>
	$(document).ready(function() {
	  $(".word_split").lettering('words');
	});
	</script>

Which will generate:

	<p class="word_split">
	  <span class="word1">Don't</span>
	  <span class="word2">break</span>
	  <span class="word3">my</span>
	  <span class="word4">heart.</span>
	</p>

You can then style each word using the `.word#` class.

## Wrap Lines with Lettering.js
Once word wrapping was complete, we noticed the need for yet another method, one that would break lines up mid-sentence.  We struggled for a semantic way to do this, but then remembered `<br>` tag which a semantic way to say "break this line".  Similar to the above examples where lines of text are broken up by either non-breaking spaces or individual letters, the `lettering('lines')` method will create breakpoints at `<br>` tags:

	<p class="line_split">Are you<br/> ready to<br/> RUMmMmMMBBLE!</p>

	<script>
	$(document).ready(function() {
	  $(".line_split").lettering('lines');
	});
	</script>

Resulting code:

	<p class="line_split">
	  <span class="line1">Are you</span>
	  <span class="line2">ready to</span>
	  <span class="line3">RUMmMmMMBBLE!</span>
	</p>

As expected it uses the `.line#` ordinal pattern.  You'll also notice the `<br>`'s have been destructively ripped out.  In your CSS, you'll want to declare something like `.line_split span { display:block; }` if you need them to behave as a `<br>` element.

## Best Practices &amp; Kerning
We've found this to be a pretty quick and elegant solution to create typographical CSS3 posters. It's also a great solution for really custom type headings, while keeping the text selectable.

### Best Practices
Be smart and use sparingly. You'll probably break your browser if you try to wrap every letter on your page in a `span` tag, so don't do that.  Look to use this in your Headings, Blockquotes, Asides, etc.

### Kern Well
If you're going through the trouble to load a fancy font and that word or phrase is the largest on the site, then it's important for it to be kerned well.  With Lettering.js, kerning is a breeze. You can simply use `$("#id-of-what-i-want-to-kern").lettering();` and then on each `.char#`, you can set relative position or left/right margin. Works like a charm.

### Non-Javascript Fallback
As with any kind of Javascript, have a fall back plan in case the user doesn't have javascript enabled.  The bottom line is up to you, my bottom line would be "legible and on the screen". Also, use `lettering.min.js` [Download the Minified Version of Lettering.js here](http://github.com/davatron5000/Lettering.js/downloads)

### Performance Anti-Pattern
Web performance patterns advise that you put Javascripts at the bottom of your page before your `</body>` tag.  There is an unfortunate side effect where you may experiences a [FOUT (Flash of Unstyled Text)](http://paulirish.com/2009/fighting-the-font-face-fout/) when you're manipulating your text after the DOM has loaded.  Unfortunately, we found the best solution to avoid/minimize the FOUT caused by this plugin is to put your scripts (jQuery, Lettering.js) in the document `<head>`. On the one hand, your page will load slower. On the other hand, a flash/restyling makes your site feel slow. Users might ultimately feel the site is faster if they don't see the FOUT.

## Download, Fork, Commit, Please.
We really want Lettering.js to be a quality helper for web typography.  If you have any feedback or suggestions, please leave those over on the Github.  We're excited about typography on the web and want to help make it print quality.
