# se-dropdown

Se-dropdown can be use with any elements. But we advise to use the `se-list` with `mode="dropdown"` to insure that it follows the SE guidelines.

**With a button**
Use the dropdown on a button will automatically add a caret on the button.
<se-dropdown alignment="left">
  <se-button slot="trigger" mode="flat">Dropdown</se-button>
  <se-list mode="dropdown">
    <se-list-item item="Click to load" onclick="loader()"></se-list-item>
    <se-list-item item="my item 3 no icon"></se-list-item>
    <se-list-item item="I'm the selected one!"></se-list-item>
    <se-list-item item="Basic Item"></se-list-item>
    <se-list-item item="I'm here"></se-list-item>
    <se-list-item item="my item 2 no description long text"></se-list-item>
  </se-list>
</se-dropdown>

```html
<se-dropdown alignment="left">
  <se-button slot="trigger" mode="flat">Dropdown</se-button>
  <se-list mode="dropdown">
    <se-list-item item="Click to load" onclick="loader()"></se-list-item>
    <se-list-item item="my item 3 no icon"></se-list-item>
    <se-list-item item="I'm the selected one!"></se-list-item>
    <se-list-item item="Basic Item"></se-list-item>
    <se-list-item item="I'm here"></se-list-item>
    <se-list-item item="my item 2 no description long text"></se-list-item>
  </se-list>
</se-dropdown>
```

**With an icon**

To Place the icon in a widget header for example:

<se-dropdown alignment="right">
  <se-icon slot="trigger" mode="button" color="alternative">other_vertical</se-icon>
  <se-list mode="dropdown">
    <se-list-item item="I'm selected"></se-list-item>
    <se-list-item item="my item 2 no description  with a long text"></se-list-item>
    <se-list-item item="my item 3 no icon"></se-list-item>
  </se-list>
</se-dropdown>

```html
<se-icon mode="button" color="alternative">favourites_addto</se-icon>
<se-dropdown alignment="right">
  <se-icon slot="trigger" mode="button" color="alternative">other_vertical</se-icon>
  <se-list mode="dropdown">
    <se-list-item item="I'm selected"></se-list-item>
    <se-list-item item="my item 2 no description  with a long text"></se-list-item>
    <se-list-item item="my item 3 no icon"></se-list-item>
  </se-list>
</se-dropdown>
```

Use the dropdown on a button (this will automatically add a caret on the button)

```html
<se-dropdown alignment="left">
  <se-button slot="trigger" mode="flat">Dropdown</se-button>
  <se-list mode="dropdown">
    <se-list-item item="Click to load" onclick="loader()"></se-list-item>
    <se-list-item item="my item 3 no icon"></se-list-item>
    <se-list-item item="I'm the selected one!"></se-list-item>
    <se-list-item item="Basic Item"></se-list-item>
    <se-list-item item="I'm here"></se-list-item>
    <se-list-item item="my item 2 no description long text"></se-list-item>
  </se-list>
</se-dropdown>
```

| Slot      | Description                                                                         |
| --------- | ----------------------------------------------------------------------------------- |
| none      | Slot with no name will be used as container for the dropdown                        |
| `trigger` | Correspond to the trigger element to open the dropdown (`se-icon`, `se-button` ...) |

<!-- Auto Generated Below -->


## Properties

| Property    | Attribute   | Description                                                                                                                                                                                                     | Type                | Default  |
| ----------- | ----------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------------------- | -------- |
| `alignment` | `alignment` | Define how to align the dropdown container. `left`: Position the container regarding to the left side of the trigger element `right`: Position the container regarding to the right side of the trigger element | `"left" \| "right"` | `'left'` |


## Events

| Event     | Description                                      | Type                |
| --------- | ------------------------------------------------ | ------------------- |
| `onClose` | Event emitted when the dropdown has been closed. | `CustomEvent<void>` |
| `onOpen`  | Event emitted when the dropdown has been opened. | `CustomEvent<void>` |


## Methods

### `close() => void`

Method to close the dropdown from the outside.

#### Returns

Type: `void`



### `open() => void`

Method to open the dropdown from the outside.

#### Returns

Type: `void`




----------------------------------------------

*Built with [StencilJS](https://stenciljs.com/)*
