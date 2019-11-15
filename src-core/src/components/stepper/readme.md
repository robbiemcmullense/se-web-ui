# se-stepper



<!-- Auto Generated Below -->


## Properties

| Property    | Attribute   | Description                                                                                                                             | Type                         | Default     |
| ----------- | ----------- | --------------------------------------------------------------------------------------------------------------------------------------- | ---------------------------- | ----------- |
| `color`     | `color`     | Sets the background color of your stepper.                                                                                              | `"alternative" \| "primary"` | `'primary'` |
| `linear`    | `linear`    | If set to `true`, you are required to complete previous steps before moving onto the next step. Default setting is `false`.             | `boolean`                    | `false`     |
| `validated` | `validated` | Set the validated property to true when a form field tied to a required step has the required input data. Otherwise, set this to false. | `boolean`                    | `false`     |


## Events

| Event            | Description                                                                 | Type               |
| ---------------- | --------------------------------------------------------------------------- | ------------------ |
| `optionSelected` | Indicate to the parent component that a new stepper item has been selected. | `CustomEvent<any>` |


----------------------------------------------

*Built with [StencilJS](https://stenciljs.com/)*
