This is a test for the moment. Ignore it.


### \<page\> [elem](http://github.com/em/elem)
 

An elem wrapper for page.js.

####Attributes
* `route` The page.js route. e.g. /user/:name/edit

#### Events

* `show(event, previousElement)` Triggered when the route is realized and the page is loaded. The default behavior is a basic jQuery show().

* `hide(event, newElement)` Triggered by the default show() handler on the previous element.

#### Example

test.html
```
<a href="a">
<a href="b">
<page route="/a">
<page route="/b">
```

test.js
```
module.exports = function(e, prev) {
 $(this).on('page', 'show', function() {
   $(prev).slideUp();
   $(this).slideDown();

   e.preventDefault();
 });
}
```

`elem run test`
