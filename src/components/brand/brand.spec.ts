import { TestWindow } from '@stencil/core/testing';
import { Brand } from './brand';

describe('brand', () => {
  it('should build', () => {
    expect(new Brand()).toBeTruthy();
  });

  describe('rendering', () => {
    let element: HTMLBrandElement;
    let testWindow: TestWindow;
    beforeEach(async () => {
      testWindow = new TestWindow();
      element = await testWindow.load({
        components: [Brand],
        html: '<se-brand></se-brand>'
      });
    });

    // See https://stenciljs.com/docs/unit-testing
    {cursor}

  });
});
