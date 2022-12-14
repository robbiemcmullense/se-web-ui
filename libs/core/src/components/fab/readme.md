# se-fab



<!-- Auto Generated Below -->


## Properties

| Property   | Attribute  | Description                                                                                                                                                                                                                                                    | Type                         | Default       |
| ---------- | ---------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ---------------------------- | ------------- |
| `color`    | `color`    | Indicates the color of your main action button . The Default setting is `primary` color. The `alternative` button can also be used.                                                                                                                            | `"alternative" \| "primary"` | `'primary'`   |
| `icon`     | `icon`     | Property that determines if an icon is included in the main action button.                                                                                                                                                                                     | `string`                     | `undefined`   |
| `option`   | `option`   | Property that determines the functionality of the FAB. The default setting is `speeddial`, which will show/hide a dropdown menu when clicking on the FAB. The `backtotop` setting returns you to the top of the page you are viewing when clicking on the FAB. | `"backtotop" \| "speeddial"` | `'speeddial'` |
| `overlay`  | `overlay`  | Indicates if there is an overlay behind the FAB. Used only if in dial mode.                                                                                                                                                                                    | `boolean`                    | `undefined`   |
| `position` | `position` | Property that determines the position of the component. The default setting is `bottom`, rendering a FAB at the bottom right corner. The `top` setting renders the FAB at the top right corner.                                                                | `"bottom" \| "top"`          | `'bottom'`    |


## Events

| Event           | Description                                                                                | Type               |
| --------------- | ------------------------------------------------------------------------------------------ | ------------------ |
| `closeTooltips` | Event emitted to close the tooltip (if there is one) when interacting with the fab button. | `CustomEvent<any>` |


## Methods

### `toggleAction() => Promise<void>`

Use this method to toggle (show/hide) the mini action buttons.

#### Returns

Type: `Promise<void>`




## Dependencies

### Depends on

- [se-icon](../icon)

### Graph
```mermaid
graph TD;
  se-fab --> se-icon
  style se-fab fill:#f9f,stroke:#333,stroke-width:4px
```

----------------------------------------------

*Built with [StencilJS](https://stenciljs.com/)*
