import { TableGroupComponent } from './table-group';

describe('table-group', () => {
  let tableGroup;

  beforeEach(() => {
    tableGroup = new TableGroupComponent();
  });

  it('should build', () => {
    expect(tableGroup).toBeTruthy();
  });
});
