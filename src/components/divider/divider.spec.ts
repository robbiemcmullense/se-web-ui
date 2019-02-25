import { TestWindow } from '@stencil/core/testing';
import { DividerComponent } from './divider';

describe('divider', () => {
  let divider;
  it('should build', () => {
    divider = new DividerComponent();
    expect(divider).toBeTruthy();
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
  });
});
