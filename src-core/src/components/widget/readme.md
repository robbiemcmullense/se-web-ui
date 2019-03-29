# se-widget



<!-- Auto Generated Below -->


## Properties

| Property   | Attribute  | Description                                                                                                                                                                                              | Type                          | Default         |
| ---------- | ---------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ----------------------------- | --------------- |
| `color`    | `color`    | Optional property that defines the background color of the widget. default is alternative (white)                                                                                                        | `"alternative" \| "standard"` | `"alternative"` |
| `display`  | `display`  | Defines how to display the element. `flex` Default. Will make all element fitting in the . `block` Help in specific cases. Make sure you know that you are doing.                                        | `"block" \| "flex" \| "grid"` | `"flex"`        |
| `enlarged` | `enlarged` | When on Grid display, define if the widget should be a 2/2 instead of a small 1/1 grid item.                                                                                                             | `boolean`                     | `false`         |
| `height`   | `height`   | Define a specific height of a widget. useful to create easy layout under `se-container` which use `flex` by default.                                                                                     | `string`                      | `undefined`     |
| `loading`  | `loading`  | Display the loading icon if set to `true`.                                                                                                                                                               | `boolean`                     | `false`         |
| `option`   | `option`   | Define the visual appearance of a widget. The default widget gives a small padding of the widget. `fill` will remove any spacing. `card` will create a card look and fell with shadow and rounded corner | `"card" \| "fill"`            | `undefined`     |
| `width`    | `width`    | Define a specific width of a widget. useful to create easy layout under `se-container` which use `flex` by default.                                                                                      | `string`                      | `undefined`     |


----------------------------------------------

*Built with [StencilJS](https://stenciljs.com/)*
