import { TestWindow } from '@stencil/core/testing';
import { Icon } from './icon';

describe('se-icon', () => {
  it('should build', () => {
    expect(new Icon()).toBeTruthy();
  });

  describe('rendering', () => {
    let element: HTMLIconElement;
    let testWindow: TestWindow;
    beforeEach(async () => {
      testWindow = new TestWindow();
      element = await testWindow.load({
        components: [Icon],
        html: '<se-icon></se-icon>'
      });
    });

    // See https://stenciljs.com/docs/unit-testing
    {cursor}

  });
});
