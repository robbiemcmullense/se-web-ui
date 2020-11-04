# se-filtration



<!-- Auto Generated Below -->


## Properties

| Property    | Attribute   | Description | Type      | Default        |
| ----------- | ----------- | ----------- | --------- | -------------- |
| `collapsed` | `collapsed` | `true` or `false` | `boolean` | `true`         |
| `hint`      | `hint`      | text for placeholder | `string`  | `'enter text'` |
| `label`     | `label`     | text for the component | `string`  | `'Select'`     |
| `shadow`    | `shadow`    | `true` if want a shadow; `false` otherwise | `boolean` | `false`        |


## Events

| Event       | Description | Type               |
| ----------- | ----------- | ------------------ |
| `didSearch` | Callback | `CustomEvent<any>` |


## Dependencies

### Depends on

- [se-block](../block)
- [se-block-header](../block-header)
- [se-button](../button)
- [se-block-content](../block-content)
- [se-form-field](../form-field)
- [se-icon](../icon)
- [se-list](../list)
- [se-block-footer](../block-footer)

### Graph
```mermaid
graph TD;
  se-filtration --> se-block
  se-filtration --> se-block-header
  se-filtration --> se-button
  se-filtration --> se-block-content
  se-filtration --> se-form-field
  se-filtration --> se-icon
  se-filtration --> se-list
  se-filtration --> se-block-footer
  se-block --> se-loading
  se-block-header --> se-divider
  se-button --> se-icon
  se-block-footer --> se-divider
  style se-filtration fill:#f9f,stroke:#333,stroke-width:4px
```

----------------------------------------------

*Built with [StencilJS](https://stenciljs.com/)*
