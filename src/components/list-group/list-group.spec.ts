import { TestWindow } from '@stencil/core/testing';
import { ListGroupComponent } from './list-group';

describe('list-group', () => {
  let listGroup;
  it('should build', () => {
    listGroup = new ListGroupComponent();
    expect(listGroup).toBeTruthy();
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
  });
});
