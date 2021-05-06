# se-filtration-smart-desktop-view



<!-- Auto Generated Below -->


## Properties

| Property                                | Attribute                     | Description                                                                | Type     | Default     |
| --------------------------------------- | ----------------------------- | -------------------------------------------------------------------------- | -------- | ----------- |
| `headerLabel`                           | `header-label`                | Defines text that will be used as the header of the Filter.                | `string` | `undefined` |
| `maxFacetContentHeight`                 | `max-facet-content-height`    | Defines maximum height of a section content.                               | `number` | `undefined` |
| `resetButtonLabel` _(required)_         | `reset-button-label`          | Defines text that will be used in the "Reset" button.                      | `string` | `undefined` |
| `viewLessFacetsLabel` _(required)_      | `view-less-facets-label`      | Defines text of the "View less facets" button at the bottom of the filter. | `string` | `undefined` |
| `viewLessRefinementsLabel` _(required)_ | `view-less-refinements-label` | Defines text of the "View less refinements" button in a facet.             | `string` | `undefined` |
| `viewMoreFacetsLabel` _(required)_      | `view-more-facets-label`      | Defines text of the "View more facets" button at the bottom of the filter. | `string` | `undefined` |
| `viewMoreRefinementsLabel` _(required)_ | `view-more-refinements-label` | Defines text of the "View more refinements" button in a facet.             | `string` | `undefined` |


## Dependencies

### Used by

 - [se-filtration-smart](..)

### Depends on

- [se-filtration-smart-reset-button](../reset-button)
- [se-filtration-smart-facet](../facet)
- [se-filtration-smart-view-more-facets-button](../view-more-facets-button)

### Graph
```mermaid
graph TD;
  se-filtration-smart-desktop-view --> se-filtration-smart-reset-button
  se-filtration-smart-desktop-view --> se-filtration-smart-facet
  se-filtration-smart-desktop-view --> se-filtration-smart-view-more-facets-button
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
  se-filtration-smart-view-more-facets-button --> se-icon
  se-filtration-smart --> se-filtration-smart-desktop-view
  style se-filtration-smart-desktop-view fill:#f9f,stroke:#333,stroke-width:4px
```

----------------------------------------------

*Built with [StencilJS](https://stenciljs.com/)*
