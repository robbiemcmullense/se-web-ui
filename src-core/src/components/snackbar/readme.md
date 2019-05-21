# se-snackbar



<!-- Auto Generated Below -->


## Properties

| Property    | Attribute    | Description                                                                                                                                | Type                                                 | Default                |
| ----------- | ------------ | ------------------------------------------------------------------------------------------------------------------------------------------ | ---------------------------------------------------- | ---------------------- |
| `canClose`  | `can-close`  | Display a close "button".  Visible by default.                                                                                             | `boolean`                                            | `false`                |
| `closeText` | `close-text` | Defines the text you want your "close button" to read.  Default text is `dismiss`.                                                         | `string`                                             | `'dismiss'`            |
| `icon`      | `icon`       | The name of the icon you wish to display.  The default icon is an information circle.                                                      | `string`                                             | `'information_circle'` |
| `message`   | `message`    | The content of the message you want the snackbar to display.                                                                               | `string`                                             | `undefined`            |
| `open`      | `open`       | Indicates if the snackbar is open.  Set to `false` (closed) by default.                                                                    | `boolean`                                            | `false`                |
| `type`      | `type`       | Indicates the background color of your snackbar. `success`: green `warning`: orange `error`: red `information`: dark grey, default setting | `"error" \| "information" \| "success" \| "warning"` | `'information'`        |


## Events

| Event      | Description                                                         | Type                |
| ---------- | ------------------------------------------------------------------- | ------------------- |
| `didClose` | Send information to the parent component when closing the snackbar. | `CustomEvent<void>` |


----------------------------------------------

*Built with [StencilJS](https://stenciljs.com/)*