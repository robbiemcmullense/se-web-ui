# se-pagination



<!-- Auto Generated Below -->


## Properties

| Property                         | Attribute                            | Description                                                                                                             | Type                                                      | Default                                                                          |
| -------------------------------- | ------------------------------------ | ----------------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------- | -------------------------------------------------------------------------------- |
| `color`                          | `color`                              |                                                                                                                         | `"alternative" \| "primary" \| "secondary" \| "standard"` | `'secondary'`                                                                    |
| `labelFirstPage`                 | `label-first-page`                   |                                                                                                                         | `"Jump to First Page"`                                    | `'Jump to First Page'`                                                           |
| `labelLastPage`                  | `label-last-page`                    |                                                                                                                         | `"Jump to Last Page"`                                     | `'Jump to Last Page'`                                                            |
| `labelNextPage`                  | `label-next-page`                    |                                                                                                                         | `"Jump to Next Page"`                                     | `'Jump to Next Page'`                                                            |
| `labelPrevPage`                  | `label-prev-page`                    |                                                                                                                         | `"Jump to Previous Page"`                                 | `'Jump to Previous Page'`                                                        |
| `message`                        | `message`                            | Message for the right hand box Placeholders: %page% - Page number %maxPage - Last page number %perPage - Items per page | `string`                                                  | `"You're viewing page %page% of %maxPage% for term: Altivar in batch %perPage%"` |
| `messageSetDangerouslyInnerHtml` | `message-set-dangerously-inner-html` |                                                                                                                         | `boolean`                                                 | `false`                                                                          |
| `page`                           | `initial-page`                       |                                                                                                                         | `number`                                                  | `1`                                                                              |
| `pageLabel`                      | `page-label`                         |                                                                                                                         | `"Page"`                                                  | `'Page'`                                                                         |
| `perPage`                        | `per-page`                           |                                                                                                                         | `number`                                                  | `null`                                                                           |
| `perPageLabel`                   | `per-page-label`                     |                                                                                                                         | `"Show rows:"`                                            | `'Show rows:'`                                                                   |
| `perPageList`                    | `per-page-list`                      |                                                                                                                         | `string`                                                  | `'10'`                                                                           |
| `showFirstAndLast`               | `show-first-and-last`                |                                                                                                                         | `boolean`                                                 | `true`                                                                           |
| `showMessage`                    | `show-message`                       |                                                                                                                         | `boolean`                                                 | `false`                                                                          |
| `total`                          | `total`                              |                                                                                                                         | `number`                                                  | `undefined`                                                                      |


## Events

| Event                | Description | Type               |
| -------------------- | ----------- | ------------------ |
| `pagination:changed` |             | `CustomEvent<any>` |


## Dependencies

### Depends on

- [se-form-field](../form-field)
- [se-button](../button)

### Graph
```mermaid
graph TD;
  se-pagination --> se-form-field
  se-pagination --> se-button
  se-button --> se-icon
  style se-pagination fill:#f9f,stroke:#333,stroke-width:4px
```

----------------------------------------------

*Built with [StencilJS](https://stenciljs.com/)*
