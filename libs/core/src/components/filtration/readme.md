# se-filtration



<!-- Auto Generated Below -->


## Properties

| Property        | Attribute         | Description | Type      | Default        |
| --------------- | ----------------- | ----------- | --------- | -------------- |
| `collapsed`     | `collapsed`       |             | `boolean` | `true`         |
| `labelHint`     | `label-hint`      |             | `string`  | `'enter text'` |
| `labelSelect`   | `label-select`    |             | `string`  | `'Select'`     |
| `labelViewMore` | `label-view-more` |             | `string`  | `'View more'`  |
| `searchText`    | `search-text`     |             | `string`  | `''`           |
| `searchable`    | `searchable`      |             | `boolean` | `false`        |
| `shadow`        | `shadow`          |             | `boolean` | `false`        |


## Events

| Event       | Description | Type               |
| ----------- | ----------- | ------------------ |
| `didSearch` |             | `CustomEvent<any>` |


## Dependencies

### Depends on

- [se-block](../block)
- [se-block-header](../block-header)
- [se-icon](../icon)
- [se-block-content](../block-content)
- [se-form-field](../form-field)
- [se-list](../list)
- [se-block-footer](../block-footer)

### Graph
```mermaid
graph TD;
  se-filtration --> se-block
  se-filtration --> se-block-header
  se-filtration --> se-icon
  se-filtration --> se-block-content
  se-filtration --> se-form-field
  se-filtration --> se-list
  se-filtration --> se-block-footer
  se-block --> se-loading
  se-block-header --> se-divider
  se-block-footer --> se-divider
  style se-filtration fill:#f9f,stroke:#333,stroke-width:4px
```

----------------------------------------------

*Built with [StencilJS](https://stenciljs.com/)*
