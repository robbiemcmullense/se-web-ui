# se-list-item



<!-- Auto Generated Below -->


## Properties

| Property      | Attribute     | Description                                                                                              | Type                                             | Default     |
| ------------- | ------------- | -------------------------------------------------------------------------------------------------------- | ------------------------------------------------ | ----------- |
| `description` | `description` | Defines the description of the item. placed under its title.                                             | `string`                                         | `undefined` |
| `icon`        | `icon`        | Places an icon on the left side of the item list.                                                        | `string`                                         | `undefined` |
| `iconColor`   | `icon-color`  | Optional property to define the color of the icon. The default color will be inherited from it's parent. | `"primary" \| "secondary"`                       | `undefined` |
| `indentation` | `indentation` | Defines the group indentation to add paddings to the list item (used with multiple list groups).         | `number`                                         | `0`         |
| `item`        | `item`        | Defines the title of the item.                                                                           | `string`                                         | `undefined` |
| `option`      | `option`      | Define the theme of the list. This them will be handled and modified by the parent element.              | `"classic" \| "dropdown" \| "nav" \| "treeview"` | `"classic"` |
| `selected`    | `selected`    | Defines if the list element should be selected or not.                                                   | `boolean`                                        | `undefined` |


## Events

| Event               | Description                                                                 | Type                |
| ------------------- | --------------------------------------------------------------------------- | ------------------- |
| `didSelectedChange` | Event emitted to notify the item-group that the selected state has changed. | `CustomEvent<void>` |


----------------------------------------------

*Built with [StencilJS](https://stenciljs.com/)*
