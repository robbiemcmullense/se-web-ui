/* tslint:disable */
/**
 * This is an autogenerated file created by the Stencil compiler.
 * It contains typing information for all components that exist in this project.
 */


import '@stencil/core';




export namespace Components {

  interface SeApp {}
  interface SeAppAttributes extends StencilHTMLAttributes {}

  interface SeButton {
    /**
    * Optional property that defines the background color of the button. `primary` is a green color. `accent` is a blue color. `warn` is an orange color. `error` is a red color. `light` is a gray color.
    */
    'color': 'primary' | 'accent' | 'warn' | 'error' | 'light';
    /**
    * Optional property that defines if the button is disabled.  Set to `false` by default.
    */
    'disabled': boolean;
    /**
    * Optional property that determines if your button includes an icon.
    */
    'icon': string;
    /**
    * Defines the visual appearance of the button. `flat` is the default mode, which includes a gray background. `raised` adds a box shadow to the button. `outline` adds a border to the button. `text` mode has no border or background color. `login` and `signup` modes are specific for "Login" and "Sign Up" buttons in your application.
    */
    'mode': 'flat' | 'raised' | 'outline' | 'text' | 'login' | 'signup';
    /**
    * Set a selected button from the parent component.
    */
    'setActive': (val: boolean) => void;
    /**
    * Set a color for your button from the parent component.
    */
    'setColor': (val: "primary" | "accent" | "warn" | "error" | "light") => void;
    /**
    * Set the disabled property for your button from the parent component.
    */
    'setDisabled': (val: boolean) => void;
    /**
    * Indicate if the button is part of a group of buttons within the `se-buttons` component.
    */
    'setGrouped': () => void;
    /**
    * Optional property that defines the value of your button, which gets passed to the parent component when clicking the button.
    */
    'value': string;
  }
  interface SeButtonAttributes extends StencilHTMLAttributes {
    /**
    * Optional property that defines the background color of the button. `primary` is a green color. `accent` is a blue color. `warn` is an orange color. `error` is a red color. `light` is a gray color.
    */
    'color'?: 'primary' | 'accent' | 'warn' | 'error' | 'light';
    /**
    * Optional property that defines if the button is disabled.  Set to `false` by default.
    */
    'disabled'?: boolean;
    /**
    * Optional property that determines if your button includes an icon.
    */
    'icon'?: string;
    /**
    * Defines the visual appearance of the button. `flat` is the default mode, which includes a gray background. `raised` adds a box shadow to the button. `outline` adds a border to the button. `text` mode has no border or background color. `login` and `signup` modes are specific for "Login" and "Sign Up" buttons in your application.
    */
    'mode'?: 'flat' | 'raised' | 'outline' | 'text' | 'login' | 'signup';
    /**
    * Passes button data to the parent component on a click.
    */
    'onClicked'?: (event: CustomEvent<any>) => void;
    /**
    * Optional property that defines the value of your button, which gets passed to the parent component when clicking the button.
    */
    'value'?: string;
  }

  interface SeButtons {
    /**
    * Optional property that defines the background color of each button in the group. `primary` is a green color. `accent` is a blue color. `warn` is an orange color. `error` is a red color. `light` is a gray color.
    */
    'color': 'primary' | 'accent' | 'warn' | 'error' | 'light';
    /**
    * Optional property that defines if the button is disabled.  Set to `false` by default.
    */
    'disabled': boolean;
    /**
    * Defines the functionality of your button group. `checkbox` is the default option, where all buttons in the group can be selected. `radio` mode indicates that only one button in the group can be selected at a time.
    */
    'mode': 'checkbox' | 'radio';
    /**
    * Define the selected values of the array.
    */
    'value': Array<any>;
  }
  interface SeButtonsAttributes extends StencilHTMLAttributes {
    /**
    * Optional property that defines the background color of each button in the group. `primary` is a green color. `accent` is a blue color. `warn` is an orange color. `error` is a red color. `light` is a gray color.
    */
    'color'?: 'primary' | 'accent' | 'warn' | 'error' | 'light';
    /**
    * Optional property that defines if the button is disabled.  Set to `false` by default.
    */
    'disabled'?: boolean;
    /**
    * Defines the functionality of your button group. `checkbox` is the default option, where all buttons in the group can be selected. `radio` mode indicates that only one button in the group can be selected at a time.
    */
    'mode'?: 'checkbox' | 'radio';
    /**
    * Passes the selected button value to the parent component when clicking on a button in the group.
    */
    'onChange'?: (event: CustomEvent) => void;
    /**
    * Define the selected values of the array.
    */
    'value'?: Array<any>;
  }

