# se-icon



<!-- Auto Generated Below -->


## Properties

| Property | Attribute | Description                                                                                                             | Type                                                      | Default     |
| -------- | --------- | ----------------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------- | ----------- |
| `color`  | `color`   | Optional property that defines the background color of the button. The default color will be inherited from its parent. | `"alternative" \| "primary" \| "secondary" \| "standard"` | `undefined` |
| `option` | `option`  | Optional property to define if the icon should act as a button (clickable).                                             | `"button"`                                                | `undefined` |
| `size`   | `size`    | Defines the size of an icon. The default size is `small` (24px). `medium` is 36px, and `large` is 63px.                 | `"large" \| "medium" \| "small"`                          | `"small"`   |


## Dependencies

### Used by

 - [se-dialog-content](..\dialog-content)
 - [se-header](..\header)
 - [se-sidemenu](..\sidemenu)
 - [se-tooltip-content](..\tooltip-content)
 - [se-tooltip-header](..\tooltip-header)

### Graph
```mermaid
graph TD;
  se-dialog-content --> se-icon
  se-header --> se-icon
  se-sidemenu --> se-icon
  se-tooltip-content --> se-icon
  se-tooltip-header --> se-icon
  style se-icon fill:#f9f,stroke:#333,stroke-width:4px
```

----------------------------------------------

*Built with [StencilJS](https://stenciljs.com/)*
