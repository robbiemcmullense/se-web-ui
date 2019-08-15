import { ChipComponent } from './chip';
import { newSpecPage } from '@stencil/core/testing';

describe('ChipComponent', () => {
	let chip;

	beforeEach(() => {
		chip = new ChipComponent();
	});

	it('should create a chip component', () => {
		expect(chip).toBeTruthy();
	});

	it('should have a standard color by default', () => {
		expect(chip.color).toEqual('standard');
	});

	it('should not be selected by default', () => {
		expect(chip.selected).toBeFalsy();
	});

	it('should not be disabled by default', () => {
		expect(chip.disabled).toBeFalsy();
	});

	it('should not be in block mode', () => {
		expect(chip.block).toBeUndefined();
	});

	it('should have an undefined value initially', () => {
		expect(chip.value).toBeUndefined();
	});

	it('should not have the ability to be closed by default', () => {
		expect(chip.canClose).toBeFalsy();
	});

	it('should render with the specified value', async() => {
		const page = await newSpecPage({
			components: [ChipComponent],
			html: `<se-chip value="my chip value"></se-chip>`,
		});
		expect(page.root).toEqualHtml(`
			<se-chip value="my chip value">
				<mock:shadow-root>
					<div class="se-chip standard">
						<div class="value">my chip value</div>
					</div>
				</mock:shadow-root>
			</se-chip>
		`);
	});

	it('should render with a close icon when canClose is set to true', async() => {
		const page = await newSpecPage({
			components: [ChipComponent],
			html: `<se-chip value="my chip value" can-close="true"></se-chip>`,
		});
		expect(page.root).toEqualHtml(`
			<se-chip value="my chip value" can-close="true">
				<mock:shadow-root>
					<div class="se-chip standard">
						<div class="can-close value">my chip value</div>
						<div class="close se-icon">action_delete_cross</div>
					</div>
				</mock:shadow-root>
			</se-chip>
		`);
	});
});