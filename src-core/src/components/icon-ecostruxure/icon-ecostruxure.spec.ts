import { IconEcostruxureComponent } from './icon-ecostruxure';

describe('IconEcostruxureComponent', () => {
	let ecostruxureIcon;

	beforeEach(() => {
		ecostruxureIcon = new IconEcostruxureComponent();
	});

	it('should build', () => {
		expect(ecostruxureIcon).toBeTruthy();
	});

	it('should be a small size by default', () => {
    expect(ecostruxureIcon.size).toEqual('small');
  });
});