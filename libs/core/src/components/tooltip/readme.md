# se-tooltip

<!-- Auto Generated Below -->


## Properties

| Property   | Attribute  | Description                                                                                                                                                                                                                                                                                                                    | Type                                     | Default         |
| ---------- | ---------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ---------------------------------------- | --------------- |
| `action`   | `action`   | <span style="color:red">**[DEPRECATED]**</span> only `hover` action should be allowed for tooltips Indicates the action of your tooltip. The default setting is `hover`, triggering the tooltip when hovering over the parent element. The `click` action triggers the tooltip when you click on the parent element.<br/><br/> | `"click" \| "hover"`                     | `'hover'`       |
| `color`    | `color`    | Indicates the color of the tooltip                                                                                                                                                                                                                                                                                             | `"alternative" \| "information"`         | `'information'` |
| `position` | `position` | Indicates the position of your tooltip. The default setting is `bottom`, rendering the tooltip below its parent.                                                                                                                                                                                                               | `"bottom" \| "left" \| "right" \| "top"` | `'bottom'`      |


## Events

| Event           | Description                                        | Type               |
| --------------- | -------------------------------------------------- | ------------------ |
| `closeTooltips` | Closes the tooltip when another tooltip is opened. | `CustomEvent<any>` |
| `didClose`      | Event emitted when the tooltip has been closed.    | `CustomEvent<any>` |
| `didOpen`       | Event emitted when the tooltip has been opened.    | `CustomEvent<any>` |


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
