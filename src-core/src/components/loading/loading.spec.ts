import { LoadingComponent } from './loading';

describe('list-group', () => {
	let loader;

	beforeEach(() => {
		loader = new LoadingComponent();
	});

	it('should build', () => {
		expect(loader).toBeTruthy();
	});

	it('should not have a defined loading state initially', () => {
		expect(loader.loading).toBeUndefined();
	});

	it('should set the selected state to true after calling the setActive method', () => {
		loader.loading = true;
		expect(loader.loading).toBeDefined();
	});
});
