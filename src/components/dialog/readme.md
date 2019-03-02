# dialog



<!-- Auto Generated Below -->


## Properties

| Property | Attribute | Description                                                                                                                            | Type                            | Default   |
| -------- | --------- | -------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------- | --------- |
| `open`   | `open`    |                                                                                                                                        | `boolean`                       | `false`   |
| `size`   | `size`    | Define the size of the modal. `small`: used by alert and message `medium`: used by other app `fill`: take the full space of the screen | `"fill" \| "medium" \| "small"` | `"small"` |


## Events

| Event        | Description                                                                                        | Type               |
| ------------ | -------------------------------------------------------------------------------------------------- | ------------------ |
| `didClose`   | event emitted after the animation of closing is done. The modal can be safely removed from the DOM | `CustomEvent<any>` |
| `onBackdrop` | event emitted when the backdrop is clicked.                                                        | `CustomEvent<any>` |


## Methods

### `backdropClicked() => void`



#### Returns

Type: `void`




----------------------------------------------

*Built with [StencilJS](https://stenciljs.com/)*