  interface SeCheckbox {
    /**
    * Defines the background color of the button. `primary` is a green color and is the default value. `accent` is a blue color. `warn` is an orange color. `error` is a red color.
    */
    'color': 'primary' | 'accent' | 'warn' | 'error';
    /**
    * Optional property that defines if the checkbox is disabled.  Set to `false` by default.
    */
    'disabled': boolean;
    /**
    * The value you want to pass to the parent component when the checkbox is checked.
    */
    'value': string;
  }
  interface SeCheckboxAttributes extends StencilHTMLAttributes {
    /**
    * Defines the background color of the button. `primary` is a green color and is the default value. `accent` is a blue color. `warn` is an orange color. `error` is a red color.
    */
    'color'?: 'primary' | 'accent' | 'warn' | 'error';
    /**
    * Optional property that defines if the checkbox is disabled.  Set to `false` by default.
    */
    'disabled'?: boolean;
    /**
    * Send the checkbox value to the parent component when clicking on the checkbox.
    */
    'onChange'?: (event: CustomEvent) => void;
    /**
    * The value you want to pass to the parent component when the checkbox is checked.
    */
    'value'?: string;
  }

  interface SeChip {
    /**
    * Indicates whether or not the chip has a close button.  Set to `true` by default.
    */
    'canClose': boolean;
    /**
    * Optional property that defines the background color of the button. `primary` is a green color. `accent` is a blue color. `warn` is an orange color. `error` is a red color. `light` is a gray color.
    */
    'color': 'primary' | 'accent' | 'warn' | 'error';
    /**
    * The text you want to display in your chip.
    */
    'value': string;
  }
  interface SeChipAttributes extends StencilHTMLAttributes {
    /**
    * Indicates whether or not the chip has a close button.  Set to `true` by default.
    */
    'canClose'?: boolean;
    /**
    * Optional property that defines the background color of the button. `primary` is a green color. `accent` is a blue color. `warn` is an orange color. `error` is a red color. `light` is a gray color.
    */
    'color'?: 'primary' | 'accent' | 'warn' | 'error';
    /**
    * Send the chip value to the parent component when clicking the close button of a chip.
    */
    'onClose'?: (event: CustomEvent) => void;
    /**
    * The text you want to display in your chip.
    */
    'value'?: string;
  }

  interface SeContainer {
    /**
    * Defines the inner apparance of a container. `widget` Add a small spacing all around the container so all widgets are spaced with the same distance. `fill` Default. Take the full space of the container. `centered` center the container so the content does no exceed a max width.
    */
    'mode': 'widget' | 'fill' | 'centered' | 'card';
    /**
    * In specific case, it can be necessary to define the container with an absolute position (inside an angular router-container ). Most of the time, the default position will work perfectly with flex box. `relative` Default. Perfect to use with flex content. `absolute` Help in specific cases. Make sure you know that you are doing.
    */
    'position': 'relative' | 'absolute';
  }
  interface SeContainerAttributes extends StencilHTMLAttributes {
    /**
    * Defines the inner apparance of a container. `widget` Add a small spacing all around the container so all widgets are spaced with the same distance. `fill` Default. Take the full space of the container. `centered` center the container so the content does no exceed a max width.
    */
    'mode'?: 'widget' | 'fill' | 'centered' | 'card';
    /**
    * In specific case, it can be necessary to define the container with an absolute position (inside an angular router-container ). Most of the time, the default position will work perfectly with flex box. `relative` Default. Perfect to use with flex content. `absolute` Help in specific cases. Make sure you know that you are doing.
    */
    'position'?: 'relative' | 'absolute';
  }

  interface SeDivider {
    'color': "dark" | "light";
    'mode': "horizontal" | "vertical" | "inset";
  }
  interface SeDividerAttributes extends StencilHTMLAttributes {
    'color'?: "dark" | "light";
    'mode'?: "horizontal" | "vertical" | "inset";
  }

