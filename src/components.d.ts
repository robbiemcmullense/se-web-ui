/* tslint:disable */
/**
 * This is an autogenerated file created by the Stencil compiler.
 * It contains typing information for all components that exist in this project.
 */


import '@stencil/core';




export namespace Components {

  interface SeApp {}
  interface SeAppAttributes extends StencilHTMLAttributes {}

  interface SeButton {}
  interface SeButtonAttributes extends StencilHTMLAttributes {}

  interface SeHeader {
    /**
    * Title of the application
    */
    'appTitle': string;
  }
  interface SeHeaderAttributes extends StencilHTMLAttributes {
    /**
    * Title of the application
    */
    'appTitle'?: string;
  }

  interface SeIconEcostruxure {}
  interface SeIconEcostruxureAttributes extends StencilHTMLAttributes {}

  interface SeIconSchneider {}
  interface SeIconSchneiderAttributes extends StencilHTMLAttributes {}

  interface SeNavbar {
    'color': 'primary' | 'secondary' | 'tab';
  }
  interface SeNavbarAttributes extends StencilHTMLAttributes {
    'color'?: 'primary' | 'secondary' | 'tab';
  }

  interface SeSwitchOnOff {
    'active': string;
    'inactive': string;
  }
  interface SeSwitchOnOffAttributes extends StencilHTMLAttributes {
    'active'?: string;
    'inactive'?: string;
    'onHasChanged'?: (event: CustomEvent<any>) => void;
  }

  interface SeWidgetContainer {}
  interface SeWidgetContainerAttributes extends StencilHTMLAttributes {}

  interface SeWidgetContent {}
  interface SeWidgetContentAttributes extends StencilHTMLAttributes {}

  interface SeWidgetFooter {}
  interface SeWidgetFooterAttributes extends StencilHTMLAttributes {}

  interface SeWidgetHeader {}
  interface SeWidgetHeaderAttributes extends StencilHTMLAttributes {}

  interface SeWidget {}
  interface SeWidgetAttributes extends StencilHTMLAttributes {}
}

declare global {
  interface StencilElementInterfaces {
    'SeApp': Components.SeApp;
    'SeButton': Components.SeButton;
    'SeHeader': Components.SeHeader;
    'SeIconEcostruxure': Components.SeIconEcostruxure;
    'SeIconSchneider': Components.SeIconSchneider;
    'SeNavbar': Components.SeNavbar;
    'SeSwitchOnOff': Components.SeSwitchOnOff;
    'SeWidgetContainer': Components.SeWidgetContainer;
    'SeWidgetContent': Components.SeWidgetContent;
    'SeWidgetFooter': Components.SeWidgetFooter;
    'SeWidgetHeader': Components.SeWidgetHeader;
    'SeWidget': Components.SeWidget;
  }

  interface StencilIntrinsicElements {
    'se-app': Components.SeAppAttributes;
    'se-button': Components.SeButtonAttributes;
    'se-header': Components.SeHeaderAttributes;
    'se-icon-ecostruxure': Components.SeIconEcostruxureAttributes;
    'se-icon-schneider': Components.SeIconSchneiderAttributes;
    'se-navbar': Components.SeNavbarAttributes;
    'se-switch-on-off': Components.SeSwitchOnOffAttributes;
    'se-widget-container': Components.SeWidgetContainerAttributes;
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

  interface HTMLSeNavbarElement extends Components.SeNavbar, HTMLStencilElement {}
  var HTMLSeNavbarElement: {
    prototype: HTMLSeNavbarElement;
    new (): HTMLSeNavbarElement;
  };

  interface HTMLSeSwitchOnOffElement extends Components.SeSwitchOnOff, HTMLStencilElement {}
  var HTMLSeSwitchOnOffElement: {
    prototype: HTMLSeSwitchOnOffElement;
    new (): HTMLSeSwitchOnOffElement;
  };

  interface HTMLSeWidgetContainerElement extends Components.SeWidgetContainer, HTMLStencilElement {}
  var HTMLSeWidgetContainerElement: {
    prototype: HTMLSeWidgetContainerElement;
    new (): HTMLSeWidgetContainerElement;
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
    'se-header': HTMLSeHeaderElement
    'se-icon-ecostruxure': HTMLSeIconEcostruxureElement
    'se-icon-schneider': HTMLSeIconSchneiderElement
    'se-navbar': HTMLSeNavbarElement
    'se-switch-on-off': HTMLSeSwitchOnOffElement
    'se-widget-container': HTMLSeWidgetContainerElement
    'se-widget-content': HTMLSeWidgetContentElement
    'se-widget-footer': HTMLSeWidgetFooterElement
    'se-widget-header': HTMLSeWidgetHeaderElement
    'se-widget': HTMLSeWidgetElement
  }

  interface ElementTagNameMap {
    'se-app': HTMLSeAppElement;
    'se-button': HTMLSeButtonElement;
    'se-header': HTMLSeHeaderElement;
    'se-icon-ecostruxure': HTMLSeIconEcostruxureElement;
    'se-icon-schneider': HTMLSeIconSchneiderElement;
    'se-navbar': HTMLSeNavbarElement;
    'se-switch-on-off': HTMLSeSwitchOnOffElement;
    'se-widget-container': HTMLSeWidgetContainerElement;
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
