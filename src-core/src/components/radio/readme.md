# se-radio



<!-- Auto Generated Below -->


## Properties

| Property   | Attribute  | Description                                                                                   | Type                       | Default     |
| ---------- | ---------- | --------------------------------------------------------------------------------------------- | -------------------------- | ----------- |
| `color`    | `color`    | Defines the color of the checkbox.                                                            | `"primary" \| "secondary"` | `'primary'` |
| `disabled` | `disabled` | Optional property that defines if the checkbox is disabled.  Set to `false` by default.       | `boolean`                  | `false`     |
| `label`    | `label`    | The label of the checkbox that will be attached to the box.                                   | `string`                   | `undefined` |
| `selected` | `selected` | Determines whether or not the checkbox is checked when you initialize it.  Checked if `true`. | `boolean`                  | `false`     |
| `value`    | `value`    | The value you want to pass to the parent component when the checkbox is checked.              | `string`                   | `undefined` |


## Events

| Event      | Description                                                                    | Type                |
| ---------- | ------------------------------------------------------------------------------ | ------------------- |
| `didCheck` | Send the checkbox value to the parent component when clicking on the checkbox. | `CustomEvent<void>` |


----------------------------------------------

*Built with [StencilJS](https://stenciljs.com/)*
