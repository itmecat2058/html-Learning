# Images and Links

## Images - [MDN Documentation](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/img)
Sharing images is a basic interaction on the Internet. No matter how they're uploaded or managed, all images in a web page are part of the `<img>` HTML tag.

The `<img>` tag allows authors to define an image as a URL which is then displayed in the browser. Here's an example:

```html
<img src="https://ohheybrian.com/static/images/beekeeping.webp" alt="A line drawing of a man in a bee suit working with beehives." />
```

Anyone can link to any image on the Internet as long as you have a URL.

This introduces your first HTML _attribute_. An attribute is some kind of data that goes with the tag. Image tags require the `src="..."` attribute to tell the browser where to find the data. When it reaches an image tag, it fetches the media automatically.

Image tags are also unique because they're _self closing_. You do not need a closing tag like you do with text elements. Tags which are self-closing are called _void elements_ because they cannot contain any content.

## Links - [MDN Documentation](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/a)

Links are a fundamental part of what makes the World Wide Web a _web_. Being able to link directly from one document to another adds a superpower to information presentation. Your users don't have to rely on citations or references and can go directly from your page to another page on the Internet. 

Links can be used very flexibly on a web page. They're found in navigation bars, text, on images, and in footers. Regardless of where links appear, they use this format:

```html
<a href="https://example.com">My link</a>
```

The `<a>` element stands for _anchor_, which attaches the content of the tag to that resource. When a user clicks on the link, they're taken to that place.

Because links are so prolific, there are some best practices you should use when adding links to your page:

- Navigation items are linked in unordered lists
- Links can be wrapped around block-level elements like headers or images. Instead of text, wrap your element and it will make it clickable.
- Use the `title` attribute on links to give screen readers more context of what the link is for.

In this exercise, you're going to create a very simple page on a topic you already know something about. It should have:

- Correct semantic text elements (look at ex02 if you need reminders)
- A linked heading
- A list with at least one link
- A paragraph with at least one link
- An image wrapped in a link

Bonus challenge: 
- Add a link which opens in a new tab

You can start from scratch or use the simple template attached.
