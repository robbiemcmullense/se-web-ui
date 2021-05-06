import { storiesOf } from '@storybook/html';
import { number, text, boolean } from '@storybook/addon-knobs';
import { action } from '@storybook/addon-actions';
import * as readme from './readme.md';

storiesOf('Filtration Smart', module).add(
  'View More Facets Button',
  () => {
    document.addEventListener(
      'toggleViewMoreFacets',
      (e: CustomEvent<void>) => {
        action('toggleViewMoreFacets')(e.detail);
      }
    );

    const count = number('count', 9, { min: 0 });
    const isAllFacetsVisible = boolean('is all facets visible', false);
    const viewMoreLabel = text('view more label', 'View more');
    const viewLessLabel = text('view less label', 'View less');

    return `
      <div style="padding: 40px">
        <se-filtration-smart-view-more-facets-button
          count="${count}"
          is-all-facets-visible="${isAllFacetsVisible}"
          view-more-label="${viewMoreLabel}"
          view-less-label="${viewLessLabel}"
        />
      </div>`;
  },
  {
    notes: {
      markdown: readme,
    },
  }
);
