# se-chip



<!-- Auto Generated Below -->


## Properties

| Property   | Attribute   | Description                                                                                                                                                                                          | Type                                         | Default     |
| ---------- | ----------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------- | ----------- |
| `canClose` | `can-close` | Indicates whether or not the chip has a close button.  Set to `true` by default.                                                                                                                     | `boolean`                                    | `true`      |
| `color`    | `color`     | Optional property that defines the background color of the button. `primary` is a green color. `accent` is a blue color. `warn` is an orange color. `error` is a red color. `light` is a gray color. | `"accent" \| "error" \| "primary" \| "warn"` | `undefined` |
| `value`    | `value`     | The text you want to display in your chip.                                                                                                                                                           | `string`                                     | `undefined` |


## Events

| Event   | Description                                                                           | Type                |
| ------- | ------------------------------------------------------------------------------------- | ------------------- |
| `close` | Send the chip value to the parent component when clicking the close button of a chip. | `CustomEvent<void>` |


----------------------------------------------

*Built with [StencilJS](https://stenciljs.com/)*
