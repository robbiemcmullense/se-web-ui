# se-widget



<!-- Auto Generated Below -->


## Properties

| Property   | Attribute  | Description                                                                                                                                       | Type                          | Default         |
| ---------- | ---------- | ------------------------------------------------------------------------------------------------------------------------------------------------- | ----------------------------- | --------------- |
| `color`    | `color`    | Optional property that defines the background color of the widget. Default setting is `alternative` (white).                                      | `"alternative" \| "standard"` | `"alternative"` |
| `display`  | `display`  | Defines how to display the element. `flex` is the default display. `block` helps in specific cases. Make sure you know what you are doing.        | `"block" \| "flex" \| "grid"` | `"flex"`        |
| `enlarged` | `enlarged` | When on Grid display, determines if the widget should be a 2/2 instead of a small 1/1 grid item. Default setting is `false` (1/1).                | `boolean`                     | `false`         |
| `height`   | `height`   | Defines a specific height of a widget.  Useful to create easy layout under `se-container` which uses `flex` by default.                           | `string`                      | `undefined`     |
| `loading`  | `loading`  | Display the loading icon if set to `true`.  Default setting is `false`.                                                                           | `boolean`                     | `false`         |
| `option`   | `option`   | Defines the visual appearance of a widget. `fill` will remove any spacing. `card` will create a card look and feel with shadow and rounded corner | `"card" \| "fill"`            | `undefined`     |
| `width`    | `width`    | Defines a specific width of a widget.  Useful to create easy layout under `se-container` which uses `flex` by default.                            | `string`                      | `undefined`     |


----------------------------------------------

*Built with [StencilJS](https://stenciljs.com/)*
