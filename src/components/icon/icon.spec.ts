import { TestWindow } from '@stencil/core/testing';
import { IconComponent } from './icon';

describe('se-icon', () => {
  let icon;
  it('should build', () => {
    icon = new IconComponent();
    expect(icon).toBeTruthy();
  });

  describe('rendering', () => {
    let element: HTMLIconElement;
    let testWindow: TestWindow;
    beforeEach(async () => {
      testWindow = new TestWindow();
      element = await testWindow.load({
        components: [IconComponent],
        html: '<se-icon></se-icon>'
      });
    });
  });
});
