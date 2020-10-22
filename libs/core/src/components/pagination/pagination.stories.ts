import { storiesOf } from '@storybook/html';
import readme from './readme.md';
import { text, select, number, boolean } from '@storybook/addon-knobs';

const totalItemsOpts = {
  range: false,
  min: 0,
  max: 5000,
  step: 1,
};

storiesOf('Pagination', module)
  .add(
    'Simple pagination',
    () => {
      const totalItems = number('total pages', 30);
      const hideEdge = boolean('Hide Edges', false);

      return `
      <div style="padding: 10px;">
        <se-pagination total="${totalItems}" hide-edge=${hideEdge} ></se-pagination>
      </div>
    `;
    },
    {
      notes: {
        markdown: readme,
      },
    }
  )
  .add(
    'Custom labels',
    () => {
      const total = number('total pages', 30, totalItemsOpts);

      const labelFirst = text('First Page Label', 'Go back to first page');
      const labelPrev = text('Prev Page Label', 'One page back');
      const labelNext = text('Next Page Label', 'One page forth');
      const labelLast = text('Last Page Label', 'Go to last page');
      const labelPerPage = text('PerPage Label', 'Items in single page');
      const labelValue = text('Page Label', 'Current page');

      const pageSizeListOpt = [
        '10',
        '10;25;20',
        '10;15;20;25;50',
        '10;15;20;25;50;100',
      ];
      const pageSizeList = select(
        'page size list',
        pageSizeListOpt,
        '10;20;50'
      );

      return `
      <div style="padding: 10px;">
        <se-pagination
          total="${total}"
          per-page="20"
          per-page-list="${pageSizeList}"
          label-first="${labelFirst}"
          label-prev="${labelPrev}"
          label-next="${labelNext}"
          label-last="${labelLast}"
          label-per-page="${labelPerPage}"
          label-value="${labelValue}"
          ></se-pagination>
      </div>
    `;
    },
    {
      notes: {
        markdown: readme,
      },
    }
  );
