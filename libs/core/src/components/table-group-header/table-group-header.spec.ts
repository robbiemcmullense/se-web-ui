import { TableGroupHeaderComponent } from './table-group-header';

describe('table-group-header', () => {
  let tableGroup;

  beforeEach(() => {
    tableGroup = new TableGroupHeaderComponent();
  });

  it('should build', () => {
    expect(tableGroup).toBeTruthy();
  });
});
