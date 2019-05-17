# se-checkbox



<!-- Auto Generated Below -->


## Properties

| Property   | Attribute  | Description                                                                                     | Type                       | Default     |
| ---------- | ---------- | ----------------------------------------------------------------------------------------------- | -------------------------- | ----------- |
| `color`    | `color`    | Defines the color of the checkbox.                                                              | `"primary" \| "secondary"` | `'primary'` |
| `disabled` | `disabled` | Optional property that defines if the checkbox is disabled.  Set to `false` by default.         | `boolean`                  | `false`     |
| `label`    | `label`    | The label of the checkbox that will be attached to the box.                                     | `string`                   | `undefined` |
| `required` | `required` | Adds a red asterisk if the checkbox is required when used in a form field.  Default is `false`. | `boolean`                  | `false`     |
| `selected` | `selected` | Determines whether or not the checkbox is checked when you initialize it.  Checked if `true`.   | `boolean`                  | `false`     |
| `value`    | `value`    | The value you want to pass to the parent component when the checkbox is checked.                | `string`                   | `undefined` |


## Events

| Event      | Description                                                                    | Type               |
| ---------- | ------------------------------------------------------------------------------ | ------------------ |
| `didCheck` | Send the checkbox value to the parent component when clicking on the checkbox. | `CustomEvent<any>` |


## Methods

### `setRequired() => Promise<void>`

Set the required property on the checkbox element.

#### Returns

Type: `Promise<void>`




----------------------------------------------

*Built with [StencilJS](https://stenciljs.com/)*
