import { storiesOf } from '@storybook/html';
import { number, text, object, boolean } from '@storybook/addon-knobs';
import { action } from '@storybook/addon-actions';
import { filters as filtersNormalizedDataMock } from './__mock__/filters';
import * as readme from './readme.md';
import { FilterEmittedState } from './types';

storiesOf('Filtration Smart', module).add(
  'Filter',
  () => {
    document.addEventListener(
      'filterStateChanged',
      (e: CustomEvent<FilterEmittedState>) => {
        action('filterStateChanged')(e.detail);
      }
    );

    document.addEventListener(
      'track_analytics',
      (e: CustomEvent<{ filterId: string; isChecked: boolean }>) => {
        action('track_analytics')(e.detail);
      }
    );

    const visibleFacetsCount = number('visible facets count', 5, {}, 'Main');
    const visibleRefinementsPerFacetCount = number(
      'visible refinements per facet',
      5,
      {},
      'Main'
    );
    const headerDesktop = text('desktop header', 'Filter by', 'Main');
    const headerMobile = text('mobile header', 'Filters', 'Main');
    const showProductsButton = text(
      'mobile filter bottom button text',
      'Show products (52)',
      'Main'
    );
    const filters = object('filters data', filtersNormalizedDataMock, 'Other');
    const maxSectionContentHeight = number(
      'max section height (in pixels)',
      300,
      { min: 1 },
      'Main'
    );
    const isMobileViewVisible = boolean('turn on mobile view', false, 'Main');
    const resetButtonLabel = text(
      'reset all button label',
      'Reset all',
      'Main'
    );
    const viewMoreRefinementsLabel = text(
      'view more refinements button label',
      'View more',
      'Main'
    );
    const viewLessRefinementsLabel = text(
      'view less refinements button label',
      'View less',
      'Main'
    );
    const viewMoreFacetsLabel = text(
      'view more facets button label',
      'View more',
      'Main'
    );
    const viewLessFacetsLabel = text(
      'view less facets button label',
      'View less',
      'Main'
    );

    const filter = document.createElement('se-filtration-smart') as any;
    filter.filters = filters;
    filter.headerLabelDesktop = headerDesktop;
    filter.headerLabelMobile = headerMobile;
    filter.showProductsLabel = showProductsButton;
    filter.visibleFacetsCount = visibleFacetsCount;
    filter.visibleRefinementsPerFacetCount = visibleRefinementsPerFacetCount;
    filter.resetButtonLabel = resetButtonLabel;
    filter.viewMoreRefinementsLabel = viewMoreRefinementsLabel;
    filter.viewLessRefinementsLabel = viewLessRefinementsLabel;
    filter.viewMoreFacetsLabel = viewMoreFacetsLabel;
    filter.viewLessFacetsLabel = viewLessFacetsLabel;
    filter.maxFacetContentHeight = maxSectionContentHeight;
    filter.isMobileViewVisible = isMobileViewVisible;

    const containerWidth = number(
      'container width (for debug purposes)',
      280,
      { min: 0 },
      'Main'
    );

    const wrapper = document.createElement('div');
    wrapper.style.padding = '20px 40px';
    wrapper.style.width = `${containerWidth}px`;

    wrapper.append(filter);

    return wrapper;
  },
  {
    notes: {
      markdown: readme,
    },
    knobs: {
      escapeHTML: false,
    },
  }
);
