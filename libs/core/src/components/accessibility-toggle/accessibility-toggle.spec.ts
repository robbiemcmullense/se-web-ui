import { AccessibilityToggleComponent } from './accessibility-toggle';
import { newSpecPage } from '@stencil/core/testing';

describe('AccessibilityToggleComponent', () => {
  let accessibilityToggle;

  beforeEach(() => {
    accessibilityToggle = new AccessibilityToggleComponent();
  });

  it('should build', () => {
    expect(accessibilityToggle).toBeTruthy();
  });

  it('should have default properties', () => {
    expect(accessibilityToggle.selected).toBeFalsy();
    expect(accessibilityToggle.labelModeOn).toEqual('Accessibility mode on');
    expect(accessibilityToggle.labelModeOff).toEqual('Accessibility mode off');
  });

  it('should have label value as "Accessibility mode off" when selected property is false', async () => {
    const page = await newSpecPage({
      components: [AccessibilityToggleComponent],
      html: `<se-accessibility-toggle selected=false></se-accessibility-toggle>`,
    });
    expect(page.root.shadowRoot.querySelector('label')).toEqual('Accessibility mode off');
  });

  it('should have label value as "Accessibility mode on" when selected property is true', async () => {
    const page = await newSpecPage({
      components: [AccessibilityToggleComponent],
      html: `<se-accessibility-toggle selected=true></se-accessibility-toggle>`,
    });
    expect(page.root.shadowRoot.querySelector('label')).toEqual('Accessibility mode on');
  });

  it('should have label set to custom labelModeOff value when selected property is false', async () => {
    const page = await newSpecPage({
      components: [AccessibilityToggleComponent],
      html: `<se-accessibility-toggle selected=false label-mode-off="Off"></se-accessibility-toggle>`,
    });
    expect(page.root.shadowRoot.querySelector('label')).toEqual('Off');
  });

  it('should have label set to custom labelModeOn value when selected property is true', async () => {
    const page = await newSpecPage({
      components: [AccessibilityToggleComponent],
      html: `<se-accessibility-toggle selected=true label-mode-on="On"></se-accessibility-toggle>`,
    });
    expect(page.root.shadowRoot.querySelector('label')).toEqual('On');
  });

  it('should emit the didChange event when the Accessibility Toggle is clicked', () => {
    const eventSpy = jest.spyOn(accessibilityToggle.didChange, 'emit');
    accessibilityToggle.onClickHandler(); // user clicks on the button
    expect(eventSpy).toHaveBeenCalled();
  });
});
