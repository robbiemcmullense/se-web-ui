import { TestWindow } from '@stencil/core/testing';
import { List } from './list';

describe('list', () => {
  it('should build', () => {
    expect(new List()).toBeTruthy();
  });

  describe('rendering', () => {
    let element: HTMLListElement;
    let testWindow: TestWindow;
    beforeEach(async () => {
      testWindow = new TestWindow();
      element = await testWindow.load({
        components: [List],
        html: '<se-list></se-list>'
      });
    });

    // See https://stenciljs.com/docs/unit-testing
    {cursor}

  });
});