  interface SeFormField {
    /**
    * Optional property that defines if the button is disabled.  Set to `false` by default.
    */
    'disabled': boolean;
    /**
    * Defines the text value of the label in your form field.
    */
    'label': string;
    /**
    * Defines the layout of your form field. `inline` is the default mode and is always applied if the type is set to "checkbox".  This sets the input or select field adjacent to the label. `stacked` mode will render the input or select field below the label.
    */
    'mode': 'inline' | 'stacked';
    /**
    * Remove a red (error) border to the form input field when an invalid input is corrected.
    */
    'removeError': () => void;
    /**
    * Determines if the input is required by the application. Set to `false` by default. Setting this value to "true" will render a red asterisk next to your label.
    */
    'required': boolean;
    /**
    * Set a red (error) border to the form input field when the input is invalid.
    */
    'setError': () => void;
    /**
    * Defines whether the form field's input is a text field (input), a checkbox (checkbox), or a dropdown menu (select). `input` is the default type.
    */
    'type': 'input' | 'checkbox' | 'select';
    /**
    * Defines the value of your form field to get passed to the parent component. When the type is set to "input", this value will be the default placeholder in your input field.
    */
    'value': string;
  }
  interface SeFormFieldAttributes extends StencilHTMLAttributes {
    /**
    * Optional property that defines if the button is disabled.  Set to `false` by default.
    */
    'disabled'?: boolean;
    /**
    * Defines the text value of the label in your form field.
    */
    'label'?: string;
    /**
    * Defines the layout of your form field. `inline` is the default mode and is always applied if the type is set to "checkbox".  This sets the input or select field adjacent to the label. `stacked` mode will render the input or select field below the label.
    */
    'mode'?: 'inline' | 'stacked';
    /**
    * Passes form data to the parent component on a click (checkbox), menu change (select), or when the input field loses focus.
    */
    'onSubmit'?: (event: CustomEvent) => void;
    /**
    * Determines if the input is required by the application. Set to `false` by default. Setting this value to "true" will render a red asterisk next to your label.
    */
    'required'?: boolean;
    /**
    * Defines whether the form field's input is a text field (input), a checkbox (checkbox), or a dropdown menu (select). `input` is the default type.
    */
    'type'?: 'input' | 'checkbox' | 'select';
    /**
    * Defines the value of your form field to get passed to the parent component. When the type is set to "input", this value will be the default placeholder in your input field.
    */
    'value'?: string;
  }

  interface SeHeader {
    /**
    * Title of the application
    */
    'appTitle': string;
    /**
    * domain define the domain of the application. By default, the domain is `ecostruxure`. If `none`, then no domain will be displayed
    */
    'domain': string;
    /**
    * domain define project name (usefull for small project) that can be used for versioning as well. It will be placed at the right side of the title.
    */
    'project': string;
  }
  interface SeHeaderAttributes extends StencilHTMLAttributes {
    /**
    * Title of the application
    */
    'appTitle'?: string;
    /**
    * domain define the domain of the application. By default, the domain is `ecostruxure`. If `none`, then no domain will be displayed
    */
    'domain'?: string;
    /**
    * domain define project name (usefull for small project) that can be used for versioning as well. It will be placed at the right side of the title.
    */
    'project'?: string;
  }

  interface SeIconEcostruxure {}
  interface SeIconEcostruxureAttributes extends StencilHTMLAttributes {}

  interface SeIconSchneider {}
  interface SeIconSchneiderAttributes extends StencilHTMLAttributes {}

  interface SeIcon {
    /**
    * Optional property that defines the background color of the button. The default color will be inherited from its parent. `primary` is a green color. `accent` is a blue color. `warn` is an orange color. `error` is a red color.
    */
    'color': "primary" | "accent" | "warn" | "error";
    /**
    * Define the size of an icon. default small (24px). medium is 40px and large is 63px.
    */
    'size': "small" | "medium" | "large";
  }
  interface SeIconAttributes extends StencilHTMLAttributes {
    /**
    * Optional property that defines the background color of the button. The default color will be inherited from its parent. `primary` is a green color. `accent` is a blue color. `warn` is an orange color. `error` is a red color.
    */
    'color'?: "primary" | "accent" | "warn" | "error";
    /**
    * Define the size of an icon. default small (24px). medium is 40px and large is 63px.
    */
    'size'?: "small" | "medium" | "large";
  }

