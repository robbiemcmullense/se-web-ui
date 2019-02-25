# se-buttons



<!-- Auto Generated Below -->


## Properties

| Property   | Attribute  | Description                                                                                                                                                                                                           | Type                                                    | Default      |
| ---------- | ---------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------- | ------------ |
| `color`    | `color`    | Optional property that defines the background color of each button in the group. `primary` is a green color. `accent` is a blue color. `warn` is an orange color. `error` is a red color. `light` is a gray color.    | `"accent" \| "error" \| "light" \| "primary" \| "warn"` | `'light'`    |
| `disabled` | `disabled` | Optional property that defines if the button is disabled.  Set to `false` by default.                                                                                                                                 | `boolean`                                               | `false`      |
| `mode`     | `mode`     | Defines the functionality of your button group. `checkbox` is the default option, where all buttons in the group can be selected. `radio` mode indicates that only one button in the group can be selected at a time. | `"checkbox" \| "radio"`                                 | `'checkbox'` |
| `value`    | --         | Define the selected values of the array.                                                                                                                                                                              | `any[]`                                                 | `[]`         |


## Events

| Event    | Description                                                                                      | Type                |
| -------- | ------------------------------------------------------------------------------------------------ | ------------------- |
| `change` | Passes the selected button value to the parent component when clicking on a button in the group. | `CustomEvent<void>` |


----------------------------------------------

*Built with [StencilJS](https://stenciljs.com/)*
