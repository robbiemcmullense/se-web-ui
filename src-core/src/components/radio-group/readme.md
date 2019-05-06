# se-radio-group



<!-- Auto Generated Below -->


## Properties

| Property   | Attribute  | Description                                                                                                                      | Type                                                      | Default      |
| ---------- | ---------- | -------------------------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------- | ------------ |
| `color`    | `color`    | Defines the background color of each button in the group.  The default setting is `standard`, rendering a light gray background. | `"alternative" \| "primary" \| "secondary" \| "standard"` | `'standard'` |
| `disabled` | `disabled` | Optional property that defines if the button is disabled.  Set to `false` by default.                                            | `boolean`                                                 | `false`      |
| `value`    | `value`    | Defines the selected values of the array.                                                                                        | `string \| string[]`                                      | `undefined`  |


## Events

| Event       | Description                                                                                      | Type                |
| ----------- | ------------------------------------------------------------------------------------------------ | ------------------- |
| `didChange` | Passes the selected button value to the parent component when clicking on a button in the group. | `CustomEvent<void>` |


----------------------------------------------

*Built with [StencilJS](https://stenciljs.com/)*
