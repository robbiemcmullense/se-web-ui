# se-tooltip

| Slot   | Description                                                                                       |
| ------ | ------------------------------------------------------------------------------------------------- |
| `trigger` | Define the slot element that will be used to trigger the tooltip (ex:`<se-icon slot="trigger">folder</se-icon>`)|
| `tooltip` | [DEPRECATED]. Replaced by `trigger` slot to align with `se-dropdown` slot mechanism |

<!-- Auto Generated Below -->


## Properties

| Property    | Attribute    | Description                                                                                                      | Type                                     | Default         |
| ----------- | ------------ | ---------------------------------------------------------------------------------------------------------------- | ---------------------------------------- | --------------- |
| `action`    | `action`     | <span style="color:red">**[DEPRECATED]**</span> only `hover` action should be used for tooltips<br/><br/>        | `"click" \| "hover"`                     | `'hover'`       |
| `color`     | `color`      | Indicates the color of the tooltip                                                                               | `"alternative" \| "information"  \| "success" \| "warning" \| "error" ` | `'information'` |
| `position`  | `position`   | Indicates the position of your tooltip. The default setting is `bottom`, rendering the tooltip below its parent. | `"bottom" \| "left" \| "right" \| "top"` | `'bottom'`      |
| `showDelay` | `show-delay` | Add a delay to display the tooltip in millisecond.                                                               | `number`                                 | `0`             |


## Events

| Event      | Description                                     | Type               |
| ---------- | ----------------------------------------------- | ------------------ |
| `didClose` | Event emitted when the tooltip has been closed. | `CustomEvent<any>` |
| `didOpen`  | Event emitted when the tooltip has been opened. | `CustomEvent<any>` |


## Methods

### `close() => Promise<void>`

Method to close the tooltip separate from hovering or clicking the parent element.

#### Returns

Type: `Promise<void>`



### `open() => Promise<void>`

Method to open the tooltip separate from hovering or clicking the parent element.

#### Returns

Type: `Promise<void>`




----------------------------------------------

*Built with [StencilJS](https://stenciljs.com/)*
