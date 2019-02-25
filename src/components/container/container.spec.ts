import { ContainerComponent } from './container';

describe('ContainerComponent', () => {
	let container;

	beforeEach(() => {
		container = new ContainerComponent();
	});

	it('should build', () => {
		expect(container).toBeTruthy();
	});

	it('should have a default mode equal to fill', () => {
		expect(container.mode).toEqual('fill');
	});

	it('should have a default position equal to relative', () => {
		expect(container.position).toEqual('relative');
	});
});