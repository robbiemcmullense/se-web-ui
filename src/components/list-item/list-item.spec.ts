import { TestWindow } from '@stencil/core/testing';
import { ListItem } from './list-item';

describe('list-item', () => {
  it('should build', () => {
    expect(new ListItem()).toBeTruthy();
  });

  describe('rendering', () => {
    let element: HTMLListItemElement;
    let testWindow: TestWindow;
    beforeEach(async () => {
      testWindow = new TestWindow();
      element = await testWindow.load({
        components: [ListItem],
        html: '<list-item></list-item>'
      });
    });

    // See https://stenciljs.com/docs/unit-testing
    {cursor}

  });
});
