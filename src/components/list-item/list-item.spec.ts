import { TestWindow } from '@stencil/core/testing';
import { ListItemComponent } from './list-item';

describe('list-item', () => {
  let listItem;
  it('should build', () => {
    listItem = new ListItemComponent();
    expect(listItem).toBeTruthy();
  });

  describe('rendering', () => {
    let element: HTMLListItemElement;
    let testWindow: TestWindow;
    beforeEach(async () => {
      testWindow = new TestWindow();
      element = await testWindow.load({
        components: [ListItemComponent],
        html: '<list-item></list-item>'
      });
    }); 
  });
});