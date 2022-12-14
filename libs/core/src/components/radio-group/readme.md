# se-radio-group



<!-- Auto Generated Below -->


## Properties

| Property    | Attribute   | Description                                                                                                                                                                             | Type                                                      | Default      |
| ----------- | ----------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------- | ------------ |
| `color`     | `color`     | Defines the background color of each button in the group.  The default setting is `standard`, rendering a light gray background.                                                        | `"alternative" \| "primary" \| "secondary" \| "standard"` | `'standard'` |
| `direction` | `direction` | Defines the direction of the flex element. `row` is the default if used with `se-button`. `column` is the default if used with `se-radio`.                                              | `"column" \| "row"`                                       | `undefined`  |
| `disabled`  | `disabled`  | Optional property that defines if the button is disabled.  Set to `false` by default.                                                                                                   | `boolean`                                                 | `false`      |
| `size`      | `size`      | Defines the height of each button in the group. `small` is the default setting, rendering a 32px height and a 14px font size. `nano` sets the height to 24px and the font size to 12px. | `"nano" \| "small"`                                       | `'small'`    |
| `value`     | `value`     | Specify the currently selected child Radio value..                                                                                                                                      | `string`                                                  | `undefined`  |


## Events

| Event       | Description                                                                                      | Type               |
| ----------- | ------------------------------------------------------------------------------------------------ | ------------------ |
| `didChange` | Passes the selected button value to the parent component when clicking on a button in the group. | `CustomEvent<any>` |


----------------------------------------------

*Built with [StencilJS](https://stenciljs.com/)*
