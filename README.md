
## Lettering.js, a jQuery plugin for radical Web Typography
We developed a lightweight, easy to use Javascript `span` injector for radical Web Typography, we're calling it "lettering-jay-ess", and we're releasing it today for free over on Github. Let me demo it for you: `</stevejobs>`

### Individual Letter Control with Lettering.js
We'll start with some really basic markup:

```html
<h1 class="fancy_title">Some Title</h1>
```
After including `jQuery 1.6.2+`, [download and include the minified version of Lettering.js](http://github.com/davatron5000/Lettering.js/downloads), then a script block with the magical `.lettering()` method:

```html
<script>
	  $(document).ready(function() {
	    $(".fancy_title").lettering();
	  });
</script>
```
The resulting code will churn your `.fancy_title` and output the following:

```html
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
```
Magical. Now the text is easy to manipulate in your CSS using an ordinal `.char#` pattern.  This plugin assumes basic counting skills, but it's a pretty fast and easy way to get control over every letter.

### Letters, words, lines, and more!

There you have it, but Lettering.js does even more! Lettering.js has the ability to split `words` and `lines` as well. If you want more information on how you can get radical with text, read the Lettering.js Wiki:

[https://github.com/davatron5000/Lettering.js/wiki](https://github.com/davatron5000/Lettering.js/wiki)

#### Best Practices
We've found this to be a pretty quick and elegant solution to create typographical CSS3 posters. It's also a great solution for really custom type headings, while keeping the text selectable. Be smart and use sparingly. You'll probably break your browser if you try to wrap every letter on your page in a `span` tag, so don't do that.  Look to use this in your Headings, Blockquotes, Asides, etc.

#### Kern Well
If you're going through the trouble to load a fancy font and that word or phrase is the largest on the site, then it's important for it to be kerned well.  With Lettering.js, kerning is a breeze. You can simply use `$("#id-of-what-i-want-to-kern").lettering();` and then on each `.char#`, you can set relative position or left/right margin. Works like a charm.

### Accessibility

Lettering.js is now accessible by default. It uses an `aria-label` on the parent element and `aria-hidden` on each of the children to prevent screenreaders from pausing while reading each individual characters or words.

### Non-Javascript Fallback
As with any kind of Javascript, have a fall back plan in case the user doesn't have javascript enabled.  The bottom line is up to you, my bottom line would be "legible and on the screen". Also, use `lettering.min.js` [Download the Minified Version of Lettering.js here](http://github.com/davatron5000/Lettering.js/downloads)

#### Performance Anti-Pattern
Web performance patterns advise that you put Javascripts at the bottom of your page before your `</body>` tag.  There is an unfortunate side effect where you may experience a [FOUT (Flash of Unstyled Text)](http://paulirish.com/2009/fighting-the-font-face-fout/) when you're manipulating your text after the DOM has loaded.  Unfortunately, we found the best solution to avoid/minimize the FOUT caused by this plugin is to put your scripts (jQuery, Lettering.js) in the document `<head>`. On the one hand, your page will load slower. On the other hand, a flash/restyling makes your site feel slow. Users might ultimately feel the site is faster if they don't see the FOUT.

### Download, Fork, Commit, Please.
We really want Lettering.js to be a quality helper for web typography.  If you have any feedback or suggestions, please leave those over on the Github.  We're excited about typography on the web and want to help make it print quality.
