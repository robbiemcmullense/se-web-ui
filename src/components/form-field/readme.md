# se-form-field



<!-- Auto Generated Below -->


## Properties

| Property   | Attribute  | Description                                                                                                                                                                                                                                                   | Type                                | Default     |
| ---------- | ---------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ----------------------------------- | ----------- |
| `disabled` | `disabled` | Optional property that defines if the button is disabled.  Set to `false` by default.                                                                                                                                                                         | `boolean`                           | `false`     |
| `label`    | `label`    | Defines the text value of the label in your form field.                                                                                                                                                                                                       | `string`                            | `undefined` |
| `mode`     | `mode`     | Defines the layout of your form field. `inline` is the default mode and is always applied if the type is set to "checkbox".  This sets the input or select field adjacent to the label. `stacked` mode will render the input or select field below the label. | `"inline" \| "stacked"`             | `'inline'`  |
| `required` | `required` | Determines if the input is required by the application. Set to `false` by default. Setting this value to "true" will render a red asterisk next to your label.                                                                                                | `boolean`                           | `false`     |
| `type`     | `type`     | Defines whether the form field's input is a text field (input), a checkbox (checkbox), or a dropdown menu (select). `input` is the default type.                                                                                                              | `"checkbox" \| "input" \| "select"` | `'input'`   |
| `value`    | `value`    | Defines the value of your form field to get passed to the parent component. When the type is set to "input", this value will be the default placeholder in your input field.                                                                                  | `string`                            | `'Text'`    |


## Events

| Event    | Description                                                                                                                | Type                |
| -------- | -------------------------------------------------------------------------------------------------------------------------- | ------------------- |
| `submit` | Passes form data to the parent component on a click (checkbox), menu change (select), or when the input field loses focus. | `CustomEvent<void>` |


## Methods

### `removeError() => void`

Remove a red (error) border to the form input field when an invalid input is corrected.

#### Returns

Type: `void`



### `setError() => void`

Set a red (error) border to the form input field when the input is invalid.

#### Returns

Type: `void`




----------------------------------------------

*Built with [StencilJS](https://stenciljs.com/)*
