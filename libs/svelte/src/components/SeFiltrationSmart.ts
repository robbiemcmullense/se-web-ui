/* eslint-disable */
/* tslint:disable */
// @ts-nocheck
import { Components, JSX } from '@se/web-ui';


interface SeFiltrationSmartProps {
  
  /** Normalized data for the filter. */
  filters?: Components.SeFiltrationSmart["filters"]
  
  /** Object that describes set of data attributes of sections and filters. */
  dataAttrsData?: Components.SeFiltrationSmart["dataAttrsData"]
  
  /** Defines text that will be used in the "Reset" button. */
  resetButtonLabel?: Components.SeFiltrationSmart["resetButtonLabel"]
  
  /** Defines text of the show products button (in mobile view). */
  showProductsLabel?: Components.SeFiltrationSmart["showProductsLabel"]
  
  /** Defines text of the "View more refinements" button in a facet. */
  viewMoreRefinementsLabel?: Components.SeFiltrationSmart["viewMoreRefinementsLabel"]
  
  /** Defines text of the "View less refinements" button in a facet. */
  viewLessRefinementsLabel?: Components.SeFiltrationSmart["viewLessRefinementsLabel"]
  
  /** Defines text of the "View more facets" button at the bottom of the filter. */
  viewMoreFacetsLabel?: Components.SeFiltrationSmart["viewMoreFacetsLabel"]
  
  /** Defines text of the "View less facets" button at the bottom of the filter. */
  viewLessFacetsLabel?: Components.SeFiltrationSmart["viewLessFacetsLabel"]
  
  /** Number of facets to show on initial render. */
  visibleFacetsCount?: Components.SeFiltrationSmart["visibleFacetsCount"]
  
  /** Number of refinements per facet to show on initial render. */
  visibleRefinementsPerFacetCount?: Components.SeFiltrationSmart["visibleRefinementsPerFacetCount"]
  
  /** The header label of filters used in desktop version. */
  headerLabelDesktop?: Components.SeFiltrationSmart["headerLabelDesktop"]
  
  /** The header label of filters used in mobile version. */
  headerLabelMobile?: Components.SeFiltrationSmart["headerLabelMobile"]
  
  /** Defines if the mobile view is visible. */
  isMobileViewVisible?: Components.SeFiltrationSmart["isMobileViewVisible"]
  
  /** Defines maximum height of a facet content in desktop view. */
  maxFacetContentHeight?: Components.SeFiltrationSmart["maxFacetContentHeight"]
}

interface SeFiltrationSmartEvents {
  
  /** Event that emits list of checked filters. */
  filterStateChanged: Parameters<JSX.SeFiltrationSmart["onFilterStateChanged"]>[0]
  
  /** Event that emits after every filters render. */
  seFiltrationSmartDidRender: Parameters<JSX.SeFiltrationSmart["onSeFiltrationSmartDidRender"]>[0]
}

interface SeFiltrationSmartSlots {
  default: any
}
  
/* generated by Svelte v3.44.0 */
import {
	SvelteComponent,
	binding_callbacks,
	create_slot,
	detach,
	element,
	flush,
	get_all_dirty_from_scope,
	get_slot_changes,
	init,
	insert,
	listen,
	run_all,
	safe_not_equal,
	set_custom_element_data,
	transition_in,
	transition_out,
	update_slot_base
} from "svelte/internal";

import { createEventDispatcher, onMount } from 'svelte';

