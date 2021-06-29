/* eslint-disable */
/* tslint:disable */
// @ts-nocheck
import { Components, JSX } from '@se/web-ui';


interface SeFiltrationSmartViewMoreFacetsButtonProps {
  
  /** Defines what label should be used inside the button:
 true => "show less"
 false => "show more" */
  isAllFacetsVisible?: Components.SeFiltrationSmartViewMoreFacetsButton["isAllFacetsVisible"]
  
  /** Defines what number should be rendered in the circle inside the button. */
  count?: Components.SeFiltrationSmartViewMoreFacetsButton["count"]
  
  /** Defines text of the "View more" button. */
  viewMoreLabel?: Components.SeFiltrationSmartViewMoreFacetsButton["viewMoreLabel"]
  
  /** Defines text of the "View less" button. */
  viewLessLabel?: Components.SeFiltrationSmartViewMoreFacetsButton["viewLessLabel"]
}

interface SeFiltrationSmartViewMoreFacetsButtonEvents {
  
  /** Event that signals Smart Filter to toggle visibility of all its facets. */
  toggleViewMoreFacets: Parameters<JSX.SeFiltrationSmartViewMoreFacetsButton["onToggleViewMoreFacets"]>[0]
}

interface SeFiltrationSmartViewMoreFacetsButtonSlots {
  default: any
}
  
/* generated by Svelte v3.38.3 */
import {
	SvelteComponent,
	binding_callbacks,
	create_slot,
	detach,
	element,
	flush,
	init,
	insert,
	listen,
	safe_not_equal,
	set_custom_element_data,
	transition_in,
	transition_out,
	update_slot
} from "svelte/internal";

import { createEventDispatcher, onMount } from "svelte";

