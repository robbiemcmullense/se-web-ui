/* eslint-disable */
/* tslint:disable */
// @ts-nocheck
import { Components, JSX } from '@se/web-ui';


interface SeDividerProps {
  
  /** Indicates the visual appearance of your divider line.  Default setting is `horizontal`. */
  option?: Components.SeDivider["option"]
  
  /** Indicates the color schema of your divider line.
Default setting is `standard`, rendering a light gray colored line.
The `alternative` property sets a white colored divider line. */
  color?: Components.SeDivider["color"]
}

interface SeDividerEvents {
  
}

interface SeDividerSlots {
  default: any
}
  
/* generated by Svelte v3.38.2 */
import {
	SvelteComponent,
	binding_callbacks,
	create_slot,
	detach,
	element,
	flush,
	init,
	insert,
	safe_not_equal,
	set_custom_element_data,
	transition_in,
	transition_out,
	update_slot
} from "svelte/internal";

import { createEventDispatcher, onMount } from "svelte";

function create_fragment(ctx) {
	let se_divider;
	let current;
	const default_slot_template = /*#slots*/ ctx[5].default;
	const default_slot = create_slot(default_slot_template, ctx, /*$$scope*/ ctx[4], null);

	return {
		c() {
			se_divider = element("se-divider");
			if (default_slot) default_slot.c();
			set_custom_element_data(se_divider, "option", /*option*/ ctx[0]);
			set_custom_element_data(se_divider, "color", /*color*/ ctx[1]);
		},
		m(target, anchor) {
			insert(target, se_divider, anchor);

			if (default_slot) {
				default_slot.m(se_divider, null);
			}

			/*se_divider_binding*/ ctx[6](se_divider);
			current = true;
		},
		p(ctx, [dirty]) {
			if (default_slot) {
				if (default_slot.p && (!current || dirty & /*$$scope*/ 16)) {
					update_slot(default_slot, default_slot_template, ctx, /*$$scope*/ ctx[4], dirty, null, null);
				}
			}

			if (!current || dirty & /*option*/ 1) {
				set_custom_element_data(se_divider, "option", /*option*/ ctx[0]);
			}

			if (!current || dirty & /*color*/ 2) {
				set_custom_element_data(se_divider, "color", /*color*/ ctx[1]);
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
			if (detaching) detach(se_divider);
			if (default_slot) default_slot.d(detaching);
			/*se_divider_binding*/ ctx[6](null);
		}
	};
}

function instance($$self, $$props, $$invalidate) {
	let { $$slots: slots = {}, $$scope } = $$props;
	let __ref;
	let __mounted = false;
	const dispatch = createEventDispatcher();
	let { option = undefined } = $$props;
	let { color = undefined } = $$props;
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

	function se_divider_binding($$value) {
		binding_callbacks[$$value ? "unshift" : "push"](() => {
			__ref = $$value;
			$$invalidate(2, __ref);
		});
	}

	$$self.$$set = $$props => {
		if ("option" in $$props) $$invalidate(0, option = $$props.option);
		if ("color" in $$props) $$invalidate(1, color = $$props.color);
		if ("$$scope" in $$props) $$invalidate(4, $$scope = $$props.$$scope);
	};

	return [option, color, __ref, getWebComponent, $$scope, slots, se_divider_binding];
}

class SeDivider extends SvelteComponent {
  $$prop_def: SeDividerProps;
  $$events_def: SeDividerEvents;
  $$slot_def: SeDividerSlots;

  $on<K extends keyof SeDividerEvents>(type: K, callback: (e: SeDividerEvents[K]) => any): () => void {
	  return super.$on(type, callback);
	}

  $set($$props: Partial<SeDividerProps>): void {
	  super.$set($$props);
	}

	constructor(options) {
		super();
		init(this, options, instance, create_fragment, safe_not_equal, { option: 0, color: 1, getWebComponent: 3 });
	}

	get option() {
		return this.$$.ctx[0];
	}

	set option(option) {
		this.$set({ option });
		flush();
	}

	get color() {
		return this.$$.ctx[1];
	}

	set color(color) {
		this.$set({ color });
		flush();
	}

	get getWebComponent(): HTMLSeDividerElement | undefined {
		return this.$$.ctx[3];
	}
}

export default SeDivider;