# se-snackbar



<!-- Auto Generated Below -->


## Properties

| Property    | Attribute    | Description                                                                                                                                | Type                                                 | Default                |
| ----------- | ------------ | ------------------------------------------------------------------------------------------------------------------------------------------ | ---------------------------------------------------- | ---------------------- |
| `canClose`  | `can-close`  | Displays a "button" to close the snackbar. The default setting is `false`. This will be visible if set to `true`.                          | `boolean`                                            | `false`                |
| `closeText` | `close-text` | Defines the text you want your "close button" to read.  The default text is `dismiss`.                                                     | `string`                                             | `'dismiss'`            |
| `icon`      | `icon`       | The name of the icon you wish to display.  The default icon is an information circle.                                                      | `string`                                             | `'information_circle'` |
| `message`   | `message`    | The content of the message you want the snackbar to display.                                                                               | `string`                                             | `undefined`            |
| `open`      | `open`       | Indicates if the snackbar is open.  Set to `false` (closed) by default.                                                                    | `boolean`                                            | `false`                |
| `type`      | `type`       | Indicates the background color of your snackbar. `success`: green `warning`: orange `error`: red `information`: dark grey, default setting | `"error" \| "information" \| "success" \| "warning"` | `'information'`        |


## Events

| Event      | Description                                                          | Type               |
| ---------- | -------------------------------------------------------------------- | ------------------ |
| `didClose` | Sends information to the parent component when closing the snackbar. | `CustomEvent<any>` |


----------------------------------------------

*Built with [StencilJS](https://stenciljs.com/)*
