# se-dropdown

| Slot      | Description                                                                          |
| --------- | ------------------------------------------------------------------------------------ |
| none      | Slot with no name will be used as container for the dropdown                         |
| `trigger` | Corresponds to the trigger element to open the dropdown (`se-icon`, `se-button` ...) |

<!-- Auto Generated Below -->


## Properties

| Property            | Attribute            | Description                                                                                                                                                                                                                                                                                             | Type                                    | Default    |
| ------------------- | -------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | --------------------------------------- | ---------- |
| `alignment`         | `alignment`          |                                                                                                                                                                                                                                                                                                         | `"end" \| "left" \| "right" \| "start"` | `'start'`  |
| `maxHeight`         | `max-height`         | Sets the maximum height of the dropdown.  Default setting is "400px".                                                                                                                                                                                                                                   | `string`                                | `'400px'`  |
| `maxWidth`          | `max-width`          | Sets the maximum width of the dropdown.  Default setting is "200px".                                                                                                                                                                                                                                    | `string`                                | `'200px'`  |
| `verticalAlignment` | `vertical-alignment` | Defines the preferred vertically align of the dropdown. It will automatically re-position if the there is not enough space. `top`: Position the container with respect to the top side of the trigger element. `bottom`: Position the container with respect to the bottom side of the trigger element. | `"bottom" \| "top"`                     | `'bottom'` |


## Events

| Event               | Description                                                                                                                                   | Type               |
| ------------------- | --------------------------------------------------------------------------------------------------------------------------------------------- | ------------------ |
| `cancelAllDropdown` | Event emitted when the dropdown has been touched. Every dropdown listen to this event to avoid avoid multiple dropdown open at the same time. | `CustomEvent<any>` |
| `didClose`          | Event emitted when the dropdown has been closed.                                                                                              | `CustomEvent<any>` |
| `didOpen`           | Event emitted when the dropdown has been opened.                                                                                              | `CustomEvent<any>` |


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
