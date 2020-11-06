import { FiltrationComponent } from './filtration';
import { newSpecPage } from '@stencil/core/testing';

describe('FiltrationComponent', () => {
  let filtration;

  beforeEach(() => {
    filtration = new FiltrationComponent();
  });

  it('should build', () => {
    expect(filtration).toBeTruthy();
  });
});
