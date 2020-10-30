# se-filtration



<!-- Auto Generated Below -->


## Properties

| Property    | Attribute   | Description | Type      | Default    |
| ----------- | ----------- | ----------- | --------- | ---------- |
| `collapsed` | `collapsed` |             | `boolean` | `false`    |
| `label`     | `label`     |             | `string`  | `'Select'` |


## Events

| Event         | Description | Type               |
| ------------- | ----------- | ------------------ |
| `didSearch`   |             | `CustomEvent<any>` |
| `didViewMore` |             | `CustomEvent<any>` |


## Dependencies

### Depends on

- [se-block](../block)
- [se-block-header](../block-header)
- [se-button](../button)
- [se-block-content](../block-content)
- [se-form-field](../form-field)
- [se-icon](../icon)
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
  se-filtration --> se-block-footer
  se-block --> se-loading
  se-block-header --> se-divider
  se-button --> se-icon
  se-block-footer --> se-divider
  style se-filtration fill:#f9f,stroke:#333,stroke-width:4px
```

----------------------------------------------

*Built with [StencilJS](https://stenciljs.com/)*
