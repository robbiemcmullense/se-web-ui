import { storiesOf } from '@storybook/html';
import { text, select, number } from '@storybook/addon-knobs';

const totalItemsOpts = {
  range: false,
  min: 0,
  max: 5000,
  step: 1
}

storiesOf('Pagination', module)
  .add('Simple pagination', () => {
    const totalItems = number('total items', 30)

    return `
      <div style="padding: 10px; background-color: white; height: 50px;">      ${totalItems}
        <se-pagination total="${totalItems}"></se-pagination>
      </div>
    `
  })
  .add('Custom labels', () => {
    const totalItems = number('total items', 30, totalItemsOpts)

    const labelFirstPage = text('First Page Label','Go back to first page')
    const labelPrevPage = text('Prev Page Label','One page back')
    const labelNextPage = text('Next Page Label','One page forth')
    const labelLastPage = text('Last Page Label','Go to last page')
    const perPageLabel = text('PerPage Label','Items in single page')
    const pageLabel = text('Page Label','Current page')

    const perPageOpts = [
      "10",
      "10;25;20",
      "10;15;20;25;50",
      "10;15;20;25;50;100",
    ]
    const perPageSelect = select('Items per page',perPageOpts,"10;20;50")

    return `
      <div style="padding: 10px; background-color: white; height: 50px;">
        <se-pagination
          total-items="${totalItems}"
          label-first-page="${labelFirstPage}"
          label-prev-page="${labelPrevPage}"
          label-next-page="${labelNextPage}"
          label-last-page="${labelLastPage}"
          per-page-label="${perPageLabel}"
          page-label="${pageLabel}"
          per-page-list="${perPageSelect}"
          ></se-pagination>
      </div>
    `
  })
