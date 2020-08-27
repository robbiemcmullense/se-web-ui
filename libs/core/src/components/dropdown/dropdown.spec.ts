import { DropdownComponent } from './dropdown';
import { newSpecPage } from '@stencil/core/testing';

describe('DropdownComponent', () => {
  let dropdown;

  beforeEach(() => {
    dropdown = new DropdownComponent();
  });

  it('should build', () => {
    expect(dropdown).toBeTruthy();
  });

  it('should be left aligned by default', () => {
    expect(dropdown.alignment).toEqual('left');
  });

  it('should not be open when loaded', () => {
    expect(dropdown.opened).toBeFalsy();
  });

  it('should set opened to true when calling the open method', () => {
    dropdown.open();
    expect(dropdown.opened).toBeTruthy();
  });

  it('should render, with a se-dropdown class', async () => {
    const page = await newSpecPage({
      components: [DropdownComponent],
      html: `<se-dropdown></se-dropdown>`,
    });
    expect(page.root.shadowRoot.querySelector('.se-dropdown')).toBeTruthy();
  });

  it('should call the close function when a click occurs and the dropdown is open, closing the dropdown', async () => {
    dropdown.opened = true;
    const event = { stopPropagation: jest.fn() };
    const eventSpy = jest.spyOn(dropdown, 'close');
    dropdown.handleClick(event); // user clicks outside the dropdown menu or trigger element
    expect(eventSpy).toHaveBeenCalled();
    expect(dropdown.opened).toBeFalsy();
  });

  it('should call the close function when a touchstart occurs and the dropdown is open', async () => {
    dropdown.opened = true;
    const event = { stopPropagation: jest.fn() };
    const eventSpy = jest.spyOn(dropdown, 'close');
    dropdown.handleTouchstart(event); // touchscreen user touches screen outside the dropdown menu or trigger element
    expect(eventSpy).toHaveBeenCalled();
    expect(dropdown.opened).toBeFalsy();
  });

  it('should emit the didOpen event when the toggle function is called and the dropdown closed', () => {
    const eventSpy = jest.spyOn(dropdown.didOpen, 'emit');
    const event = { stopPropagation: jest.fn() };
    dropdown._toggle(event); // user clicks on element that triggers dropdown open
    expect(eventSpy).toHaveBeenCalled();
  });

  it('should emit the didClose event when the toggle function is called and the dropdown open', () => {
    dropdown.opened = true;
    const eventSpy = jest.spyOn(dropdown.didClose, 'emit');
    const event = { stopPropagation: jest.fn() };
    dropdown._toggle(event); // user clicks on element that triggers dropdown close
    expect(eventSpy).toHaveBeenCalled();
  });
});
