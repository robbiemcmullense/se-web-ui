# se-stepper



<!-- Auto Generated Below -->


## Properties

| Property      | Attribute     | Description                                                                                                                                                                                                                                                                           | Type                         | Default     |
| ------------- | ------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ---------------------------- | ----------- |
| `block`       | `block`       | Defines if the stepper takes the whole space.                                                                                                                                                                                                                                         | `boolean`                    | `false`     |
| `color`       | `color`       | Sets the background color of your stepper. The default setting is `primary`, implementing a green background for the stepper visual items. The `alternative` setting implements a white background for the stepper visual items. This setting is best used against a gray background. | `"alternative" \| "primary"` | `'primary'` |
| `interactive` | `interactive` | Defines if the stepper items is interactive or not. The default setting is `true`, each stepper item can be interacted with. `linear` keeps its same interaction limitation. `false` disabled the interactivness. It overrides the individual stepper item `interactive` property.    | `boolean`                    | `true`      |
| `linear`      | `linear`      | Defines if the stepper items must be completed sequentially. The default setting is `true`, each stepper item must be validated before advancing to the next step. `false` allows each step to be selected in any order.                                                              | `boolean`                    | `true`      |


## Events

| Event       | Description                                                                                                                                                | Type               |
| ----------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------- | ------------------ |
| `didChange` | Event to send to the parent component when a stepper item is clicked and next and previous will be clicked. The Stepper Item data is passed to the parent. | `CustomEvent<any>` |


## Methods

### `next(validate: boolean) => Promise<void>`

Call the `next` method to navigate to the next step from the step that is currently selected.
This will not work in linear mode if the next step is not validated.

#### Returns

Type: `Promise<void>`



### `previous() => Promise<void>`

Call the `previous` method to navigate to the previous step from the step that is currently selected.

#### Returns

Type: `Promise<void>`



### `reset(step?: number) => Promise<void>`

Call the `reset` method to reset the stepper to the indicated step.  This also invalidates any validated steps.
It no step parameter is provided, it will reset to the first stepper item.

#### Returns

Type: `Promise<void>`




## Dependencies

### Depends on

- [se-icon](../icon)
- [se-divider](../divider)

### Graph
```mermaid
graph TD;
  se-stepper --> se-icon
  se-stepper --> se-divider
  style se-stepper fill:#f9f,stroke:#333,stroke-width:4px
```

----------------------------------------------

*Built with [StencilJS](https://stenciljs.com/)*
