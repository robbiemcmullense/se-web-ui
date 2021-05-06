# se-filtration-smart-mobile-view



<!-- Auto Generated Below -->


## Properties

| Property                         | Attribute             | Description                                           | Type      | Default     |
| -------------------------------- | --------------------- | ----------------------------------------------------- | --------- | ----------- |
| `headerLabel`                    | `header-label`        | The header label of filters.                          | `string`  | `undefined` |
| `isVisible` _(required)_         | `is-visible`          | Defines if the mobile view is visible.                | `boolean` | `undefined` |
| `resetButtonLabel` _(required)_  | `reset-button-label`  | Defines text that will be used in the "Reset" button. | `string`  | `undefined` |
| `showProductsLabel` _(required)_ | `show-products-label` | The text label of the show products button.           | `string`  | `undefined` |


## Events

| Event              | Description                                                                                                                                                                                                       | Type                                      |
| ------------------ | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ----------------------------------------- |
| `toggleMobileView` | Event that closes mobile view with two options:  { restore: true } -- closes mobile view and undoes changes made in mobile view  { restore: false } -- closes mobile view and applies changes made in mobile view | `CustomEvent<ToggleMobileViewVisibility>` |


## Dependencies

### Used by

 - [se-filtration-smart](..)

### Depends on

- [se-dialog](../../dialog)
- [se-dialog-header](../../dialog-header)
- [se-dialog-content](../../dialog-content)
- [se-filtration-smart-reset-button](../reset-button)
- [se-filtration-smart-facet](../facet)
- [se-dialog-footer](../../dialog-footer)
- [se-button](../../button)

### Graph
```mermaid
graph TD;
  se-filtration-smart-mobile-view --> se-dialog
  se-filtration-smart-mobile-view --> se-dialog-header
  se-filtration-smart-mobile-view --> se-dialog-content
  se-filtration-smart-mobile-view --> se-filtration-smart-reset-button
  se-filtration-smart-mobile-view --> se-filtration-smart-facet
  se-filtration-smart-mobile-view --> se-dialog-footer
  se-filtration-smart-mobile-view --> se-button
  se-dialog-header --> se-icon
  se-dialog-content --> se-icon
  se-filtration-smart-reset-button --> se-icon
  se-filtration-smart-facet --> se-block
  se-filtration-smart-facet --> se-block-header
  se-filtration-smart-facet --> se-icon
  se-filtration-smart-facet --> se-block-content
  se-filtration-smart-facet --> se-list
  se-filtration-smart-facet --> se-filtration-smart-group
  se-filtration-smart-facet --> se-block-footer
  se-filtration-smart-facet --> se-filtration-smart-view-more-refinements-button
  se-block --> se-loading
  se-block-header --> se-divider
  se-filtration-smart-group --> se-filtration-smart-tab
  se-filtration-smart-group --> se-filtration-smart-checkbox
  se-filtration-smart-group --> se-filtration-smart-group
  se-filtration-smart-group --> se-list-group
  se-filtration-smart-tab --> se-list-item
  se-list-item --> se-icon
  se-filtration-smart-checkbox --> se-list-item
  se-filtration-smart-checkbox --> se-checkbox
  se-list-group --> se-list-item
  se-list-group --> se-icon
  se-block-footer --> se-divider
  se-filtration-smart-view-more-refinements-button --> se-icon
  se-button --> se-icon
  se-filtration-smart --> se-filtration-smart-mobile-view
  style se-filtration-smart-mobile-view fill:#f9f,stroke:#333,stroke-width:4px
```

----------------------------------------------

*Built with [StencilJS](https://stenciljs.com/)*
