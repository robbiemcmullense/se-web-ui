import { TestWindow } from '@stencil/core/testing';
import { ListGroup } from './list-group';

describe('list-group', () => {
  it('should build', () => {
    expect(new ListGroup()).toBeTruthy();
  });

  describe('rendering', () => {
    let element: HTMLListGroupElement;
    let testWindow: TestWindow;
    beforeEach(async () => {
      testWindow = new TestWindow();
      element = await testWindow.load({
        components: [ListGroup],
        html: '<list-group></list-group>'
      });
    });

    // See https://stenciljs.com/docs/unit-testing
    {cursor}

  });
});
