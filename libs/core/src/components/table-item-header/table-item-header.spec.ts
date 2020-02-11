import { TableItemComponent } from './table-item-header';

describe('table-item', () => {
  let tableItem;

  beforeEach(() => {
    tableItem = new TableItemComponent();
  });

  it('should build', () => {
    expect(tableItem).toBeTruthy();
  });
});