function create_fragment(ctx) {
	let se_filtration_smart_view_more_facets_button;
	let current;
	let mounted;
	let dispose;
	const default_slot_template = /*#slots*/ ctx[8].default;
	const default_slot = create_slot(default_slot_template, ctx, /*$$scope*/ ctx[7], null);

	return {
		c() {
			se_filtration_smart_view_more_facets_button = element("se-filtration-smart-view-more-facets-button");
			if (default_slot) default_slot.c();
			set_custom_element_data(se_filtration_smart_view_more_facets_button, "is-all-facets-visible", /*isAllFacetsVisible*/ ctx[0]);
			set_custom_element_data(se_filtration_smart_view_more_facets_button, "count", /*count*/ ctx[1]);
			set_custom_element_data(se_filtration_smart_view_more_facets_button, "view-more-label", /*viewMoreLabel*/ ctx[2]);
			set_custom_element_data(se_filtration_smart_view_more_facets_button, "view-less-label", /*viewLessLabel*/ ctx[3]);
		},
		m(target, anchor) {
			insert(target, se_filtration_smart_view_more_facets_button, anchor);

			if (default_slot) {
				default_slot.m(se_filtration_smart_view_more_facets_button, null);
			}

			/*se_filtration_smart_view_more_facets_button_binding*/ ctx[9](se_filtration_smart_view_more_facets_button);
			current = true;

			if (!mounted) {
				dispose = listen(se_filtration_smart_view_more_facets_button, "toggleViewMoreFacets", /*onEvent*/ ctx[5]);
				mounted = true;
			}
		},
		p(ctx, [dirty]) {
			if (default_slot) {
				if (default_slot.p && (!current || dirty & /*$$scope*/ 128)) {
					update_slot(default_slot, default_slot_template, ctx, /*$$scope*/ ctx[7], !current ? -1 : dirty, null, null);
				}
			}

			if (!current || dirty & /*isAllFacetsVisible*/ 1) {
				set_custom_element_data(se_filtration_smart_view_more_facets_button, "is-all-facets-visible", /*isAllFacetsVisible*/ ctx[0]);
			}

			if (!current || dirty & /*count*/ 2) {
				set_custom_element_data(se_filtration_smart_view_more_facets_button, "count", /*count*/ ctx[1]);
			}

			if (!current || dirty & /*viewMoreLabel*/ 4) {
				set_custom_element_data(se_filtration_smart_view_more_facets_button, "view-more-label", /*viewMoreLabel*/ ctx[2]);
			}

			if (!current || dirty & /*viewLessLabel*/ 8) {
				set_custom_element_data(se_filtration_smart_view_more_facets_button, "view-less-label", /*viewLessLabel*/ ctx[3]);
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
			if (detaching) detach(se_filtration_smart_view_more_facets_button);
			if (default_slot) default_slot.d(detaching);
			/*se_filtration_smart_view_more_facets_button_binding*/ ctx[9](null);
			mounted = false;
			dispose();
		}
	};
}

function instance($$self, $$props, $$invalidate) {
	let { $$slots: slots = {}, $$scope } = $$props;
	let __ref;
	let __mounted = false;
	const dispatch = createEventDispatcher();
	let { isAllFacetsVisible } = $$props;
	let { count } = $$props;
	let { viewMoreLabel } = $$props;
	let { viewLessLabel } = $$props;
	const getWebComponent = () => __ref;

	onMount(() => {
		__mounted = true;
	});

	const setProp = (prop, value) => {
		if (__ref) $$invalidate(4, __ref[prop] = value, __ref);
	};

	const onEvent = e => {
		e.stopPropagation();
		dispatch(e.type, e.detail);
	};

	function se_filtration_smart_view_more_facets_button_binding($$value) {
		binding_callbacks[$$value ? "unshift" : "push"](() => {
			__ref = $$value;
			$$invalidate(4, __ref);
		});
	}

	$$self.$$set = $$props => {
		if ("isAllFacetsVisible" in $$props) $$invalidate(0, isAllFacetsVisible = $$props.isAllFacetsVisible);
		if ("count" in $$props) $$invalidate(1, count = $$props.count);
		if ("viewMoreLabel" in $$props) $$invalidate(2, viewMoreLabel = $$props.viewMoreLabel);
		if ("viewLessLabel" in $$props) $$invalidate(3, viewLessLabel = $$props.viewLessLabel);
		if ("$$scope" in $$props) $$invalidate(7, $$scope = $$props.$$scope);
	};

	return [
		isAllFacetsVisible,
		count,
		viewMoreLabel,
		viewLessLabel,
		__ref,
		onEvent,
		getWebComponent,
		$$scope,
		slots,
		se_filtration_smart_view_more_facets_button_binding
	];
}

class SeFiltrationSmartViewMoreFacetsButton extends SvelteComponent {
  $$prop_def: SeFiltrationSmartViewMoreFacetsButtonProps;
  $$events_def: SeFiltrationSmartViewMoreFacetsButtonEvents;
  $$slot_def: SeFiltrationSmartViewMoreFacetsButtonSlots;

  $on<K extends keyof SeFiltrationSmartViewMoreFacetsButtonEvents>(type: K, callback: (e: SeFiltrationSmartViewMoreFacetsButtonEvents[K]) => any): () => void {
	  return super.$on(type, callback);
	}

  $set($$props: Partial<SeFiltrationSmartViewMoreFacetsButtonProps>): void {
	  super.$set($$props);
	}

	constructor(options) {
		super();

		init(this, options, instance, create_fragment, safe_not_equal, {
			isAllFacetsVisible: 0,
			count: 1,
			viewMoreLabel: 2,
			viewLessLabel: 3,
			getWebComponent: 6
		});
	}

	get isAllFacetsVisible() {
		return this.$$.ctx[0];
	}

	set isAllFacetsVisible(isAllFacetsVisible) {
		this.$set({ isAllFacetsVisible });
		flush();
	}

	get count() {
		return this.$$.ctx[1];
	}

	set count(count) {
		this.$set({ count });
		flush();
	}

	get viewMoreLabel() {
		return this.$$.ctx[2];
	}

	set viewMoreLabel(viewMoreLabel) {
		this.$set({ viewMoreLabel });
		flush();
	}

	get viewLessLabel() {
		return this.$$.ctx[3];
	}

	set viewLessLabel(viewLessLabel) {
		this.$set({ viewLessLabel });
		flush();
	}

	get getWebComponent(): HTMLSeFiltrationSmartViewMoreFacetsButtonElement | undefined {
		return this.$$.ctx[6];
	}
}

export default SeFiltrationSmartViewMoreFacetsButton;