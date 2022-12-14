# se-form-field



<!-- Auto Generated Below -->


## Properties

| Property     | Attribute     | Description                                                                                                                                                                                                                                                                                                                                                | Type                                           | Default     |
| ------------ | ------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------- | ----------- |
| `block`      | `block`       | Optional property that defines if the field displays as a block in it's container. When set to true, the field will be as wide as its container. both field label auto adjust when it set to inline                                                                                                                                                        | `boolean`                                      | `undefined` |
| `disabled`   | `disabled`    | Optional property that defines if the form field is disabled.  Set to `false` by default.                                                                                                                                                                                                                                                                  | `boolean`                                      | `false`     |
| `label`      | `label`       | Defines the text value of the label in your form field.                                                                                                                                                                                                                                                                                                    | `string`                                       | `undefined` |
| `labelAlign` | `label-align` | Optional property to define how to align the label                                                                                                                                                                                                                                                                                                         | `"left" \| "right"`                            | `'right'`   |
| `labelWidth` | `label-width` | Optional property to define the proportion of the label width. The content (input) will take the rest of if. Defaulted to 40%                                                                                                                                                                                                                              | `string`                                       | `'35%'`     |
| `minWidth`   | `min-width`   | Optional property that defines the minumum width after witch the form field will move to stacked mode.                                                                                                                                                                                                                                                     | `number`                                       | `321`       |
| `noStacking` | `no-stacking` | Optional property that defines if the form-filed should not stack even if the container is small (it won't be responsive).                                                                                                                                                                                                                                 | `boolean`                                      | `false`     |
| `option`     | `option`      | <span style="color:red">**[DEPRECATED]**</span> use `stacked` property instead<br/><br/>Defines the layout of your form field. `inline` is the default option, and is always applied if the type is set to `checkbox`.  This sets the input or select field adjacent to the label. `stacked` option will render the input or select field below the label. | `"inline" \| "stacked"`                        | `'inline'`  |
| `padding`    | `padding`     | Defines the spacing around the inside edge of a container. `none` is 0px. `small` is 4px. `medium` is 8px.                                                                                                                                                                                                                                                 | `"medium" \| "none" \| "small"`                | `'small'`   |
| `required`   | `required`    | Determines if the input is required by the application. Set to `false` by default. Setting this value to `true` will render a red asterisk next to your label.                                                                                                                                                                                             | `boolean`                                      | `false`     |
| `stacked`    | `stacked`     | Defines the layout of your form field. If `true`, the input field will render bellow the label.                                                                                                                                                                                                                                                            | `boolean`                                      | `false`     |
| `status`     | `status`      | Sets a red border on an input field if there's an error, an orange border if there's a warning, and a green border if a successful input.                                                                                                                                                                                                                  | `"error" \| "success" \| "warning"`            | `undefined` |
| `textOnly`   | `text-only`   | Defines if the field is a text, to add a padding and better align with other fields.                                                                                                                                                                                                                                                                       | `boolean`                                      | `undefined` |
| `type`       | `type`        | Defines whether the form field's input is a text field (`input`), a checkbox (`checkbox`), a radio button (`radio`), or a dropdown menu (`select`). `input` is the default type.                                                                                                                                                                           | `"checkbox" \| "input" \| "radio" \| "select"` | `'input'`   |
| `value`      | `value`       | Defines the value of your form field to get passed to the parent component. When the type is set to "input", this value will be the default placeholder in your input field.                                                                                                                                                                               | `string`                                       | `undefined` |


## Events

| Event       | Description                                                                                                                               | Type               |
| ----------- | ----------------------------------------------------------------------------------------------------------------------------------------- | ------------------ |
| `didSubmit` | Passes form data to the parent component on a click (`checkbox` or `radio`), menu change (`select`), or when the input field loses focus. | `CustomEvent<any>` |


## Dependencies

### Used by

 - [se-filtration](../filtration)
 - [se-pagination](../pagination)

### Graph
```mermaid
graph TD;
  se-filtration --> se-form-field
  se-pagination --> se-form-field
  style se-form-field fill:#f9f,stroke:#333,stroke-width:4px
```

----------------------------------------------

*Built with [StencilJS](https://stenciljs.com/)*
