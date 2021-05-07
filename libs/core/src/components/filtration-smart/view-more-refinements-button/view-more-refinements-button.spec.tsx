import { h } from '@stencil/core';
import { newSpecPage } from '@stencil/core/testing';
import { FiltrationSmartViewMoreRefinementsButton } from './view-more-refinements-button';

describe('FiltrationSmartViewMoreFiltersLink', () => {
  const commonProps = {
    facetId: 'whatever',
    viewMoreLabel: 'View more',
    viewLessLabel: 'View less',
    isAllRefinementsVisible: true,
    count: 1,
  };

  describe('text', () => {
    it('should render `view less` text without `count` if all refinements are visible', async () => {
      const page = await newSpecPage({
        components: [FiltrationSmartViewMoreRefinementsButton],
        template: () => (
          <se-filtration-smart-view-more-refinements-button {...commonProps} />
        ),
      });

      expect(page.root.shadowRoot.textContent).toBe('View less');
    });

    it('should render `view more` text with `count` if not all refinements are visible', async () => {
      const page = await newSpecPage({
        components: [FiltrationSmartViewMoreRefinementsButton],
        template: () => (
          <se-filtration-smart-view-more-refinements-button
            {...commonProps}
            isAllRefinementsVisible={false}
          />
        ),
      });

      expect(page.root.shadowRoot.textContent).toBe('View more (1)');
    });
  });

  describe('icon', () => {
    it('should be rendered as upward arrow if all refinements are visible', async () => {
      const page = await newSpecPage({
        components: [FiltrationSmartViewMoreRefinementsButton],
        template: () => (
          <se-filtration-smart-view-more-refinements-button {...commonProps} />
        ),
      });

      expect(
        page.root.shadowRoot.querySelector(
          '.view-more-refinements-button__arrow--up'
        )
      ).toBeDefined();
    });

    it('should be rendered as downward arrow if not all refinements are visible', async () => {
      const page = await newSpecPage({
        components: [FiltrationSmartViewMoreRefinementsButton],
        template: () => (
          <se-filtration-smart-view-more-refinements-button
            {...commonProps}
            isAllRefinementsVisible={false}
          />
        ),
      });

      expect(
        page.root.shadowRoot.querySelector(
          '.view-more-refinements-button__arrow--down'
        )
      ).toBeDefined();
    });
  });
});
