import { TableItemComponent } from './table-item';

describe('table-item', () => {
  let tableItem;

  beforeEach(() => {
    tableItem = new TableItemComponent();
  });

  it('should build', () => {
    expect(tableItem).toBeTruthy();
  });
});