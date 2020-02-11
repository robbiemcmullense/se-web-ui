import { newE2EPage } from '@stencil/core/testing';

 describe('TableComponent', () => {
	let page;

	beforeEach(async() => {
		page = await newE2EPage();
	});

  it('renders', async() => {
		await page.setContent('<se-table></se-table>');
    const element = await page.find('se-table');
		expect(element).toBeTruthy();
		expect(element).toHaveClass('hydrated');
	});

});

describe('Table Screenshots', () => {
	let page;

	beforeEach(async() => {
		page = await newE2EPage();
	});

	it('should render by default', async() => {
		await page.setContent(`
			<se-table>
				<se-table-group item="My table Group">
					<se-table-item item="No icon, not selected" selected="false">
					</se-table-item>
					<se-table-item item="2nd table item with icon" icon="action_settings2" icon-color="primary">
					</se-table-item>
					<se-table-item item="3rd table item no icon" description="I'm here too">
					</se-table-item>
					<se-table-item item="Selected Item" selected="true">
					</se-table-item>
				</se-table-group>
			</se-table>
		`);
		await page.compareScreenshot('Table', {fullPage: false});
	});
});
