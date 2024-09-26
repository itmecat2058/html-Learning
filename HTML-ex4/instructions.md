# Landmark elements

Browsers use some elements to determine general areas of the page. These are referred to as _landmarks_ and define some conventions for building semantic HTML pages. These landmark roles aren't visible to you, the reader. They are visible, however, to accessibility tools like screen readers. These are generic areas that a user might want quick access to.

These elements can be laid out in different ways, so don't think too much about _where_ they are on the page but rather _what they're for_. This helps you create a consistent page and will help readers navigate and find information quickly and easily. [From the Mozilla Developer Network](https://developer.mozilla.org/en-US/docs/Learn/HTML/Introduction_to_HTML/Document_and_website_structure):

> In your HTML code, you can mark up sections of content based on their functionality — you can use elements that represent the sections of content described above unambiguously, and assistive technologies like screen readers can recognize those elements and help with tasks like "find the main navigation", or "find the main content."

The landmark roles you'll be using are:

- Main content - `<main>`
- Header - `<header>`
- Navigation - `<nav>`
- Sidebar - `<aside>`
- Footer - `<footer>`

_Note that these are only some of the landmark roles. There are many others we'll get into later._


There are two generic wrappers which have no semantic meaning:

1. `<div>` - block level wrapper. This contains content that isn't a landmark _and has no other HTML element._ It is tempting to throw everything into a `div`, but you should always check to see if there's a better element to use.
2. `<span>` - inline wrapper. A `span` element lets you throw some attributes on text or content within another wrapper. This can be used in many different ways and it does not break the flow or layout of the content.

A _great_ place to start (in fact, you should bookmark it...like now...) is the Mozilla Developer Network (MDN) [documentation of HTML](https://developer.mozilla.org/en-US/docs/Web/HTML/Element). You've seen the links in these intro documents, but you might not have clicked on any yet. Get used to clicking on things!

The MDN Documents are industry-standard references for _anything_ you need regarding HTML (and others).

## Assignment

Today is a mixed research and creation assignment. Create a blank HTML document (or use the attached template) and then:

- Create a `section` for each element in the list above. The section should have a valid heading and semantic HTML inside.
- Describe the element's role _in your own words_.
- Give an example of how it can be used. This can be a code sample or an example of where it would be on a website.

Submit your file to Google Classroom when you're finished.
