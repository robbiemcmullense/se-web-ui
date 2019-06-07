# se-dropdown

| Slot      | Description                                                                         |
| --------- | ----------------------------------------------------------------------------------- |
| none      | Slot with no name will be used as container for the dropdown                        |
| `trigger` | Corresponds to the trigger element to open the dropdown (`se-icon`, `se-button` ...) |

<!-- Auto Generated Below -->


## Properties

| Property    | Attribute   | Description                                                                                                                                                                                                              | Type                | Default  |
| ----------- | ----------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------- | -------- |
| `alignment` | `alignment` | Defines how to align the dropdown container. `left`: Position the container with respect to the left side of the trigger element. `right`: Position the container with respect to the right side of the trigger element. | `"left" \| "right"` | `'left'` |


## Events

| Event      | Description                                      | Type               |
| ---------- | ------------------------------------------------ | ------------------ |
| `didClose` | Event emitted when the dropdown has been closed. | `CustomEvent<any>` |
| `didOpen`  | Event emitted when the dropdown has been opened. | `CustomEvent<any>` |


## Methods

### `close() => Promise<void>`

Method to close the dropdown from outside its parent element.

#### Returns

Type: `Promise<void>`



### `open() => Promise<void>`

Method to open the dropdown from outside its parent element.

#### Returns

Type: `Promise<void>`




----------------------------------------------

*Built with [StencilJS](https://stenciljs.com/)*
