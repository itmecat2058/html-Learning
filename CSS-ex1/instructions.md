# Welcome to CSS

CSS stands for "Cascading Style Sheets" and is the language we use to control the _display_ of web pages. Remember that HTML is the markup - the type and content of our websites - and does not control how the information is actually displayed on the page. Web browsers all provide default styles so HTML can be interpreted and shown to the user if there is no styling information given. As developers, you have control over how your website appears to users and you can define your own styles.

## The <link> element

To get this to work, we have to load the CSS into our HTML page. We do that with a special element inside the HTML `<head>` - the `<link>` element. Here is it's syntax:

```html
<link href="style.css" rel="stylesheet" />
```

The `href` and `rel` attributes are required. `href` tells the browser where to find the style file and the `rel` attribute tells it what kind of information it holds. Put the code sample above into the `<head>` element of `index.html`, save it, and then open the HTML page in the browser.

## CSS rules

CSS is a list of rules for your web page. The CSS below will select every `paragraph` element on the page and change its font color to red:

```css
p {
    color: red;
}
```

CSS uses _selectors_ to target content and then defines a _property_ and _value_ to form a _declaration_. These declarations are what the browser interprets to apply styles. The whole structure is called a _ruleset_.

In the example above, the `paragraph` element, `p`, is the selector. We set the `color` property to `red` as our declaration. Declarations are separated by a semicolon, _;_, within the ruleset. A CSS ruleset can have as many declarations as you'd like to achieve your styles. There are some caveats, but we will discuss inheritance, cascading, and specificity later.  

## Assignment

The attached HTML file has a couple simple elements you can play with. Start by adding the `link` element to the HTML head so you can connect your CSS code to the HTML. For this exercise, you'll select HTML elements and apply styles. There are _hundreds_ of properties which can be used, but start with these:

- font-family
- color
- border-bottom
- font-weight
- font-size
- font-style
- text-decoration
- background-color

MDN has [a full index of CSS properties](https://developer.mozilla.org/en-US/docs/Web/CSS/Reference#index) you can use to learn on your own. You'll learn some properties quickly because you'll use them a lot. You may need to look others up as you come across a particular need.

Run your CSS file through the W3C Validator linked to make sure your syntax is error-free before submitting.