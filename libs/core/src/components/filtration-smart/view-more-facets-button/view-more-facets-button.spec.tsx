import { h } from '@stencil/core';
import { newSpecPage } from '@stencil/core/testing';
import { FiltrationSmartViewMoreSectionsButton } from './view-more-facets-button';

describe('FiltrationSmartViewMoreSectionsLink', () => {
  const commonProps = {
    viewMoreLabel: 'View more',
    viewLessLabel: 'View less',
    isAllFacetsVisible: true,
    count: 1,
  };

  describe('text', () => {
    it('should render `view more` text if not all facets are visible', async () => {
      const page = await newSpecPage({
        components: [FiltrationSmartViewMoreSectionsButton],
        template: () => (
          <se-filtration-smart-view-more-facets-button {...commonProps} />
        ),
      });

      expect(
        page.root.shadowRoot.querySelector('button').textContent
      ).toContain('View less');
    });

    it('should render `view lest` text if all facets are visible', async () => {
      const page = await newSpecPage({
        components: [FiltrationSmartViewMoreSectionsButton],
        template: () => (
          <se-filtration-smart-view-more-facets-button
            {...commonProps}
            isAllFacetsVisible={false}
          />
        ),
      });

      expect(
        page.root.shadowRoot.querySelector('button').textContent
      ).toContain('View more');
    });
  });

  describe('count', () => {
    it('should render count if `count` more than 0', async () => {
      const page = await newSpecPage({
        components: [FiltrationSmartViewMoreSectionsButton],
        template: () => (
          <se-filtration-smart-view-more-facets-button {...commonProps} />
        ),
      });

      expect(
        page.root.shadowRoot.querySelector('.view-more-facets-button__count')
          .textContent
      ).toBe('1');
    });

    it('should not render count if `count` prop is 0', async () => {
      const page = await newSpecPage({
        components: [FiltrationSmartViewMoreSectionsButton],
        template: () => (
          <se-filtration-smart-view-more-facets-button
            {...commonProps}
            count={0}
          />
        ),
      });

      expect(
        page.root.shadowRoot.querySelectorAll('.view-more-facets-button__count')
          .length
      ).toBe(0);
    });
  });

  describe('icon', () => {
    it('should be rendered as upward arrow if all facets are visible', async () => {
      const page = await newSpecPage({
        components: [FiltrationSmartViewMoreSectionsButton],
        template: () => (
          <se-filtration-smart-view-more-facets-button {...commonProps} />
        ),
      });

      expect(
        page.root.shadowRoot.querySelector('.view-more-facets-button__arrow')
      ).toHaveClass('view-more-facets-button__arrow--up');
    });

    it('should be rendered as downward arrow if not all facets are visible', async () => {
      const page = await newSpecPage({
        components: [FiltrationSmartViewMoreSectionsButton],
        template: () => (
          <se-filtration-smart-view-more-facets-button
            {...commonProps}
            isAllFacetsVisible={false}
          />
        ),
      });

      expect(
        page.root.shadowRoot.querySelector('.view-more-facets-button__arrow')
      ).toHaveClass('view-more-facets-button__arrow--down');
    });
  });
});
