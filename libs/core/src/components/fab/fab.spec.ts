import { FabComponent } from './fab';
import { newSpecPage } from '@stencil/core/testing';

describe('FabComponent', () => {
  let fab;

  beforeEach(() => {
    fab = new FabComponent();
  });

  it('should build', () => {
    expect(fab).toBeTruthy();
  });

  it('should be in bottom position by default', () => {
    expect(fab.position).toEqual('bottom');
  });

  it('should be  speed dial by default', () => {
    expect(fab.option).toEqual('speeddial');
  });

  it('should be a primary color by default', () => {
    expect(fab.color).toEqual('primary');
  });

  it('should be toggleable by default', () => {
    expect(fab.toggleIcon).toBeTruthy();
  });

  it('should change the toggle icon property when the toggle action method is called', () => {
    fab.toggleAction();
    expect(fab.toggleIcon).toBeFalsy();
  });

  it('should render in speeddial mode by default, with an element with the mini-action-button class', async() => {
    const page = await newSpecPage({
			components: [FabComponent],
			html: `<se-fab></se-fab>`,
		});
		expect(page.root.shadowRoot.querySelector('.mini-action-button')).toBeTruthy();
  });

  it('should render an se-button element with the backtotop class when the option is set to backtotop', async() => {
    const page = await newSpecPage({
			components: [FabComponent],
			html: `<se-fab option="backtotop"></se-fab>`,
		});
		expect(page.root.shadowRoot.querySelector('.backtotop')).toBeTruthy();
  });
});
