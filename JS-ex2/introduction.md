# Ex01 - Working with the DOM

The DOM is the main interaction layer between Javascript and your website. It provides programmatic access to different portions of your HTML and allows the user to interact with the content.

The Document Object Model (DOM) is a representation of your HTML. Each portion of the DOM is an _object_. In Javascript, an object holds _properties_ (data) and provides _methods_ (functions) for interacting with the data. 

When you load a website, the `window` and `document` objects are immedaitely available to your script. They are different objects and hold different properties and different methods. As you work with Javascript, there are methods you will work with frequently to do different things.

## `document` methods

Methods are called from an object - they are things you do _to_ or _with_ the object itself. There are two `document` methods you're going to start with today:

### `document.querySelector()`

[MDN reference](https://developer.mozilla.org/en-US/docs/Web/API/Document/querySelector)

 The `querySelector()` method takes an argument for an HTML element to find. This allows you to target specific elements on the page to manipulate. It also allows you to get data about a specific element as part of a function or other operation. 

`querySelector` will get **the first match** for your search term. Keep that in mind while you're building your pages! This is where the `id` attribute can become helpful to you. Any valid CSS selector can be used in the `querySelector` method. 

Here are some examples of how to use the `querySelector` method:

```js
// Get the first div
document.querySelector("div")

// Get an HTML table on the page
document.querySelector("table")

// Get the first item of a class
// You can use the backtick (under the escape key)
// as quotes - this will make more sense later.
document.querySelector(`.myClass`)

// Get an element with a specific ID
document.querySelector(`#myId`)
```

### `document.createElement()` and `.appendChild()`

Javascript can manipulate _any_ part of the DOM, including adding or removing elements from the page. Think of something like a to do list - when a button is clicked, an element is created and you can fill out that to do item. The Javascript code on the page is waiting for that button click to create and add a new HTML element to the page for you to interact with.

When you create an element, you can set _attributes_ or _properties_ which can also be added to the page. In the example below, this code will find an element with the class `.parent` and insert an element _inside_ as if it had a nested div. We're using variables here to keep the code cleaner and easier to read. 

```js
let parent = document.querySelector(`.parent`)
let child = document.createElement("div")
child.textContent = "This is a child"
parent.appendChild(child)
```

```html
<!-- There is nothing inside this div to start. When the function runs, the child will be added inside the `.parent` div. -->
<div class="parent"></div>
```

## Debugging

This is when your debugging skills will be tested. Javascript is not visible to the user! It runs in the background, so you need to know how to use your console to debug problems.

The `console.log()` method will print out messages you put into your script as it runs so you can see what is happening. Use console messages to help you step through mistakes and to log what _should_ be happening at a given point.

## Task

Today's task is descriped in the templates. You have a full HTML page as well as a script file. The HTML page structure is done - you do not need to edit it. You are writing Javascript today which accomplishes the task set in each part. Submit your script file to Classroom when you're done.