function create_fragment(ctx) {
	let se_filtration_smart;
	let current;
	let mounted;
	let dispose;
	const default_slot_template = /*#slots*/ ctx[21].default;
	const default_slot = create_slot(default_slot_template, ctx, /*$$scope*/ ctx[20], null);

	return {
		c() {
			se_filtration_smart = element("se-filtration-smart");
			if (default_slot) default_slot.c();
			set_custom_element_data(se_filtration_smart, "reset-button-label", /*resetButtonLabel*/ ctx[0]);
			set_custom_element_data(se_filtration_smart, "show-products-label", /*showProductsLabel*/ ctx[1]);
			set_custom_element_data(se_filtration_smart, "view-more-refinements-label", /*viewMoreRefinementsLabel*/ ctx[2]);
			set_custom_element_data(se_filtration_smart, "view-less-refinements-label", /*viewLessRefinementsLabel*/ ctx[3]);
			set_custom_element_data(se_filtration_smart, "view-more-facets-label", /*viewMoreFacetsLabel*/ ctx[4]);
			set_custom_element_data(se_filtration_smart, "view-less-facets-label", /*viewLessFacetsLabel*/ ctx[5]);
			set_custom_element_data(se_filtration_smart, "visible-facets-count", /*visibleFacetsCount*/ ctx[6]);
			set_custom_element_data(se_filtration_smart, "visible-refinements-per-facet-count", /*visibleRefinementsPerFacetCount*/ ctx[7]);
			set_custom_element_data(se_filtration_smart, "header-label-desktop", /*headerLabelDesktop*/ ctx[8]);
			set_custom_element_data(se_filtration_smart, "header-label-mobile", /*headerLabelMobile*/ ctx[9]);
			set_custom_element_data(se_filtration_smart, "is-mobile-view-visible", /*isMobileViewVisible*/ ctx[10]);
			set_custom_element_data(se_filtration_smart, "max-facet-content-height", /*maxFacetContentHeight*/ ctx[11]);
		},
		m(target, anchor) {
			insert(target, se_filtration_smart, anchor);

			if (default_slot) {
				default_slot.m(se_filtration_smart, null);
			}

			/*se_filtration_smart_binding*/ ctx[22](se_filtration_smart);
			current = true;

			if (!mounted) {
				dispose = [
					listen(se_filtration_smart, "filterStateChanged", /*onEvent*/ ctx[13]),
					listen(se_filtration_smart, "seFiltrationSmartDidRender", /*onEvent*/ ctx[13])
				];

				mounted = true;
			}
		},
		p(ctx, [dirty]) {
			if (default_slot) {
				if (default_slot.p && (!current || dirty & /*$$scope*/ 1048576)) {
					update_slot_base(
						default_slot,
						default_slot_template,
						ctx,
						/*$$scope*/ ctx[20],
						!current
						? get_all_dirty_from_scope(/*$$scope*/ ctx[20])
						: get_slot_changes(default_slot_template, /*$$scope*/ ctx[20], dirty, null),
						null
					);
				}
			}

			if (!current || dirty & /*resetButtonLabel*/ 1) {
				set_custom_element_data(se_filtration_smart, "reset-button-label", /*resetButtonLabel*/ ctx[0]);
			}

			if (!current || dirty & /*showProductsLabel*/ 2) {
				set_custom_element_data(se_filtration_smart, "show-products-label", /*showProductsLabel*/ ctx[1]);
			}

			if (!current || dirty & /*viewMoreRefinementsLabel*/ 4) {
				set_custom_element_data(se_filtration_smart, "view-more-refinements-label", /*viewMoreRefinementsLabel*/ ctx[2]);
			}

			if (!current || dirty & /*viewLessRefinementsLabel*/ 8) {
				set_custom_element_data(se_filtration_smart, "view-less-refinements-label", /*viewLessRefinementsLabel*/ ctx[3]);
			}

			if (!current || dirty & /*viewMoreFacetsLabel*/ 16) {
				set_custom_element_data(se_filtration_smart, "view-more-facets-label", /*viewMoreFacetsLabel*/ ctx[4]);
			}

			if (!current || dirty & /*viewLessFacetsLabel*/ 32) {
				set_custom_element_data(se_filtration_smart, "view-less-facets-label", /*viewLessFacetsLabel*/ ctx[5]);
			}

			if (!current || dirty & /*visibleFacetsCount*/ 64) {
				set_custom_element_data(se_filtration_smart, "visible-facets-count", /*visibleFacetsCount*/ ctx[6]);
			}

			if (!current || dirty & /*visibleRefinementsPerFacetCount*/ 128) {
				set_custom_element_data(se_filtration_smart, "visible-refinements-per-facet-count", /*visibleRefinementsPerFacetCount*/ ctx[7]);
			}

			if (!current || dirty & /*headerLabelDesktop*/ 256) {
				set_custom_element_data(se_filtration_smart, "header-label-desktop", /*headerLabelDesktop*/ ctx[8]);
			}

			if (!current || dirty & /*headerLabelMobile*/ 512) {
				set_custom_element_data(se_filtration_smart, "header-label-mobile", /*headerLabelMobile*/ ctx[9]);
			}

			if (!current || dirty & /*isMobileViewVisible*/ 1024) {
				set_custom_element_data(se_filtration_smart, "is-mobile-view-visible", /*isMobileViewVisible*/ ctx[10]);
			}

			if (!current || dirty & /*maxFacetContentHeight*/ 2048) {
				set_custom_element_data(se_filtration_smart, "max-facet-content-height", /*maxFacetContentHeight*/ ctx[11]);
			}
		},
		i(local) {
			if (current) return;
			transition_in(default_slot, local);
			current = true;
		},
		o(local) {
			transition_out(default_slot, local);
			current = false;
		},
		d(detaching) {
			if (detaching) detach(se_filtration_smart);
			if (default_slot) default_slot.d(detaching);
			/*se_filtration_smart_binding*/ ctx[22](null);
			mounted = false;
			run_all(dispose);
		}
	};
}

