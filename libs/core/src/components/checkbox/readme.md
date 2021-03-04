# se-checkbox



<!-- Auto Generated Below -->


## Properties

| Property        | Attribute       | Description                                                                                                                                                                                                                                                                                                      | Type                                       | Default       |
| --------------- | --------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------ | ------------- |
| `color`         | `color`         | Defines the color of the checkbox for when the option is set to `checkbox` or `switch`. The default value is `success`, rendering a green color. The `secondary` setting renders a blue color.                                                                                                                   | `"primary" \| "secondary" \| "success"`    | `'success'`   |
| `disabled`      | `disabled`      | Optional property that defines if the checkbox is disabled.  Set to `false` by default.                                                                                                                                                                                                                          | `boolean`                                  | `false`       |
| `header`        | `header`        | Reduces the visual height of the checkbox when the option is set to `onoff`. Useful if the on/off checkbox is within a header element.                                                                                                                                                                           | `boolean`                                  | `false`       |
| `indeterminate` | `indeterminate` | Optional property that defines if the checkbox is in indeterminate state (only work with option="checkbox").  Set to `false` by default.                                                                                                                                                                         | `boolean`                                  | `false`       |
| `label`         | `label`         | The label of the checkbox that will be attached to the box.                                                                                                                                                                                                                                                      | `string`                                   | `undefined`   |
| `labelPos`      | `label-pos`     | Sets the position of the label for your checkbox component. The default setting is `right` when the option is set to `checkbox`. The default setting is `left` when the option is set to `switch`.                                                                                                               | `"left" \| "right"`                        | `undefined`   |
| `labelSuffix`   | `label-suffix`  | Sets suffix of the label shown with semi-transparent text just after the label.                                                                                                                                                                                                                                  | `string`                                   | `undefined`   |
| `option`        | `option`        | Determines the visual appearance of the component. `checkbox` is the default option, which will render the component like a standard HTML checkbox. `switch` renders the component like a toggle switch. `onoff` renders the component like an "on/off" switch, with a red "off" button and a green "on" button. | `"checkbox" \| "onoff" \| "switch"`        | `'checkbox'`  |
| `padding`       | `padding`       | optional property. define the padding around the button `none` no padding. `small` 4px padding: default `medium` 8px padding. `large` 16px padding.                                                                                                                                                              | `"large" \| "medium" \| "none" \| "small"` | `'none'`      |
| `required`      | `required`      | Adds a red asterisk if the checkbox is required when used in a form field.  Default is `false`.                                                                                                                                                                                                                  | `boolean`                                  | `false`       |
| `selected`      | `selected`      | The "checked" state of the checkbox, `false` by default.                                                                                                                                                                                                                                                         | `boolean`                                  | `undefined`   |
| `size`          | `size`          | Defines the size of the control. So far it's only supported by checkbox.  There are two options: `s`: 16px `m`: 20px (default)  Also affects the font size of the checkbox text label: `s`: 14px `m`: 16px (default)                                                                                             | `"medium" \| "small"`                      | `size.MEDIUM` |
| `textOff`       | `text-off`      | Defines the text the user will see for the "off" or "inactive" part of the checkbox when option is set to `onoff`.  Set to `OFF` by default.                                                                                                                                                                     | `string`                                   | `'OFF'`       |
| `textOn`        | `text-on`       | Defines the text the user will see for the "on" or "active" part of the checkbox when option is set to `onoff`.  Set to `ON` by default.                                                                                                                                                                         | `string`                                   | `'ON'`        |
| `value`         | `value`         | The value you want to pass to the parent component when the checkbox is checked.                                                                                                                                                                                                                                 | `string`                                   | `undefined`   |


## Events

| Event       | Description                                                                    | Type                                                 |
| ----------- | ------------------------------------------------------------------------------ | ---------------------------------------------------- |
| `didChange` | Send the checkbox value to the parent component when clicking on the checkbox. | `CustomEvent<{ value: string; selected: boolean; }>` |


## Methods

### `setRequired() => Promise<void>`



#### Returns

Type: `Promise<void>`




----------------------------------------------

*Built with [StencilJS](https://stenciljs.com/)*
