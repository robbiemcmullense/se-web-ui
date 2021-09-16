/* eslint-disable */
/* tslint:disable */
// @ts-nocheck
import { Components, JSX } from '@se/web-ui';


interface SeTabProps {
  
  /** Defines the function of the tabbar.
Default `nav` creates a tab bar that functions as a nav-bar.
`content` creates a ta bbar that functions as a content section tab bar. */
  option?: Components.SeTab["option"]
  
  /** Indicates the overflow behavior of your tab bar.
Default setting is `scroll`, keeping all tabs in one horizontal row.
The `stack` setting allows your tabbar content wrap to new lines.
The `compact` setting allows your tabbar content to scroll, but all stack the text together as much as possible. */
  overflow?: Components.SeTab["overflow"]
}

interface SeTabEvents {
  
}

interface SeTabSlots {
  default: any
}
  
/* generated by Svelte v3.42.6 */
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
	safe_not_equal,
	set_custom_element_data,
	transition_in,
	transition_out,
	update_slot_base
} from "svelte/internal";

import { createEventDispatcher, onMount } from 'svelte';

function create_fragment(ctx) {
	let se_tab;
	let current;
	const default_slot_template = /*#slots*/ ctx[5].default;
	const default_slot = create_slot(default_slot_template, ctx, /*$$scope*/ ctx[4], null);

	return {
		c() {
			se_tab = element("se-tab");
			if (default_slot) default_slot.c();
			set_custom_element_data(se_tab, "option", /*option*/ ctx[0]);
			set_custom_element_data(se_tab, "overflow", /*overflow*/ ctx[1]);
		},
		m(target, anchor) {
			insert(target, se_tab, anchor);

			if (default_slot) {
				default_slot.m(se_tab, null);
			}

			/*se_tab_binding*/ ctx[6](se_tab);
			current = true;
		},
		p(ctx, [dirty]) {
			if (default_slot) {
				if (default_slot.p && (!current || dirty & /*$$scope*/ 16)) {
					update_slot_base(
						default_slot,
						default_slot_template,
						ctx,
						/*$$scope*/ ctx[4],
						!current
						? get_all_dirty_from_scope(/*$$scope*/ ctx[4])
						: get_slot_changes(default_slot_template, /*$$scope*/ ctx[4], dirty, null),
						null
					);
				}
			}

			if (!current || dirty & /*option*/ 1) {
				set_custom_element_data(se_tab, "option", /*option*/ ctx[0]);
			}

			if (!current || dirty & /*overflow*/ 2) {
				set_custom_element_data(se_tab, "overflow", /*overflow*/ ctx[1]);
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
			if (detaching) detach(se_tab);
			if (default_slot) default_slot.d(detaching);
			/*se_tab_binding*/ ctx[6](null);
		}
	};
}

function instance($$self, $$props, $$invalidate) {
	let { $$slots: slots = {}, $$scope } = $$props;
	let __ref;
	let __mounted = false;
	const dispatch = createEventDispatcher();
	let { option = undefined } = $$props;
	let { overflow = undefined } = $$props;
	const getWebComponent = () => __ref;

	onMount(() => {
		__mounted = true;
	});

	const setProp = (prop, value) => {
		if (__ref) $$invalidate(2, __ref[prop] = value, __ref);
	};

	const onEvent = e => {
		e.stopPropagation();
		dispatch(e.type, e.detail);
	};

	function se_tab_binding($$value) {
		binding_callbacks[$$value ? 'unshift' : 'push'](() => {
			__ref = $$value;
			$$invalidate(2, __ref);
		});
	}

	$$self.$$set = $$props => {
		if ('option' in $$props) $$invalidate(0, option = $$props.option);
		if ('overflow' in $$props) $$invalidate(1, overflow = $$props.overflow);
		if ('$$scope' in $$props) $$invalidate(4, $$scope = $$props.$$scope);
	};

	return [option, overflow, __ref, getWebComponent, $$scope, slots, se_tab_binding];
}

class SeTab extends SvelteComponent {
  $$prop_def: SeTabProps;
  $$events_def: SeTabEvents;
  $$slot_def: SeTabSlots;

  $on<K extends keyof SeTabEvents>(type: K, callback: (e: SeTabEvents[K]) => any): () => void {
	  return super.$on(type, callback);
	}

  $set($$props: Partial<SeTabProps>): void {
	  super.$set($$props);
	}

	constructor(options) {
		super();

		init(this, options, instance, create_fragment, safe_not_equal, {
			option: 0,
			overflow: 1,
			getWebComponent: 3
		});
	}

	get option() {
		return this.$$.ctx[0];
	}

	set option(option) {
		this.$$set({ option });
		flush();
	}

	get overflow() {
		return this.$$.ctx[1];
	}

	set overflow(overflow) {
		this.$$set({ overflow });
		flush();
	}

	get getWebComponent(): HTMLSeTabElement | undefined {
		return this.$$.ctx[3];
	}
}

export default SeTab;