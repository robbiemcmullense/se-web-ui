import { TestWindow } from '@stencil/core/testing';
import { Divider } from './divider';

describe('divider', () => {
  it('should build', () => {
    expect(new Divider()).toBeTruthy();
  });

  describe('rendering', () => {
    let element: HTMLDividerElement;
    let testWindow: TestWindow;
    beforeEach(async () => {
      testWindow = new TestWindow();
      element = await testWindow.load({
        components: [Divider],
        html: '<divider></divider>'
      });
    });

    // See https://stenciljs.com/docs/unit-testing
    {cursor}

  });
});
