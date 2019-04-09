import { ContainerComponent } from './container';

describe('ContainerComponent', () => {
	let container;

	beforeEach(() => {
		container = new ContainerComponent();
	});

	it('should build', () => {
		expect(container).toBeTruthy();
	});

	it('should have a default option equal to fill', () => {
		expect(container.option).toEqual('fill');
	});

	it('should have a default position equal to relative', () => {
		expect(container.position).toEqual('relative');
	});

	it('should have a default direction equal to row', () => {
		expect(container.direction).toEqual('row');
	});

	it('should have a default display equal to flex', () => {
		expect(container.display).toEqual('flex');
	});

	it('should have a default color property set to alternative', () => {
		expect(container.color).toEqual('alternative');
	});
});