import { CheckboxComponent } from './checkbox';
import { newSpecPage } from '@stencil/core/testing';

describe('CheckboxComponent', () => {
  let checkbox;

  beforeEach(() => {
    checkbox = new CheckboxComponent();
  });

  it('should create a checkbox component', () => {
    expect(checkbox).toBeTruthy();
  });

  it('should have the checkbox option by default', () => {
    expect(checkbox.option).toEqual('checkbox');
  });

  it('should have its color set to "primary" by default', () => {
    expect(checkbox.color).toEqual('success');
  });

  it('should not be disabled by default', () => {
    expect(checkbox.disabled).toBeFalsy();
  });

  it('should not be selected by default', () => {
    expect(checkbox.selected).toBeFalsy();
  });

  it('should not be required by default', () => {
    expect(checkbox.required).toBeFalsy();
  });

  it('should set required to true when the setRequired method is called', () => {
    checkbox.setRequired();
    expect(checkbox.required).toBeTruthy();
  });

  it('should have textOn and textOff values equal to "ON" and "OFF" initially', () => {
    expect(checkbox.textOn).toEqual('ON');
    expect(checkbox.textOff).toEqual('OFF');
  });

  it('should have a header value equal to false initially', () => {
    expect(checkbox.header).toBeFalsy();
  });

  it('should render in checkbox mode by default with an input element, and the label right-positioned', async () => {
    const page = await newSpecPage({
      components: [CheckboxComponent],
      html: `<se-checkbox label="my label" required="true"></se-checkbox>`,
    });
    expect(page.root.shadowRoot.querySelector('input')).toBeTruthy();
    expect(page.root.shadowRoot.querySelector('.label-right')).toBeTruthy();
  });

  it('should render "value" property as an input attribute', async () => {
    const page = await newSpecPage({
      components: [CheckboxComponent],
      html: `<se-checkbox value="my value"></se-checkbox>`,
    });
    expect(
      page.root.shadowRoot.querySelector('input').getAttribute('value')
    ).toBe('my value');
  });

  it('should render in switch mode with a .label class, and the label left-positioned', async () => {
    const page = await newSpecPage({
      components: [CheckboxComponent],
      html: `<se-checkbox option="switch" label="my label"></se-checkbox>`,
    });
    expect(page.root.shadowRoot.querySelector('.label-wrap')).toBeTruthy();
    expect(page.root.shadowRoot.querySelector('.label-left')).toBeTruthy();
  });

  it('should render with a required asterisk', async () => {
    const page = await newSpecPage({
      components: [CheckboxComponent],
      html: `<se-checkbox option="switch" label="my label" required="true"></se-checkbox>`,
    });
    expect(page.root.shadowRoot.querySelector('.required')).toBeTruthy();
  });

  it('should render in onoff mode with a .on-off-wrapper class', async () => {
    const page = await newSpecPage({
      components: [CheckboxComponent],
      html: `<se-checkbox option="onoff"></se-checkbox>`,
    });
    expect(page.root.shadowRoot.querySelector('.on-off-wrapper')).toBeTruthy();
  });

  it('should call the setElementId function when the component loads, and set label-pos to right by default', async () => {
    checkbox.componentWillLoad();
    expect(checkbox.labelPos).toEqual('right');
  });

  it('should set label-pos to left when option is set to switch', async () => {
    checkbox.option = 'switch';
    checkbox.componentWillLoad();
    expect(checkbox.labelPos).toEqual('left');
  });

  it('should assign an id to the button elements with the wc prefix when the host element has an id and the option is set to onoff', async () => {
    const page = await newSpecPage({
      components: [CheckboxComponent],
      html: `<se-checkbox option="onoff" id="onoff-id" label="my label" required="true"></se-checkbox>`,
    });
    expect(
      page.root.shadowRoot.querySelector('#wc-onoff-id-active')
    ).toBeTruthy();
    expect(
      page.root.shadowRoot.querySelector('#wc-onoff-id-inactive')
    ).toBeTruthy();
  });

  it('should emit the didChange event when the handleClick function is executed', async () => {
    const eventSpy = jest.spyOn(checkbox.didChange, 'emit');
    checkbox.handleClick(); // user clicks on the checkbox
    expect(eventSpy).toHaveBeenCalled();
  });

  it('should not emit the didChange event when the checkbox is disabled', async () => {
    const eventSpy = jest.spyOn(checkbox.didChange, 'emit');
    checkbox.disabled = true;
    checkbox.handleClick(); // user clicks on the checkbox
    expect(eventSpy).not.toHaveBeenCalled();
  });
});