function instance($$self, $$props, $$invalidate) {
	let { $$slots: slots = {}, $$scope } = $$props;
	let __ref;
	let __mounted = false;
	const dispatch = createEventDispatcher();
	let { filters } = $$props;
	let { dataAttrsData = undefined } = $$props;
	let { resetButtonLabel } = $$props;
	let { showProductsLabel } = $$props;
	let { viewMoreRefinementsLabel } = $$props;
	let { viewLessRefinementsLabel } = $$props;
	let { viewMoreFacetsLabel } = $$props;
	let { viewLessFacetsLabel } = $$props;
	let { visibleFacetsCount = undefined } = $$props;
	let { visibleRefinementsPerFacetCount = undefined } = $$props;
	let { headerLabelDesktop = undefined } = $$props;
	let { headerLabelMobile = undefined } = $$props;
	let { isMobileViewVisible = undefined } = $$props;
	let { maxFacetContentHeight = undefined } = $$props;
	const reset = (...args) => __ref.reset(...args);
	const setIsFilterChecked = (...args) => __ref.setIsFilterChecked(...args);
	const getWebComponent = () => __ref;

	onMount(() => {
		$$invalidate(19, __mounted = true);
	});

	const setProp = (prop, value) => {
		if (__ref) $$invalidate(12, __ref[prop] = value, __ref);
	};

	const onEvent = e => {
		e.stopPropagation();
		dispatch(e.type, e.detail);
	};

	function se_filtration_smart_binding($$value) {
		binding_callbacks[$$value ? 'unshift' : 'push'](() => {
			__ref = $$value;
			$$invalidate(12, __ref);
		});
	}

	$$self.$$set = $$props => {
		if ('filters' in $$props) $$invalidate(14, filters = $$props.filters);
		if ('dataAttrsData' in $$props) $$invalidate(15, dataAttrsData = $$props.dataAttrsData);
		if ('resetButtonLabel' in $$props) $$invalidate(0, resetButtonLabel = $$props.resetButtonLabel);
		if ('showProductsLabel' in $$props) $$invalidate(1, showProductsLabel = $$props.showProductsLabel);
		if ('viewMoreRefinementsLabel' in $$props) $$invalidate(2, viewMoreRefinementsLabel = $$props.viewMoreRefinementsLabel);
		if ('viewLessRefinementsLabel' in $$props) $$invalidate(3, viewLessRefinementsLabel = $$props.viewLessRefinementsLabel);
		if ('viewMoreFacetsLabel' in $$props) $$invalidate(4, viewMoreFacetsLabel = $$props.viewMoreFacetsLabel);
		if ('viewLessFacetsLabel' in $$props) $$invalidate(5, viewLessFacetsLabel = $$props.viewLessFacetsLabel);
		if ('visibleFacetsCount' in $$props) $$invalidate(6, visibleFacetsCount = $$props.visibleFacetsCount);
		if ('visibleRefinementsPerFacetCount' in $$props) $$invalidate(7, visibleRefinementsPerFacetCount = $$props.visibleRefinementsPerFacetCount);
		if ('headerLabelDesktop' in $$props) $$invalidate(8, headerLabelDesktop = $$props.headerLabelDesktop);
		if ('headerLabelMobile' in $$props) $$invalidate(9, headerLabelMobile = $$props.headerLabelMobile);
		if ('isMobileViewVisible' in $$props) $$invalidate(10, isMobileViewVisible = $$props.isMobileViewVisible);
		if ('maxFacetContentHeight' in $$props) $$invalidate(11, maxFacetContentHeight = $$props.maxFacetContentHeight);
		if ('$$scope' in $$props) $$invalidate(20, $$scope = $$props.$$scope);
	};

	$$self.$$.update = () => {
		if ($$self.$$.dirty & /*__mounted, filters*/ 540672) {
			$: if (__mounted) setProp('filters', filters);
		}

		if ($$self.$$.dirty & /*__mounted, dataAttrsData*/ 557056) {
			$: if (__mounted) setProp('dataAttrsData', dataAttrsData);
		}
	};

	return [
		resetButtonLabel,
		showProductsLabel,
		viewMoreRefinementsLabel,
		viewLessRefinementsLabel,
		viewMoreFacetsLabel,
		viewLessFacetsLabel,
		visibleFacetsCount,
		visibleRefinementsPerFacetCount,
		headerLabelDesktop,
		headerLabelMobile,
		isMobileViewVisible,
		maxFacetContentHeight,
		__ref,
		onEvent,
		filters,
		dataAttrsData,
		reset,
		setIsFilterChecked,
		getWebComponent,
		__mounted,
		$$scope,
		slots,
		se_filtration_smart_binding
	];
}

class SeFiltrationSmart extends SvelteComponent {
  $$prop_def: SeFiltrationSmartProps;
  $$events_def: SeFiltrationSmartEvents;
  $$slot_def: SeFiltrationSmartSlots;

