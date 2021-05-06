# se-filtration-smart-mobile-view-trigger



<!-- Auto Generated Below -->


## Properties

| Property             | Attribute | Description                                                   | Type     | Default     |
| -------------------- | --------- | ------------------------------------------------------------- | -------- | ----------- |
| `count`              | `count`   | The number of facets in which there are selected refinements. | `number` | `undefined` |
| `label` _(required)_ | `label`   | The text label of the "Show filter" button.                   | `string` | `undefined` |


## Events

| Event              | Description                                      | Type                |
| ------------------ | ------------------------------------------------ | ------------------- |
| `toggleMobileView` | Event that toggle visibility of the mobile view. | `CustomEvent<void>` |


## Dependencies

### Depends on

- [se-icon](../../icon)

### Graph
```mermaid
graph TD;
  se-filtration-smart-mobile-view-trigger --> se-icon
  style se-filtration-smart-mobile-view-trigger fill:#f9f,stroke:#333,stroke-width:4px
```

----------------------------------------------

*Built with [StencilJS](https://stenciljs.com/)*
