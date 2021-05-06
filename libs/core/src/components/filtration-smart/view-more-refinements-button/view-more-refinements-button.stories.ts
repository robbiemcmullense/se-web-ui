import { storiesOf } from '@storybook/html';
import { number, text, boolean } from '@storybook/addon-knobs';
import { action } from '@storybook/addon-actions';
import * as readme from './readme.md';

storiesOf('Filtration Smart', module).add(
  'View More Refinements Button',
  () => {
    document.addEventListener(
      'toggleViewMoreRefinements',
      (e: CustomEvent<string>) => {
        action('toggleViewMoreRefinements')(e.detail);
      }
    );

    const count = number('count', 9, { min: 0 });
    const isAllRefinementsVisible = boolean(
      'is all refinements visible',
      false
    );
    const viewMoreLabel = text('view more label', 'View more');
    const viewLessLabel = text('view less label', 'View less');

    return `
      <div style="padding: 40px">
        <se-filtration-smart-view-more-refinements-button
          facet-id="whateverSectionId"
          count="${count}"
          is-all-refinements-visible="${isAllRefinementsVisible}"
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
