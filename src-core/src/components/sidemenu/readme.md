# se-sidemenu



<!-- Auto Generated Below -->


## Properties

| Property | Attribute | Description                         | Type     | Default  |
| -------- | --------- | ----------------------------------- | -------- | -------- |
| `label`  | `label`   | Overrides the default "Menu" label. | `string` | `'Menu'` |


## Methods

### `toggle() => Promise<void>`



#### Returns

Type: `Promise<void>`




## Dependencies

### Depends on

- [se-list-item](..\list-item)
- [se-icon](..\icon)
- [se-link](..\link)
- [se-divider](..\divider)
- [se-list](..\list)
- [se-icon-lifeison](..\icon-lifeison)
- [se-block](..\block)

### Graph
```mermaid
graph TD;
  se-sidemenu --> se-list-item
  se-sidemenu --> se-icon
  se-sidemenu --> se-link
  se-sidemenu --> se-divider
  se-sidemenu --> se-list
  se-sidemenu --> se-icon-lifeison
  se-sidemenu --> se-block
  se-block --> se-loading
  style se-sidemenu fill:#f9f,stroke:#333,stroke-width:4px
```

----------------------------------------------

*Built with [StencilJS](https://stenciljs.com/)*
