import { TestWindow } from '@stencil/core/testing';
import { DropdownItem } from './dropdown-item';

describe('dropdown-item', () => {
  it('should build', () => {
    expect(new DropdownItem()).toBeTruthy();
  });

  describe('rendering', () => {
    let element: HTMLDropdownItemElement;
    let testWindow: TestWindow;
    beforeEach(async () => {
      testWindow = new TestWindow();
      element = await testWindow.load({
        components: [DropdownItem],
        html: '<se-dropdown-item></se-dropdown-item>'
      });
    });

    // See https://stenciljs.com/docs/unit-testing
  });
});
