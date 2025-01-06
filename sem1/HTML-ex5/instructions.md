# Forms

Sometimes, you need to be able to collect information from users as well as give them information. You can use the HTML `<form>` element to allow users to submit information to your site.

Though you won't be building the software to receive form data yet, you can still practice creating forms with different types of inputs.

Forms are block-level elements with different controls for the form wrapped inside. Here's the basic structure:

```html
<form id="sample-form">
    <label for="name">Your name</label>
    <input type="text" name="name" required />
    <label for="age">Age</label>
    <input type="number" name="age" required />
    <label for="email">Email</label>
    <input type="email" name="email" />
    <button type="submit">Subscribe</button>
</form>
```

This is one of the more complex elements you've looked at, so take some time to take it apart.


## Assignment

1. What elements are included within the form wrapper?
2. What attributes do you see on the form?

In this exercise, you will be creating your own contact form within an HTML page. Create a simple form which asks uses for _at least_ five pieces of information, only one of which may be text. Use the [MDN reference for `input` elements](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/input) to research and implement your own.

You can submit your form to see the data represented on the page. Make sure you're getting what you're expecting to get!

Before submitting, upload your file to the W3C validator to make sure your HTML is valid.