  $on<K extends keyof SeFiltrationSmartEvents>(type: K, callback: (e: SeFiltrationSmartEvents[K]) => any): () => void {
	  return super.$on(type, callback);
	}

  $set($$props: Partial<SeFiltrationSmartProps>): void {
	  super.$set($$props);
	}

	constructor(options) {
		super();

		init(this, options, instance, create_fragment, safe_not_equal, {
			filters: 14,
			dataAttrsData: 15,
			resetButtonLabel: 0,
			showProductsLabel: 1,
			viewMoreRefinementsLabel: 2,
			viewLessRefinementsLabel: 3,
			viewMoreFacetsLabel: 4,
			viewLessFacetsLabel: 5,
			visibleFacetsCount: 6,
			visibleRefinementsPerFacetCount: 7,
			headerLabelDesktop: 8,
			headerLabelMobile: 9,
			isMobileViewVisible: 10,
			maxFacetContentHeight: 11,
			reset: 16,
			setIsFilterChecked: 17,
			getWebComponent: 18
		});
	}

	get filters() {
		return this.$$.ctx[14];
	}

	set filters(filters) {
		this.$$set({ filters });
		flush();
	}

	get dataAttrsData() {
		return this.$$.ctx[15];
	}

	set dataAttrsData(dataAttrsData) {
		this.$$set({ dataAttrsData });
		flush();
	}

	get resetButtonLabel() {
		return this.$$.ctx[0];
	}

	set resetButtonLabel(resetButtonLabel) {
		this.$$set({ resetButtonLabel });
		flush();
	}

	get showProductsLabel() {
		return this.$$.ctx[1];
	}

	set showProductsLabel(showProductsLabel) {
		this.$$set({ showProductsLabel });
		flush();
	}

	get viewMoreRefinementsLabel() {
		return this.$$.ctx[2];
	}

	set viewMoreRefinementsLabel(viewMoreRefinementsLabel) {
		this.$$set({ viewMoreRefinementsLabel });
		flush();
	}

	get viewLessRefinementsLabel() {
		return this.$$.ctx[3];
	}

	set viewLessRefinementsLabel(viewLessRefinementsLabel) {
		this.$$set({ viewLessRefinementsLabel });
		flush();
	}

	get viewMoreFacetsLabel() {
		return this.$$.ctx[4];
	}

	set viewMoreFacetsLabel(viewMoreFacetsLabel) {
		this.$$set({ viewMoreFacetsLabel });
		flush();
	}

	get viewLessFacetsLabel() {
		return this.$$.ctx[5];
	}

	set viewLessFacetsLabel(viewLessFacetsLabel) {
		this.$$set({ viewLessFacetsLabel });
		flush();
	}

	get visibleFacetsCount() {
		return this.$$.ctx[6];
	}

	set visibleFacetsCount(visibleFacetsCount) {
		this.$$set({ visibleFacetsCount });
		flush();
	}

	get visibleRefinementsPerFacetCount() {
		return this.$$.ctx[7];
	}

	set visibleRefinementsPerFacetCount(visibleRefinementsPerFacetCount) {
		this.$$set({ visibleRefinementsPerFacetCount });
		flush();
	}

	get headerLabelDesktop() {
		return this.$$.ctx[8];
	}

	set headerLabelDesktop(headerLabelDesktop) {
		this.$$set({ headerLabelDesktop });
		flush();
	}

	get headerLabelMobile() {
		return this.$$.ctx[9];
	}

	set headerLabelMobile(headerLabelMobile) {
		this.$$set({ headerLabelMobile });
		flush();
	}

	get isMobileViewVisible() {
		return this.$$.ctx[10];
	}

	set isMobileViewVisible(isMobileViewVisible) {
		this.$$set({ isMobileViewVisible });
		flush();
	}

	get maxFacetContentHeight() {
		return this.$$.ctx[11];
	}

	set maxFacetContentHeight(maxFacetContentHeight) {
		this.$$set({ maxFacetContentHeight });
		flush();
	}

	
  /** Use it if you want to reset the filter to its initial state.
All controls (single- and multi-selects) will be set to its initial states
(if on an initial render a checkbox was checked but later was unchecked by a user, it will be returned to checked state).
All sections (root and nested) will retain their states (expanded/collapsed). */
 get reset(): Components.SeFiltrationSmart["reset"] {
		return this.$$.ctx[16];
	}

	
  /** Use it if you want to set the state (checked/unchecked) of a particular filter. */
 get setIsFilterChecked(): Components.SeFiltrationSmart["setIsFilterChecked"] {
		return this.$$.ctx[17];
	}

	get getWebComponent(): HTMLSeFiltrationSmartElement | undefined {
		return this.$$.ctx[18];
	}
}

export default SeFiltrationSmart;