  interface SeLabel {
    /**
    * When the label is part of a form field, this attribute defines if the input is required, adding a red asterisk next to the label.
    */
    'required': boolean;
    /**
    * Defines the text that you want your label to display.
    */
    'value': string;
  }
  interface SeLabelAttributes extends StencilHTMLAttributes {
    /**
    * When the label is part of a form field, this attribute defines if the input is required, adding a red asterisk next to the label.
    */
    'required'?: boolean;
    /**
    * Defines the text that you want your label to display.
    */
    'value'?: string;
  }

  interface SeLink {
    /**
    * Determines whether or not the link is disabled.
    */
    'disabled': boolean;
    /**
    * Defines the text to be displayed in your link.
    */
    'link': string;
    /**
    * Default setting is `internal`. Set to `external` adds an underline to the link, and opens the link in a new web browser tab.
    */
    'type': 'internal' | 'external';
    /**
    * Defines the url the user should get redirected to when clicking on the link.
    */
    'url': string;
  }
  interface SeLinkAttributes extends StencilHTMLAttributes {
    /**
    * Determines whether or not the link is disabled.
    */
    'disabled'?: boolean;
    /**
    * Defines the text to be displayed in your link.
    */
    'link'?: string;
    /**
    * Default setting is `internal`. Set to `external` adds an underline to the link, and opens the link in a new web browser tab.
    */
    'type'?: 'internal' | 'external';
    /**
    * Defines the url the user should get redirected to when clicking on the link.
    */
    'url'?: string;
  }

  interface SeListGroup {
    /**
    * Define if item group is collapsed/closed.
    */
    'collapsed': boolean;
    /**
    * Define description of the item. placed under the title of the item.
    */
    'description': string;
    /**
    * Place an icon on the left side of the item list.
    */
    'icon': string;
    /**
    * Optional property to define the color of the icon. The default color will be inherited from it's parent. `primary` is a green color. `accent` is a blue color. `warn` is an orange color. `error` is a red color.
    */
    'iconColor': "primary" | "accent" | "warn" | "error";
    /**
    * Define the group indentation to add paddings to the list item (used when multiple list group)
    */
    'indentation': number;
    /**
    * Define if the list element should be selected or not
    */
    'itemTitle': string;
    /**
    * Define the them of the list. This them will be handled and modified by the parent element
    */
    'mode': "nav" | "classic";
    /**
    * Define if the list element should be selected or not
    */
    'selected': boolean;
  }
  interface SeListGroupAttributes extends StencilHTMLAttributes {
    /**
    * Define if item group is collapsed/closed.
    */
    'collapsed'?: boolean;
    /**
    * Define description of the item. placed under the title of the item.
    */
    'description'?: string;
    /**
    * Place an icon on the left side of the item list.
    */
    'icon'?: string;
    /**
    * Optional property to define the color of the icon. The default color will be inherited from it's parent. `primary` is a green color. `accent` is a blue color. `warn` is an orange color. `error` is a red color.
    */
    'iconColor'?: "primary" | "accent" | "warn" | "error";
    /**
    * Define the group indentation to add paddings to the list item (used when multiple list group)
    */
    'indentation'?: number;
    /**
    * Define if the list element should be selected or not
    */
    'itemTitle'?: string;
    /**
    * Define the them of the list. This them will be handled and modified by the parent element
    */
    'mode'?: "nav" | "classic";
    /**
    * Define if the list element should be selected or not
    */
    'selected'?: boolean;
  }

