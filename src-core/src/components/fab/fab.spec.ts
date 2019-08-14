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

  it('should render', async() => {
    const page = await newSpecPage({
			components: [FabComponent],
			html: `<se-fab></se-fab>`,
		});
		expect(page.root).toEqualHtml(`
			<se-fab>
				<mock:shadow-root>
          <div class="pos-bottom se-fab">
          <se-button color="primary" option="fab"></se-button>
            <div class="mini-action-button">
              <slot></slot>
            </div>
          </div>
				</mock:shadow-root>
			</se-fab>
		`);
  });

  it('should render with the arrow4_top icon when the option is set to backtotop', async() => {
    const page = await newSpecPage({
			components: [FabComponent],
			html: `<se-fab option="backtotop"></se-fab>`,
		});
		expect(page.root).toEqualHtml(`
			<se-fab option="backtotop">
				<mock:shadow-root>
          <div class="pos-bottom se-fab">
          <se-button color="primary" class="backtotop" option="fab" icon="arrow4_top"></se-button>
          </div>
				</mock:shadow-root>
			</se-fab>
		`);
  });
});
