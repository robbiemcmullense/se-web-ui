# se-dropdown

| Slot      | Description                                                                         |
| --------- | ----------------------------------------------------------------------------------- |
| none      | Slot with no name will be used as container for the dropdown                        |
| `trigger` | Correspond to the trigger element to open the dropdown (`se-icon`, `se-button` ...) |

<!-- Auto Generated Below -->


## Properties

| Property    | Attribute   | Description                                                                                                                                                                                                       | Type                | Default  |
| ----------- | ----------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------------------- | -------- |
| `alignment` | `alignment` | Define how to align the dropdown container. `left`: Position the container regarding to the left side of the trigger element. `right`: Position the container regarding to the right side of the trigger element. | `"left" \| "right"` | `'left'` |


## Events

| Event      | Description                                      | Type                |
| ---------- | ------------------------------------------------ | ------------------- |
| `didClose` | Event emitted when the dropdown has been closed. | `CustomEvent<void>` |
| `didOpen`  | Event emitted when the dropdown has been opened. | `CustomEvent<void>` |


## Methods

### `close() => void`

Method to close the dropdown from the outside.

#### Returns

Type: `void`



### `open() => void`

Method to open the dropdown from the outside.

#### Returns

Type: `void`




----------------------------------------------

*Built with [StencilJS](https://stenciljs.com/)*
