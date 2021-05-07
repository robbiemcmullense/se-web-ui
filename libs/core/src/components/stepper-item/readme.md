# se-stepper-item



<!-- Auto Generated Below -->


## Properties

| Property      | Attribute     | Description                                                                                                                                                                                                            | Type      | Default     |
| ------------- | ------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | --------- | ----------- |
| `active`      | `active`      | Indicates the content for the currently selected step in the stepper.                                                                                                                                                  | `boolean` | `undefined` |
| `interactive` | `interactive` | Indicates if the stepper item is interactive or not. The default setting is `true`, the stepper item can be interacted with. `false` disabled the interactivness.                                                      | `boolean` | `true`      |
| `label`       | `label`       | Indicates the label for your stepper item.                                                                                                                                                                             | `string`  | `undefined` |
| `validated`   | `validated`   | Indicates whether a required item's data has been validated.  Useful if using a form field. When the stepper component is set to linear mode, all stepper items will need to be validated before advancing the stpper. | `boolean` | `undefined` |


## Events

| Event         | Description                                                                                                                                       | Type               |
| ------------- | ------------------------------------------------------------------------------------------------------------------------------------------------- | ------------------ |
| `didActivate` | Event to send to the parent component when a stepper item's data is active true or false. The boolean validated property is passed to the parent. | `CustomEvent<any>` |
| `didValidate` | Event to send to the parent component when a stepper item's data is validated.                                                                    | `CustomEvent<any>` |


----------------------------------------------

*Built with [StencilJS](https://stenciljs.com/)*
