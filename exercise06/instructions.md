# HTML Tables

Tables used to be used for all web page layout. You would design a page and then manipulat table colums, rows, and cells to display the content in something that tried to match traditional print layout. 

HTML tables aren't used for layout anymore, but they are used for _tabular data_ - information that is best shown in a series of rows and columns. This could be anything from Spotify streaming data to a banking app showing your transactions.

## Markup

Tables use the following markup:

```html
<table>
  <thead>
    <tr>
      <th>Month</th>
      <th>Days</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>January</td>
      <td>31</td>
    </tr>
    <!-- more data ... -->
  </tbody>
</table>
```

The `<table>` element is similar to form - it is a wrapper which includes several elements:

- `<thead>` - "Table head," a wrapper for the column labels
- `<th>` - "Table heading," an individual column heading (Month)
- `<tbody>` - "Table body," the main body of data for the table display
- `<tr>` - "Table row," a wrapper for all data in a given row
- `<td>` - "Table data," an individual cell in the table for data

The tricky part about tables is remember what is a _wrapper_ vs what represents _content_. Some general rules:

1. The `<thead>` element generally has one `<tr>` with several `<th>` columns and always comes before `<tbody>`
2. `<tbody>` will have several `<tr>` elements (as many as needed for the table)
3. Each `<tr>` will have several `<td>` elements.

There are other table elements like `<tfoot>`, 
## Assignment

Pick some data you want to display in a table. This can be anything (do some research if you need to) you're interested in.

- Use the attached template to create a page showing data of your choice.
- Add your table with _correct semantic markup_
- Add a section explaining what your table is showing
- Check your code with the W3C Validator to make sure it is properly formatted.
- Submit your file when finished.
