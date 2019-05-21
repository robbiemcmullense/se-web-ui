# se-tooltip



<!-- Auto Generated Below -->


## Properties

| Property   | Attribute  | Description                                   | Type                                     | Default    |
| ---------- | ---------- | --------------------------------------------- | ---------------------------------------- | ---------- |
| `action`   | `action`   | Indicates the action of your tooltip.         | `"click" \| "hover"`                     | `"hover"`  |
| `position` | `position` | Indicates the position color of your tooltip. | `"bottom" \| "left" \| "right" \| "top"` | `"bottom"` |


## Events

| Event      | Description                                     | Type                |
| ---------- | ----------------------------------------------- | ------------------- |
| `didClose` | Event emitted when the tooltip has been closed. | `CustomEvent<void>` |
| `didOpen`  | Event emitted when the tooltip has been opened. | `CustomEvent<void>` |


## Methods

### `close() => void`

Method to close the tooltip from the outside.

#### Returns

Type: `void`



### `open() => void`

Method to open the tooltip from the outside.

#### Returns

Type: `void`




----------------------------------------------

*Built with [StencilJS](https://stenciljs.com/)*
