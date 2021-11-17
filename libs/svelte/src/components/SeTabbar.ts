/* eslint-disable */
/* tslint:disable */
// @ts-nocheck
import { Components, JSX } from '@se/web-ui';


interface SeTabbarProps {
  
  /** Defines the function of the tabbar.
Default `nav` creates a tab bar that functions as a nav-bar.
`content` creates a ta bbar that functions as a content section tab bar. */
  option?: Components.SeTabbar["option"]
  
  /** Indicates the overflow behavior of your tab bar.
Default setting is `scroll`, keeping all tabs in one horizontal row.
The `stack` setting allows your tabbar content wrap to new lines.
The `compact` setting allows your tabbar content to scroll, but all stack the text together as much as possible. */
  overflow?: Components.SeTabbar["overflow"]
  
  /** Indicates the color of your tab bar.
Default setting is `primary`, rendering a green background for nav-bars and ultra-light-grey-1 for content.
The `alternative` setting renders a white background. */
  color?: Components.SeTabbar["color"]
}

interface SeTabbarEvents {
  
}

interface SeTabbarSlots {
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
	safe_not_equal,
	set_custom_element_data,
	transition_in,
	transition_out,
	update_slot_base
} from "svelte/internal";

import { createEventDispatcher, onMount } from 'svelte';

function create_fragment(ctx) {
	let se_tabbar;
	let current;
	const default_slot_template = /*#slots*/ ctx[6].default;
	const default_slot = create_slot(default_slot_template, ctx, /*$$scope*/ ctx[5], null);

	return {
		c() {
			se_tabbar = element("se-tabbar");
			if (default_slot) default_slot.c();
			set_custom_element_data(se_tabbar, "option", /*option*/ ctx[0]);
			set_custom_element_data(se_tabbar, "overflow", /*overflow*/ ctx[1]);
			set_custom_element_data(se_tabbar, "color", /*color*/ ctx[2]);
		},
		m(target, anchor) {
			insert(target, se_tabbar, anchor);

			if (default_slot) {
				default_slot.m(se_tabbar, null);
			}

			/*se_tabbar_binding*/ ctx[7](se_tabbar);
			current = true;
		},
		p(ctx, [dirty]) {
			if (default_slot) {
				if (default_slot.p && (!current || dirty & /*$$scope*/ 32)) {
					update_slot_base(
						default_slot,
						default_slot_template,
						ctx,
						/*$$scope*/ ctx[5],
						!current
						? get_all_dirty_from_scope(/*$$scope*/ ctx[5])
						: get_slot_changes(default_slot_template, /*$$scope*/ ctx[5], dirty, null),
						null
					);
				}
			}

			if (!current || dirty & /*option*/ 1) {
				set_custom_element_data(se_tabbar, "option", /*option*/ ctx[0]);
			}

			if (!current || dirty & /*overflow*/ 2) {
				set_custom_element_data(se_tabbar, "overflow", /*overflow*/ ctx[1]);
			}

			if (!current || dirty & /*color*/ 4) {
				set_custom_element_data(se_tabbar, "color", /*color*/ ctx[2]);
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
			if (detaching) detach(se_tabbar);
			if (default_slot) default_slot.d(detaching);
			/*se_tabbar_binding*/ ctx[7](null);
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
	let { color = undefined } = $$props;
	const getWebComponent = () => __ref;

	onMount(() => {
		__mounted = true;
	});

	const setProp = (prop, value) => {
		if (__ref) $$invalidate(3, __ref[prop] = value, __ref);
	};

	const onEvent = e => {
		e.stopPropagation();
		dispatch(e.type, e.detail);
	};

	function se_tabbar_binding($$value) {
		binding_callbacks[$$value ? 'unshift' : 'push'](() => {
			__ref = $$value;
			$$invalidate(3, __ref);
		});
	}

	$$self.$$set = $$props => {
		if ('option' in $$props) $$invalidate(0, option = $$props.option);
		if ('overflow' in $$props) $$invalidate(1, overflow = $$props.overflow);
		if ('color' in $$props) $$invalidate(2, color = $$props.color);
		if ('$$scope' in $$props) $$invalidate(5, $$scope = $$props.$$scope);
	};

	return [
		option,
		overflow,
		color,
		__ref,
		getWebComponent,
		$$scope,
		slots,
		se_tabbar_binding
	];
}

class SeTabbar extends SvelteComponent {
  $$prop_def: SeTabbarProps;
  $$events_def: SeTabbarEvents;
  $$slot_def: SeTabbarSlots;

  $on<K extends keyof SeTabbarEvents>(type: K, callback: (e: SeTabbarEvents[K]) => any): () => void {
	  return super.$on(type, callback);
	}

  $set($$props: Partial<SeTabbarProps>): void {
	  super.$set($$props);
	}

	constructor(options) {
		super();

		init(this, options, instance, create_fragment, safe_not_equal, {
			option: 0,
			overflow: 1,
			color: 2,
			getWebComponent: 4
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

	get color() {
		return this.$$.ctx[2];
	}

	set color(color) {
		this.$$set({ color });
		flush();
	}

	get getWebComponent(): HTMLSeTabbarElement | undefined {
		return this.$$.ctx[4];
	}
}

export default SeTabbar;