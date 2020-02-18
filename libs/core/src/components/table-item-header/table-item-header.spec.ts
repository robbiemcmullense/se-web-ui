import { TableItemHeaderComponent } from './table-item-header';

describe('table-item-header', () => {
  let tableItem;

  beforeEach(() => {
    tableItem = new TableItemHeaderComponent();
  });

  it('should build', () => {
    expect(tableItem).toBeTruthy();
  });
});