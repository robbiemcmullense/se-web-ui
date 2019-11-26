# se-stepper-item



<!-- Auto Generated Below -->


## Properties

| Property          | Attribute          | Description                                                                                                                                                                                                                                  | Type      | Default     |
| ----------------- | ------------------ | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | --------- | ----------- |
| `disabled`        | `disabled`         | Indicates whether or not a stepper item has been disabled.                                                                                                                                                                                   | `boolean` | `undefined` |
| `isLast`          | `is-last`          | Indicates whether or not the stepper item is the last item in the stepper component.  The default setting is `false`.                                                                                                                        | `boolean` | `false`     |
| `label`           | `label`            | Indicates the label for your stepper item.                                                                                                                                                                                                   | `string`  | `undefined` |
| `required`        | `required`         | Indicates whether or not this is a required section of your stepper component.  The default setting is `false`. If set to `true`, the next step will not be accessible until the input fields associated with this step have been validated. | `boolean` | `false`     |
| `selected`        | `selected`         | Indicates whether or not a stepper item has been selected.                                                                                                                                                                                   | `boolean` | `undefined` |
| `selectedContent` | `selected-content` | Indicates the content for the currently selected step in the stepper.                                                                                                                                                                        | `boolean` | `undefined` |
| `step`            | `step`             | Indicates the numerical position of the stepper item within the stepper component.                                                                                                                                                           | `number`  | `undefined` |
| `validated`       | `validated`        | Indicates whether a required item's data has been validated.  Useful if using a form field.                                                                                                                                                  | `boolean` | `undefined` |


## Events

| Event           | Description                                                                    | Type               |
| --------------- | ------------------------------------------------------------------------------ | ------------------ |
| `itemValidated` | Event to send to the parent component when a stepper item's data is validated. | `CustomEvent<any>` |


----------------------------------------------

*Built with [StencilJS](https://stenciljs.com/)*