  interface SeListItem {
    /**
    * Define if item group is collapsed/closed. update the icon to change from `up` to `down`. Used by `se-item-group`.
    */
    'collapsed': boolean;
    /**
    * Define if the item should behave as a an collapsible (used by `se-item-group`)
    */
    'collapsible': boolean;
    /**
    * Define description of the item. placed under the title of the item.
    */
    'description': string;
    /**
    * Place an icon on the left side of the item list.
    */
    'icon': string;
    /**
    * Optional property to define the color of the icon. The default color will be inherited from it's parent. `primary` is a green color. `accent` is a blue color. `warn` is an orange color. `error` is a red color.
    */
    'iconColor': 'primary' | 'accent' | 'warn' | 'error';
    /**
    * Define the group indentation to add paddings to the list item (used when multiple list group)
    */
    'indentation': number;
    /**
    * Define if the list element should be selected or not
    */
    'itemTitle': string;
    /**
    * Define the them of the list. This them will be handled and modified by the parent element
    */
    'mode': 'nav' | 'classic';
    /**
    * Define if the list element should be selected or not
    */
    'selected': boolean;
  }
  interface SeListItemAttributes extends StencilHTMLAttributes {
    /**
    * Define if item group is collapsed/closed. update the icon to change from `up` to `down`. Used by `se-item-group`.
    */
    'collapsed'?: boolean;
    /**
    * Define if the item should behave as a an collapsible (used by `se-item-group`)
    */
    'collapsible'?: boolean;
    /**
    * Define description of the item. placed under the title of the item.
    */
    'description'?: string;
    /**
    * Place an icon on the left side of the item list.
    */
    'icon'?: string;
    /**
    * Optional property to define the color of the icon. The default color will be inherited from it's parent. `primary` is a green color. `accent` is a blue color. `warn` is an orange color. `error` is a red color.
    */
    'iconColor'?: 'primary' | 'accent' | 'warn' | 'error';
    /**
    * Define the group indentation to add paddings to the list item (used when multiple list group)
    */
    'indentation'?: number;
    /**
    * Define if the list element should be selected or not
    */
    'itemTitle'?: string;
    /**
    * Define the them of the list. This them will be handled and modified by the parent element
    */
    'mode'?: 'nav' | 'classic';
    /**
    * Define if the list element should be selected or not
    */
    'selected'?: boolean;
  }

  interface SeList {
    /**
    * Define the style of the list
    */
    'mode': "nav" | "classic";
  }
  interface SeListAttributes extends StencilHTMLAttributes {
    /**
    * Define the style of the list
    */
    'mode'?: "nav" | "classic";
  }

  interface SeNavbar {
    'color': 'primary' | 'secondary' | 'tab';
  }
  interface SeNavbarAttributes extends StencilHTMLAttributes {
    'color'?: 'primary' | 'secondary' | 'tab';
  }

  interface SeRadioOnOff {
    /**
    * Optional property that defines if the radio on/off switch is disabled.  Set to `false` by default.
    */
    'disabled': boolean;
    /**
    * Defines the visual appearance of the on/off radio switch. `default` is the default mode. Use `header` if the on/off radio switch is within a header element to reduce its visual height.
    */
    'mode': 'default' | 'header';
    /**
    * Defines the text the user will see for the "off" or "inactive" part of the radio switch.
    */
    'textOff': string;
    /**
    * Defines the text the user will see for the "on" or "active" part of the radio switch.
    */
    'textOn': string;
  }
  interface SeRadioOnOffAttributes extends StencilHTMLAttributes {
    /**
    * Optional property that defines if the radio on/off switch is disabled.  Set to `false` by default.
    */
    'disabled'?: boolean;
    /**
    * Defines the visual appearance of the on/off radio switch. `default` is the default mode. Use `header` if the on/off radio switch is within a header element to reduce its visual height.
    */
    'mode'?: 'default' | 'header';
    /**
    * Passes the current state (true or false) to the parent component when clicking on a button in the group.
    */
    'onChange'?: (event: CustomEvent<any>) => void;
    /**
    * Defines the text the user will see for the "off" or "inactive" part of the radio switch.
    */
    'textOff'?: string;
    /**
    * Defines the text the user will see for the "on" or "active" part of the radio switch.
    */
    'textOn'?: string;
  }

  interface SeSidenavItem {
    /**
    * Defines if the tab is active or not.
    */
    'active': boolean;
    /**
    * Define the title of the tab
    */
    'itemTitle': string;
    'setActive': () => Promise<void>;
  }
  interface SeSidenavItemAttributes extends StencilHTMLAttributes {
    /**
    * Defines if the tab is active or not.
    */
    'active'?: boolean;
    /**
    * Define the title of the tab
    */
    'itemTitle'?: string;
  }

  interface SeSidenav {
    'toggle': () => void;
  }
  interface SeSidenavAttributes extends StencilHTMLAttributes {}

  interface SeWidgetContent {
    'mode': 'fill';
  }
  interface SeWidgetContentAttributes extends StencilHTMLAttributes {
    'mode'?: 'fill';
  }

  interface SeWidgetFooter {}
  interface SeWidgetFooterAttributes extends StencilHTMLAttributes {}

  interface SeWidgetHeader {}
  interface SeWidgetHeaderAttributes extends StencilHTMLAttributes {}

