# se-checkbox



<!-- Auto Generated Below -->


## Properties

| Property   | Attribute  | Description                                                                                                                                                                   | Type                                         | Default     |
| ---------- | ---------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------- | ----------- |
| `color`    | `color`    | Defines the background color of the button. `primary` is a green color and is the default value. `accent` is a blue color. `warn` is an orange color. `error` is a red color. | `"accent" \| "error" \| "primary" \| "warn"` | `'primary'` |
| `disabled` | `disabled` | Optional property that defines if the checkbox is disabled.  Set to `false` by default.                                                                                       | `boolean`                                    | `false`     |
| `value`    | `value`    | The value you want to pass to the parent component when the checkbox is checked.                                                                                              | `string`                                     | `undefined` |


## Events

| Event    | Description                                                                    | Type                |
| -------- | ------------------------------------------------------------------------------ | ------------------- |
| `change` | Send the checkbox value to the parent component when clicking on the checkbox. | `CustomEvent<void>` |


----------------------------------------------

*Built with [StencilJS](https://stenciljs.com/)*
