# se-button



<!-- Auto Generated Below -->


## Properties

| Property   | Attribute  | Description                                                                                                                                                                                                                                                                                | Type                                                                  | Default      |
| ---------- | ---------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | --------------------------------------------------------------------- | ------------ |
| `color`    | `color`    | Optional property that defines the background color of the button. Default is standard.                                                                                                                                                                                                    | `"alternative" \| "primary" \| "secondary" \| "standard"`             | `'standard'` |
| `disabled` | `disabled` | Optional property that defines if the button is disabled.  Set to `false` by default.                                                                                                                                                                                                      | `boolean`                                                             | `false`      |
| `icon`     | `icon`     | Optional property that determines if your button includes an icon.                                                                                                                                                                                                                         | `string`                                                              | `undefined`  |
| `mode`     | `mode`     | Defines the visual appearance of the button. `flat` is the default mode, which includes a gray background. `raised` adds a box shadow to the button. `outline` adds a border to the button. `login` and `signup` modes are specific for "Login" and "Sign Up" buttons in your application. | `"flat" \| "inherit" \| "login" \| "outline" \| "raised" \| "signup"` | `'flat'`     |
| `selected` | `selected` | Optional property that define if the button should be shown as selected. Used with `se-buttons`                                                                                                                                                                                            | `boolean`                                                             | `undefined`  |
| `value`    | `value`    | Optional property that defines the value of your button, which gets passed to the parent component when clicking the button.                                                                                                                                                               | `string`                                                              | `undefined`  |


## Events

| Event     | Description                                            | Type               |
| --------- | ------------------------------------------------------ | ------------------ |
| `clicked` | Passes button data to the parent component on a click. | `CustomEvent<any>` |


## Methods

### `setDisabled(val: boolean) => void`

Set the disabled property for your button from the parent component.

#### Parameters

| Name  | Type      | Description               |
| ----- | --------- | ------------------------- |
| `val` | `boolean` | set to `true` or `false`. |

#### Returns

Type: `void`



### `setGrouped() => void`

Indicate if the button is part of a group of buttons within the `se-buttons` component.

#### Returns

Type: `void`




----------------------------------------------

*Built with [StencilJS](https://stenciljs.com/)*
