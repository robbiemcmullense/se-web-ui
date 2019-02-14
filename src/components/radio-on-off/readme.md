# se-radio-on-off



<!-- Auto Generated Below -->


## Properties

| Property   | Attribute  | Description                                                                                                                                                                              | Type                    | Default     |
| ---------- | ---------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ----------------------- | ----------- |
| `disabled` | `disabled` | Optional property that defines if the radio on/off switch is disabled.  Set to `false` by default.                                                                                       | `boolean`               | `false`     |
| `mode`     | `mode`     | Defines the visual appearance of the on/off radio switch. `default` is the default mode. Use `header` if the on/off radio switch is within a header element to reduce its visual height. | `"default" \| "header"` | `'default'` |
| `textOff`  | `text-off` | Defines the text the user will see for the "off" or "inactive" part of the radio switch.                                                                                                 | `string`                | `'OFF'`     |
| `textOn`   | `text-on`  | Defines the text the user will see for the "on" or "active" part of the radio switch.                                                                                                    | `string`                | `'ON'`      |


## Events

| Event    | Description                                                                                              | Type               |
| -------- | -------------------------------------------------------------------------------------------------------- | ------------------ |
| `change` | Passes the current state (true or false) to the parent component when clicking on a button in the group. | `CustomEvent<any>` |


----------------------------------------------

*Built with [StencilJS](https://stenciljs.com/)*
