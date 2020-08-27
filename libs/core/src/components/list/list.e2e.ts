import { newE2EPage } from '@stencil/core/testing';

describe('ListComponent', () => {
  let page;

  beforeEach(async () => {
    page = await newE2EPage();
  });

  it('renders', async () => {
    await page.setContent('<se-list></se-list>');
    const element = await page.find('se-list');
    expect(element).toBeTruthy();
    expect(element).toHaveClass('hydrated');
  });

  it('renders a list item passing the "classic" option by default', async () => {
    await page.setContent(
      '<se-list><se-list-item item="list title" description="my description"></se-list-item></se-list>'
    );
    const element = await page.find('se-list se-list-item >>> .se-list-item');
    expect(element).toHaveClass('classic');
  });

  it('renders a list group passing the "nav" option from its parent', async () => {
    await page.setContent(
      '<se-list option="nav"><se-list-group item="group title" selected="true"></se-list-group></se-list>'
    );
    const element = await page.find('se-list se-list-group >>> .se-list-group');
    expect(element).toHaveClass('nav');
    expect(element.querySelector('.selectedBar')).toBeTruthy();
  });

  it('renders a list group passing the "canCollapse" value from its parent', async () => {
    // can't simulate click events to test it should not collapse its children with canCollapse="false"
  });
});

describe('List Screenshots', () => {
  let page;

  beforeEach(async () => {
    page = await newE2EPage();
  });

  it('should render in classic mode by default', async () => {
    await page.setContent(`
			<se-list>
				<se-list-group item="My List Group">
					<se-list-item item="No icon, not selected" selected="false">
					</se-list-item>
					<se-list-item item="2nd list item with icon" icon="action_settings2" icon-color="primary">
					</se-list-item>
					<se-list-item item="3rd list item no icon" description="I'm here too">
					</se-list-item>
					<se-list-item item="Selected Item" selected="true">
					</se-list-item>
				</se-list-group>
			</se-list>
		`);
    await page.compareScreenshot('Classic List', { fullPage: false });
  });

  it('should render in nav mode', async () => {
    await page.setContent(`
			<se-list option="nav">
				<se-list-item item="1st item selected" selected="true">
				</se-list-item>
				<se-list-item item="2nd item not selected">
				</se-list-item>
			</se-list>
		`);
    await page.compareScreenshot('Nav List', { fullPage: false });
  });

  it('should render in dropdown mode', async () => {
    await page.setContent(`
			<se-list option="dropdown">
				<se-list-item item="Item 1"></se-list-item>
				<se-list-item item="Item 2"></se-list-item>
				<se-list-item item="Item 3"></se-list-item>
			</se-list>
		`);
    await page.compareScreenshot('Dropdown List', { fullPage: false });
  });

  it('should render in treeview mode', async () => {
    await page.setContent(`
			<se-list option="treeview">
				<se-list-group option="treeview" item="Treeview Example">
					<se-list-item item="First treeview child"></se-list-item>
					<se-list-group option="treeview" item="Second treeview child">
						<se-list-item item="I'm the first treeview grandchild!"></se-list-item>
						<se-list-item item="I'm the second treeview grandchild!" selected="true"></se-list-item>
					</se-list-group>
					<se-list-item item="Third treeview child"></se-list-item>
				</se-list-group>
			</se-list>
		`);
    await page.compareScreenshot('Treeview List', { fullPage: false });
  });

  it('should render in headline mode', async () => {
    await page.setContent(`
		<se-list option="headline">
			<se-list-group item="Headline Example">
				<se-list-item item="Standard"></se-list-item>
				<se-list-item item="Primary"></se-list-item>
				<se-list-item item="Disable"></se-list-item>
			</se-list-group>
			<se-list-group item="2nd Headline Example">
				<se-list-item item="Warning"></se-list-item>
				<se-list-item item="Error"></se-list-item>
			</se-list-group>
		</se-list>
		`);
    await page.compareScreenshot('Headline List', { fullPage: false });
  });
});
