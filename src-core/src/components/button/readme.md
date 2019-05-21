# se-button

<!-- Auto Generated Below -->


## Properties

| Property    | Attribute    | Description                                                                                                                                                                                                                                                                                    | Type                                                                                        | Default      |
| ----------- | ------------ | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------- | ------------ |
| `caption`   | `caption`    | Optional property that defines if the button has caption/tooltip text .Used with mini-fab                                                                                                                                                                                                      | `string`                                                                                    | `undefined`  |
| `color`     | `color`      | Defines the background color of the button. The default setting is `standard`.                                                                                                                                                                                                                 | `"alternative" \| "primary" \| "secondary" \| "standard"`                                   | `'standard'` |
| `disabled`  | `disabled`   | Optional property that defines if the button is disabled.  Set to `false` by default.                                                                                                                                                                                                          | `boolean`                                                                                   | `false`      |
| `icon`      | `icon`       | Optional property that determines if your button includes an icon.                                                                                                                                                                                                                             | `string`                                                                                    | `undefined`  |
| `iconColor` | `icon-color` | Optional property to change the color of the icon when needed. Used for the user dropdown in the header for example.                                                                                                                                                                           | `"alternative" \| "primary" \| "secondary" \| "standard"`                                   | `undefined`  |
| `option`    | `option`     | Defines the visual appearance of the button. `flat` is the default option, which includes a gray background. `raised` adds a box shadow to the button. `outline` adds a border to the button. `login` and `signup` options are specific for "Login" and "Sign Up" buttons in your application. | `"fab" \| "flat" \| "inherit" \| "login" \| "minifab" \| "outline" \| "raised" \| "signup"` | `'flat'`     |
| `selected`  | `selected`   | Optional property that defines if the button should be shown as selected. Used with `se-radio`                                                                                                                                                                                                 | `boolean`                                                                                   | `undefined`  |
| `size`      | `size`       | Defines the size of the button. `small` is the default option, with a 14px font and a 32px height. `medium` sets the font to 16px and the height to 40px. `large` sets the font to 18px and the height to 48px.                                                                                | `"large" \| "medium" \| "small"`                                                            | `'small'`    |
| `type`      | `type`       | Optional type property of the button. `button`	The button is a clickable button (default) `submit`	The button is a submit button (submits form-data) `reset`	The button is a reset button (resets the form-data to its initial values)                                                         | `"button" \| "reset" \| "submit"`                                                           | `'button'`   |
| `value`     | `value`      | Optional property that defines the value of your button, which gets passed to the parent component when clicking the button.                                                                                                                                                                   | `string`                                                                                    | `undefined`  |


## Events

| Event      | Description | Type               |
| ---------- | ----------- | ------------------ |
| `didClick` |             | `CustomEvent<any>` |


## Methods

### `setDisabled(val: boolean) => void`

Setd the disabled property for your button from the parent component.

#### Parameters

| Name  | Type      | Description               |
| ----- | --------- | ------------------------- |
| `val` | `boolean` | set to `true` or `false`. |

#### Returns

Type: `void`



### `setGrouped() => void`

Indicates if the button is part of a group of buttons within the `se-radio` component.

#### Returns

Type: `void`




----------------------------------------------

*Built with [StencilJS](https://stenciljs.com/)*
