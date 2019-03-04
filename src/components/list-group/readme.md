# se-list-group



<!-- Auto Generated Below -->


## Properties

| Property      | Attribute     | Description                                                                                               | Type                       | Default     |
| ------------- | ------------- | --------------------------------------------------------------------------------------------------------- | -------------------------- | ----------- |
| `collapsed`   | `collapsed`   | Define if item group is collapsed/closed. a `se-list-group` cannot be selected from the outside           | `boolean`                  | `false`     |
| `description` | `description` | Define description of the item. placed under the title of the item.                                       | `string`                   | `undefined` |
| `icon`        | `icon`        | Place an icon on the left side of the item list.                                                          | `string`                   | `undefined` |
| `iconColor`   | `icon-color`  | Optional property to define the color of the icon. The default color will be inherited from it's parent.  | `"primary" \| "secondary"` | `undefined` |
| `item`        | `item`        | Define the title of the item                                                                              | `string`                   | `undefined` |
| `mode`        | `mode`        | Define the them of the list. This them will be handled and modified by the parent element                 | `"classic" \| "nav"`       | `"classic"` |
| `selected`    | `selected`    | Define if the list group should be displayed as selected (if one of its child is selected when collapsed) | `boolean`                  | `undefined` |


## Methods

### `setIndentation(indentation: number) => void`

Indicate if the button is part of a group of buttons within the `se-buttons` component.

#### Parameters

| Name          | Type     | Description |
| ------------- | -------- | ----------- |
| `indentation` | `number` |             |

#### Returns

Type: `void`




----------------------------------------------

*Built with [StencilJS](https://stenciljs.com/)*
