# se-checkbox



<!-- Auto Generated Below -->


## Properties

| Property     | Attribute      | Description                                                                                                                                                                                       | Type                                | Default      |
| ------------ | -------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ----------------------------------- | ------------ |
| `color`      | `color`        | Defines the color of the checkbox for checkbox and switch options. The default value is `primary`.                                                                                                | `"primary" \| "secondary"`          | `'primary'`  |
| `disabled`   | `disabled`     | Optional property that defines if the checkbox is disabled.  Set to `false` by default.                                                                                                           | `boolean`                           | `false`      |
| `header`     | `header`       | Reduce the visual height of the checkbox when the option is set to 'onoff'.                                                                                                                       | `boolean`                           | `false`      |
| `label`      | `label`        | The label of the checkbox that will be attached to the box.                                                                                                                                       | `string`                            | `undefined`  |
| `onOffColor` | `on-off-color` | Defines the color of the checkbox for onoff option. The default value is `standard`.                                                                                                              | `"alternative" \| "standard"`       | `'standard'` |
| `option`     | `option`       | Determines the visual appearance of the component. `checkbox` is the default option and the component renders like a standard HTML checkbox. `switch` renders the component like a toggle switch. | `"checkbox" \| "onoff" \| "switch"` | `'checkbox'` |
| `required`   | `required`     | Adds a red asterisk if the checkbox is required when used in a form field.  Default is `false`.                                                                                                   | `boolean`                           | `false`      |
| `selected`   | `selected`     | Determines whether or not the checkbox is checked when you initialize it.  Checked if `true`.                                                                                                     | `boolean`                           | `false`      |
| `textOff`    | `text-off`     | Defines the text the user will see for the "off" or "inactive" part of the checkbox when option is set to 'onoff'.  Set to `OFF` by default.                                                      | `string`                            | `'OFF'`      |
| `textOn`     | `text-on`      | Defines the text the user will see for the "on" or "active" part of the checkbox when option is set to 'onoff'.  Set to `OFF` by default.                                                         | `string`                            | `'ON'`       |
| `value`      | `value`        | The value you want to pass to the parent component when the checkbox is checked.                                                                                                                  | `string`                            | `undefined`  |


## Events

| Event       | Description                                                                    | Type                |
| ----------- | ------------------------------------------------------------------------------ | ------------------- |
| `didChange` | Send the checkbox value to the parent component when clicking on the checkbox. | `CustomEvent<void>` |


## Methods

### `setRequired() => void`

Set the required property on the checkbox element.  Used when the checkbox is within a form field.

#### Returns

Type: `void`




----------------------------------------------

*Built with [StencilJS](https://stenciljs.com/)*
