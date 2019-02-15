# se-button



<!-- Auto Generated Below -->


## Properties

| Property   | Attribute  | Description                                                                                                                                                                                                                                                                                                                               | Type                                                               | Default     |
| ---------- | ---------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------ | ----------- |
| `color`    | `color`    | Optional property that defines the background color of the button. `primary` is a green color. `accent` is a blue color. `warn` is an orange color. `error` is a red color.                                                                                                                                                               | `"accent" \| "error" \| "primary" \| "warn"`                       | `undefined` |
| `disabled` | `disabled` | Optional property that defines if the button is disabled.  Set to `false` by default.                                                                                                                                                                                                                                                     | `boolean`                                                          | `false`     |
| `icon`     | `icon`     | Optional property that determines if your button includes an icon.                                                                                                                                                                                                                                                                        | `string`                                                           | `undefined` |
| `mode`     | `mode`     | Defines the visual appearance of the button. `flat` is the default mode, which includes a gray background. `raised` adds a box shadow to the button. `outline` adds a border to the button. `text` mode has no border or background color. `login` and `signup` modes are specific for "Login" and "Sign Up" buttons in your application. | `"flat" \| "login" \| "outline" \| "raised" \| "signup" \| "text"` | `'flat'`    |
| `value`    | `value`    | Optional property that defines the value of your button, which gets passed to the parent component when clicking the button.                                                                                                                                                                                                              | `string`                                                           | `undefined` |


## Events

| Event     | Description                                            | Type               |
| --------- | ------------------------------------------------------ | ------------------ |
| `clicked` | Passes button data to the parent component on a click. | `CustomEvent<any>` |


## Methods

### `setActive(val: boolean) => void`

Set a selected button from the parent component.

#### Parameters

| Name  | Type      | Description               |
| ----- | --------- | ------------------------- |
| `val` | `boolean` | set to `true` or `false`. |

#### Returns

Type: `void`



### `setColor(val: "primary" | "accent" | "warn" | "error") => void`

Set a color for your button from the parent component.

#### Parameters

| Name  | Type                                         | Description                                                                                           |
| ----- | -------------------------------------------- | ----------------------------------------------------------------------------------------------------- |
| `val` | `"accent" \| "error" \| "primary" \| "warn"` | set to `primary`, `accent`, `warn`, or `error`.  See the color property description for color values. |

#### Returns

Type: `void`



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
