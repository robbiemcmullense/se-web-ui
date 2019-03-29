# se-radio-on-off



<!-- Auto Generated Below -->


## Properties

| Property   | Attribute  | Description                                                                                                                                                                                | Type                          | Default      |
| ---------- | ---------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ----------------------------- | ------------ |
| `color`    | `color`    | Optional property that defines the background color of the button. Default is standard.                                                                                                    | `"alternative" \| "standard"` | `'standard'` |
| `disabled` | `disabled` | Optional property that defines if the radio on/off switch is disabled.  Set to `false` by default.                                                                                         | `boolean`                     | `false`      |
| `option`   | `option`   | Defines the visual appearance of the on/off radio switch. `default` is the default option. Use `header` if the on/off radio switch is within a header element to reduce its visual height. | `"default" \| "header"`       | `'default'`  |
| `textOff`  | `text-off` | Defines the text the user will see for the "off" or "inactive" part of the radio switch.                                                                                                   | `string`                      | `'OFF'`      |
| `textOn`   | `text-on`  | Defines the text the user will see for the "on" or "active" part of the radio switch.                                                                                                      | `string`                      | `'ON'`       |
| `value`    | `value`    | Determines whether or not the switch is "on" or "off" when you initialize it. Sets the switch to the "on" position if `true`.                                                              | `boolean`                     | `undefined`  |


## Events

| Event       | Description                                                                                              | Type               |
| ----------- | -------------------------------------------------------------------------------------------------------- | ------------------ |
| `didChange` | Passes the current state (true or false) to the parent component when clicking on a button in the group. | `CustomEvent<any>` |


----------------------------------------------

*Built with [StencilJS](https://stenciljs.com/)*
