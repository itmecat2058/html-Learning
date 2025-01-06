# More Selectors

CSS allows you to combine selectors to target elements based on relationships to _other_ elements on the page. 

## Descendent Selector

Elements which are descendents, ie nested inside another element, can be selected. You can read this as, "an element that is a child of a given parent" when you're thinking about your CSS structure. This is helpful when you're trying to target elements within a specific container.

```html
<!-- index.html -->
<section class="parent">
   <p class="child">Lorem ips...</p> <!--This will be styled red because it is inside the parent div -->
</section>
<section>
   <p class="child">Lorem ipsum...</p>
</section>
```
```css
/* style.css */
.parent .child { /* select anything with the child class attribute inside something with the parent class */
   color: red
}
```

## Combinator Selector

You can target elements with two or more specific divs in a similar way - just remove the whitespace from your selector and list the class (or classes) you want to style. The selected element _must_ have each class you're targeting. Order does not matter.

```html
<!-- index.html -->
<ul class="active"> <!-- This is missing the `first` class and will not be selected. -->
   <li class="active first">Item 1</li> <!-- This will be selected and turned red. -->
   <li>Item 2</li>
   <li>Item 3</li>
   <li>Item 4</li>
</ul>
```
```css
/* style.css */
.active.first {  /* Target elements with BOTH `active` and `first` classnames. */
   color: red;
}
```

## Pseudo-class Selectors

Pseudo-classes allow you to style a given _state_ of an element. There are several, but a common pseudo-class selector is `:hover`, which allows you to set how an element appears when hovered by the cursor.

```html
<!-- index.html -->
<a href="https://www.example.com">Visit the site</a>
```
```css
/* style.css */
a:hover {
   background-color: yellow;
}
```

## Other Selectors

### Child Selector

This is similar to the **combinator** selector above, but only applies to elements that are **direct children** of the first element. 

```html
<ul>
  <li>Unordered item</li> <!-- These are styled because they are direct children of ul -->
  <li>Unordered item
    <ol>
      <li>Item 1</li> <!-- These will NOT be styled because they are not direct children of ul -->
      <li>Item 2</li>
    </ol>
  </li>
</ul>
```
```css
ul > li {
  border-top: 5px solid red; /* Give a red border to li children of ul */
}
```

### Next Sibling Selector

Apply styles to the _next sibling_of the first selector in the ruleset. This only applies to the next element if they're at the same nesting level in your HTML.

```html
<article>
  <h1>A heading</h1>
    <p>Lorem ipsum dolo set amor...</p> <!-- this element will be styled because it immediately follows the h1 target. -->
    <p>A second lorem ipsum block nexted within the article...</p>
</article>
```
```css
h1 + p { /* Select the immediate next p element at the same nesting level as the h1 */
  font-weight: bold;
  background-color: #333;
  color: #fff;
  padding: .5em;
}
```

## Assignment

Use the attached, fully-formed HTML document to practice using combinator selectors. You should:

- Add classes to the HTML where appropriate.
- Create and link a `style.css` file
- Use _at least_ one of each selector somewhere in the document.
- You can pick whatever styles you would like.
- Submit your HTML and CSS files when finished.
