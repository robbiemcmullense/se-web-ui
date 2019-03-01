import { TestWindow } from '@stencil/core/testing';
import { About } from './about';

describe('about', () => {
  it('should build', () => {
    expect(new About()).toBeTruthy();
  });

  describe('rendering', () => {
    let element: HTMLAboutElement;
    let testWindow: TestWindow;
    beforeEach(async () => {
      testWindow = new TestWindow();
      element = await testWindow.load({
        components: [About],
        html: '<about></about>'
      });
    });

    // See https://stenciljs.com/docs/unit-testing
    {cursor}

  });
});
