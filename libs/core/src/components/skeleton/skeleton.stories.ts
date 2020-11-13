import { storiesOf } from '@storybook/html';
import readme from './readme.md';
import { text, boolean, number } from '@storybook/addon-knobs';

// const valueOptions = {
//   range: true,
//   min: 1,
//   max: 100,
//   step: 1,
// };

storiesOf('Skeleton', module)
  .add(
    'basic',
    () => {
      const count = number('count', 1);
      const width = text('width', undefined);
      const height = text('height', undefined);
      const circle = boolean('circle', false);

      return `
      <div style="padding: 10px;">
        <se-skeleton
          count="${count}"
          width="${width}"
          height="${height}"
          circle="${circle}"></se-skeleton>
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
    'list',
    () => {
      const item = `
      <se-list-item>
        <se-skeleton slot="item" width="100%"></se-skeleton>
        <se-skeleton slot="description" width="40%"></se-skeleton>
      </se-list-item>
      `;

      return `
      <se-block width="300px">
        <se-list>
          ${item}
          ${item}
          ${item}
          ${item}
          ${item}
        </se-list>
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
    'table',
    () => {
      const RandomValues = [
        '40%',
        '80%',
        '60%',
        '50%',
        '70%',
        '60%',
        '90%',
        '30%',
        '40%',
      ];
      const nbGroups = Math.max(1, Math.min(RandomValues.length, 6));
      return `
        <se-table>
          <se-table-group-header>
            <se-table-item-header width="100px" ><se-skeleton></se-skeleton></se-table-item-header>
            <se-table-item-header><se-skeleton width="80%"></se-skeleton></se-table-item-header>
            <se-table-item-header><se-skeleton width="80%"></se-skeleton></se-table-item-header>
            <se-table-item-header><se-skeleton width="80%"></se-skeleton></se-table-item-header>
            <se-table-item-header width="100px" ><se-skeleton></se-skeleton></se-table-item-header>
          </se-table-group-header>
          ${[...Array(nbGroups)]
            .map(
              (_, idGroup) =>
                `<se-table-group>
                <se-table-item width="100px" ><se-skeleton></se-skeleton></se-table-item>
                <se-table-item><se-skeleton width=${RandomValues[idGroup]}></se-skeleton></se-table-item>
                <se-table-item><se-skeleton width=${RandomValues[idGroup]}></se-skeleton></se-table-item>
                <se-table-item><se-skeleton width=${RandomValues[idGroup]}></se-skeleton></se-table-item>
                <se-table-item width="100px"><se-skeleton></se-skeleton></se-table-item>
              </se-table-group>`
            )
            .join('')}
        </se-table>`;
    },
    {
      notes: {
        markdown: readme,
      },
    }
  );
