# se-stepper



<!-- Auto Generated Below -->


## Properties

| Property | Attribute | Description                                                                                                                                                                                                                                                                            | Type                         | Default     |
| -------- | --------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ---------------------------- | ----------- |
| `color`  | `color`   | Sets the background color of your stepper. The default setting is `primary`, implementing a green background for the stepper visual items. The `alternative` setting implements a white background for the stepper visual items.  This setting is best used against a gray background. | `"alternative" \| "primary"` | `'primary'` |
| `linear` | `linear`  | Defines if the stepper items must be completed sequentially.  The default setting is `false`.                                                                                                                                                                                          | `boolean`                    | `false`     |


## Events

| Event            | Description                                                                       | Type               |
| ---------------- | --------------------------------------------------------------------------------- | ------------------ |
| `optionSelected` | Emits an event to the parent component that a new stepper item has been selected. | `CustomEvent<any>` |


----------------------------------------------

*Built with [StencilJS](https://stenciljs.com/)*
