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

  it('should set opened to true when calling the open method', () => {
    dropdown.open = true;
    dropdown.close();
    expect(dropdown.opened).toBeFalsy();
  });

  it('should render', async() => {
    const page = await newSpecPage({
      components: [DropdownComponent],
      html: `<se-dropdown></se-dropdown>`,
    });
    expect(page.root).toEqualHtml(`
      <se-dropdown>
        <mock:shadow-root>
          <div class="left se-dropdown">
            <div aria-haspopup="true" aria-expanded="false">
              <slot name="trigger"></slot>
            </div>
            <div class="dropdown-content">
              <slot></slot>
            </div>
          </div>
        </mock:shadow-root>
      </se-dropdown>
    `);
  });

  it('should call the _toggle function when a click occurs and the dropdown is open', async() => {
    dropdown.opened = true;
    const event = {stopPropagation: () => {}};
		const eventSpy = jest.spyOn(dropdown, '_toggle');
		dropdown.handleClick(event);
		expect(eventSpy).toHaveBeenCalled();
  });
  
  it('should call the _toggle function when a touchstart occurs and the dropdown is open', async() => {
    dropdown.opened = true;
    const event = {stopPropagation: () => {}};
		const eventSpy = jest.spyOn(dropdown, '_toggle');
		dropdown.handleTouchstart(event);
		expect(eventSpy).toHaveBeenCalled();
	});
});
