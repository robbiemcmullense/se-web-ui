import { TestWindow } from '@stencil/core/testing';
import { ListComponent } from './list';

describe('list', () => {
  let list;
  it('should build', () => {
    list = new ListComponent();
    expect(list).toBeTruthy();
  });

  describe('rendering', () => {
    let element: HTMLListElement;
    let testWindow: TestWindow;
    beforeEach(async () => {
      testWindow = new TestWindow();
      element = await testWindow.load({
        components: [ListComponent],
        html: '<se-list></se-list>'
      });
    });
  });
});