  interface SeWidget {
    /**
    * Define a specific height of a widget. useful to create easy layout under `se-container` which use `flex` by default.
    */
    'height': string;
    /**
    * Define the mode of a widget. The default widget gives a small padding of the widget. `fill` will remove any spacing.
    */
    'mode': "fill";
    /**
    * Define a specific width of a widget. useful to create easy layout under `se-container` which use `flex` by default.
    */
    'width': string;
  }
  interface SeWidgetAttributes extends StencilHTMLAttributes {
    /**
    * Define a specific height of a widget. useful to create easy layout under `se-container` which use `flex` by default.
    */
    'height'?: string;
    /**
    * Define the mode of a widget. The default widget gives a small padding of the widget. `fill` will remove any spacing.
    */
    'mode'?: "fill";
    /**
    * Define a specific width of a widget. useful to create easy layout under `se-container` which use `flex` by default.
    */
    'width'?: string;
  }
}

declare global {
  interface StencilElementInterfaces {
    'SeApp': Components.SeApp;
    'SeButton': Components.SeButton;
    'SeButtons': Components.SeButtons;
    'SeCheckbox': Components.SeCheckbox;
    'SeChip': Components.SeChip;
    'SeContainer': Components.SeContainer;
    'SeDivider': Components.SeDivider;
    'SeFormField': Components.SeFormField;
    'SeHeader': Components.SeHeader;
    'SeIconEcostruxure': Components.SeIconEcostruxure;
    'SeIconSchneider': Components.SeIconSchneider;
    'SeIcon': Components.SeIcon;
    'SeLabel': Components.SeLabel;
    'SeLink': Components.SeLink;
    'SeListGroup': Components.SeListGroup;
    'SeListItem': Components.SeListItem;
    'SeList': Components.SeList;
    'SeNavbar': Components.SeNavbar;
    'SeRadioOnOff': Components.SeRadioOnOff;
    'SeSidenavItem': Components.SeSidenavItem;
    'SeSidenav': Components.SeSidenav;
    'SeWidgetContent': Components.SeWidgetContent;
    'SeWidgetFooter': Components.SeWidgetFooter;
    'SeWidgetHeader': Components.SeWidgetHeader;
    'SeWidget': Components.SeWidget;
  }

  interface StencilIntrinsicElements {
    'se-app': Components.SeAppAttributes;
    'se-button': Components.SeButtonAttributes;
    'se-buttons': Components.SeButtonsAttributes;
    'se-checkbox': Components.SeCheckboxAttributes;
    'se-chip': Components.SeChipAttributes;
    'se-container': Components.SeContainerAttributes;
    'se-divider': Components.SeDividerAttributes;
    'se-form-field': Components.SeFormFieldAttributes;
    'se-header': Components.SeHeaderAttributes;
    'se-icon-ecostruxure': Components.SeIconEcostruxureAttributes;
    'se-icon-schneider': Components.SeIconSchneiderAttributes;
    'se-icon': Components.SeIconAttributes;
    'se-label': Components.SeLabelAttributes;
    'se-link': Components.SeLinkAttributes;
    'se-list-group': Components.SeListGroupAttributes;
    'se-list-item': Components.SeListItemAttributes;
    'se-list': Components.SeListAttributes;
    'se-navbar': Components.SeNavbarAttributes;
    'se-radio-on-off': Components.SeRadioOnOffAttributes;
    'se-sidenav-item': Components.SeSidenavItemAttributes;
    'se-sidenav': Components.SeSidenavAttributes;
    'se-widget-content': Components.SeWidgetContentAttributes;
    'se-widget-footer': Components.SeWidgetFooterAttributes;
    'se-widget-header': Components.SeWidgetHeaderAttributes;
    'se-widget': Components.SeWidgetAttributes;
  }


  interface HTMLSeAppElement extends Components.SeApp, HTMLStencilElement {}
  var HTMLSeAppElement: {
    prototype: HTMLSeAppElement;
    new (): HTMLSeAppElement;
  };

  interface HTMLSeButtonElement extends Components.SeButton, HTMLStencilElement {}
  var HTMLSeButtonElement: {
    prototype: HTMLSeButtonElement;
    new (): HTMLSeButtonElement;
  };

  interface HTMLSeButtonsElement extends Components.SeButtons, HTMLStencilElement {}
  var HTMLSeButtonsElement: {
    prototype: HTMLSeButtonsElement;
    new (): HTMLSeButtonsElement;
  };

  interface HTMLSeCheckboxElement extends Components.SeCheckbox, HTMLStencilElement {}
  var HTMLSeCheckboxElement: {
    prototype: HTMLSeCheckboxElement;
    new (): HTMLSeCheckboxElement;
  };

  interface HTMLSeChipElement extends Components.SeChip, HTMLStencilElement {}
  var HTMLSeChipElement: {
    prototype: HTMLSeChipElement;
    new (): HTMLSeChipElement;
  };

  interface HTMLSeContainerElement extends Components.SeContainer, HTMLStencilElement {}
  var HTMLSeContainerElement: {
    prototype: HTMLSeContainerElement;
    new (): HTMLSeContainerElement;
  };

  interface HTMLSeDividerElement extends Components.SeDivider, HTMLStencilElement {}
  var HTMLSeDividerElement: {
    prototype: HTMLSeDividerElement;
    new (): HTMLSeDividerElement;
  };

  interface HTMLSeFormFieldElement extends Components.SeFormField, HTMLStencilElement {}
  var HTMLSeFormFieldElement: {
    prototype: HTMLSeFormFieldElement;
    new (): HTMLSeFormFieldElement;
  };

  interface HTMLSeHeaderElement extends Components.SeHeader, HTMLStencilElement {}
  var HTMLSeHeaderElement: {
    prototype: HTMLSeHeaderElement;
    new (): HTMLSeHeaderElement;
  };

  interface HTMLSeIconEcostruxureElement extends Components.SeIconEcostruxure, HTMLStencilElement {}
  var HTMLSeIconEcostruxureElement: {
    prototype: HTMLSeIconEcostruxureElement;
    new (): HTMLSeIconEcostruxureElement;
  };

  interface HTMLSeIconSchneiderElement extends Components.SeIconSchneider, HTMLStencilElement {}
  var HTMLSeIconSchneiderElement: {
    prototype: HTMLSeIconSchneiderElement;
    new (): HTMLSeIconSchneiderElement;
  };

  interface HTMLSeIconElement extends Components.SeIcon, HTMLStencilElement {}
  var HTMLSeIconElement: {
    prototype: HTMLSeIconElement;
    new (): HTMLSeIconElement;
  };

  interface HTMLSeLabelElement extends Components.SeLabel, HTMLStencilElement {}
  var HTMLSeLabelElement: {
    prototype: HTMLSeLabelElement;
    new (): HTMLSeLabelElement;
  };

  interface HTMLSeLinkElement extends Components.SeLink, HTMLStencilElement {}
  var HTMLSeLinkElement: {
    prototype: HTMLSeLinkElement;
    new (): HTMLSeLinkElement;
  };

  interface HTMLSeListGroupElement extends Components.SeListGroup, HTMLStencilElement {}
  var HTMLSeListGroupElement: {
    prototype: HTMLSeListGroupElement;
    new (): HTMLSeListGroupElement;
  };

  interface HTMLSeListItemElement extends Components.SeListItem, HTMLStencilElement {}
  var HTMLSeListItemElement: {
    prototype: HTMLSeListItemElement;
    new (): HTMLSeListItemElement;
  };

  interface HTMLSeListElement extends Components.SeList, HTMLStencilElement {}
  var HTMLSeListElement: {
    prototype: HTMLSeListElement;
    new (): HTMLSeListElement;
  };

  interface HTMLSeNavbarElement extends Components.SeNavbar, HTMLStencilElement {}
  var HTMLSeNavbarElement: {
    prototype: HTMLSeNavbarElement;
    new (): HTMLSeNavbarElement;
  };

  interface HTMLSeRadioOnOffElement extends Components.SeRadioOnOff, HTMLStencilElement {}
  var HTMLSeRadioOnOffElement: {
    prototype: HTMLSeRadioOnOffElement;
    new (): HTMLSeRadioOnOffElement;
  };

  interface HTMLSeSidenavItemElement extends Components.SeSidenavItem, HTMLStencilElement {}
  var HTMLSeSidenavItemElement: {
    prototype: HTMLSeSidenavItemElement;
    new (): HTMLSeSidenavItemElement;
  };

  interface HTMLSeSidenavElement extends Components.SeSidenav, HTMLStencilElement {}
  var HTMLSeSidenavElement: {
    prototype: HTMLSeSidenavElement;
    new (): HTMLSeSidenavElement;
  };

  interface HTMLSeWidgetContentElement extends Components.SeWidgetContent, HTMLStencilElement {}
  var HTMLSeWidgetContentElement: {
    prototype: HTMLSeWidgetContentElement;
    new (): HTMLSeWidgetContentElement;
  };

  interface HTMLSeWidgetFooterElement extends Components.SeWidgetFooter, HTMLStencilElement {}
  var HTMLSeWidgetFooterElement: {
    prototype: HTMLSeWidgetFooterElement;
    new (): HTMLSeWidgetFooterElement;
  };

  interface HTMLSeWidgetHeaderElement extends Components.SeWidgetHeader, HTMLStencilElement {}
  var HTMLSeWidgetHeaderElement: {
    prototype: HTMLSeWidgetHeaderElement;
    new (): HTMLSeWidgetHeaderElement;
  };

  interface HTMLSeWidgetElement extends Components.SeWidget, HTMLStencilElement {}
  var HTMLSeWidgetElement: {
    prototype: HTMLSeWidgetElement;
    new (): HTMLSeWidgetElement;
  };

  interface HTMLElementTagNameMap {
    'se-app': HTMLSeAppElement
    'se-button': HTMLSeButtonElement
    'se-buttons': HTMLSeButtonsElement
    'se-checkbox': HTMLSeCheckboxElement
    'se-chip': HTMLSeChipElement
    'se-container': HTMLSeContainerElement
    'se-divider': HTMLSeDividerElement
    'se-form-field': HTMLSeFormFieldElement
    'se-header': HTMLSeHeaderElement
    'se-icon-ecostruxure': HTMLSeIconEcostruxureElement
    'se-icon-schneider': HTMLSeIconSchneiderElement
    'se-icon': HTMLSeIconElement
    'se-label': HTMLSeLabelElement
    'se-link': HTMLSeLinkElement
    'se-list-group': HTMLSeListGroupElement
    'se-list-item': HTMLSeListItemElement
    'se-list': HTMLSeListElement
    'se-navbar': HTMLSeNavbarElement
    'se-radio-on-off': HTMLSeRadioOnOffElement
    'se-sidenav-item': HTMLSeSidenavItemElement
    'se-sidenav': HTMLSeSidenavElement
    'se-widget-content': HTMLSeWidgetContentElement
    'se-widget-footer': HTMLSeWidgetFooterElement
    'se-widget-header': HTMLSeWidgetHeaderElement
    'se-widget': HTMLSeWidgetElement
  }

  interface ElementTagNameMap {
    'se-app': HTMLSeAppElement;
    'se-button': HTMLSeButtonElement;
    'se-buttons': HTMLSeButtonsElement;
    'se-checkbox': HTMLSeCheckboxElement;
    'se-chip': HTMLSeChipElement;
    'se-container': HTMLSeContainerElement;
    'se-divider': HTMLSeDividerElement;
    'se-form-field': HTMLSeFormFieldElement;
    'se-header': HTMLSeHeaderElement;
    'se-icon-ecostruxure': HTMLSeIconEcostruxureElement;
    'se-icon-schneider': HTMLSeIconSchneiderElement;
    'se-icon': HTMLSeIconElement;
    'se-label': HTMLSeLabelElement;
    'se-link': HTMLSeLinkElement;
    'se-list-group': HTMLSeListGroupElement;
    'se-list-item': HTMLSeListItemElement;
    'se-list': HTMLSeListElement;
    'se-navbar': HTMLSeNavbarElement;
    'se-radio-on-off': HTMLSeRadioOnOffElement;
    'se-sidenav-item': HTMLSeSidenavItemElement;
    'se-sidenav': HTMLSeSidenavElement;
    'se-widget-content': HTMLSeWidgetContentElement;
    'se-widget-footer': HTMLSeWidgetFooterElement;
    'se-widget-header': HTMLSeWidgetHeaderElement;
    'se-widget': HTMLSeWidgetElement;
  }


  export namespace JSX {
    export interface Element {}
    export interface IntrinsicElements extends StencilIntrinsicElements {
      [tagName: string]: any;
    }
  }
  export interface HTMLAttributes extends StencilHTMLAttributes {}

}
