# se-list-item



<!-- Auto Generated Below -->


## Properties

| Property      | Attribute     | Description                                                                                                       | Type                                                      | Default     |
| ------------- | ------------- | ----------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------- | ----------- |
| `collapsed`   | `collapsed`   | Define if item group is collapsed/closed. update the icon to change from `up` to `down`. Used by `se-item-group`. | `boolean`                                                 | `undefined` |
| `collapsible` | `collapsible` | Define if the item should behave as a an collapsible (used by `se-item-group`)                                    | `boolean`                                                 | `false`     |
| `description` | `description` | Define description of the item. placed under the title of the item.                                               | `string`                                                  | `undefined` |
| `icon`        | `icon`        | Place an icon on the left side of the item list.                                                                  | `string`                                                  | `undefined` |
| `iconColor`   | `icon-color`  | Optional property to define the color of the icon. The default color will be inherited from it's parent.          | `"alternative" \| "primary" \| "secondary" \| "standard"` | `undefined` |
| `itemTitle`   | `item-title`  | Define the title of the item                                                                                      | `string`                                                  | `undefined` |
| `mode`        | `mode`        | Define the them of the list. This them will be handled and modified by the parent element                         | `"classic" \| "nav"`                                      | `'classic'` |
| `selected`    | `selected`    | Define if the list element should be selected or not                                                              | `boolean`                                                 | `undefined` |


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
