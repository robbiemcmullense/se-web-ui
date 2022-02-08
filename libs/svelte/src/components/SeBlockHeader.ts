/* eslint-disable */
/* tslint:disable */
// @ts-nocheck
import { Components, JSX } from '@se/web-ui';


interface SeBlockHeaderProps {
  
  /** Defines whether or not a divider will be applied to the se-block-header.
The se-block component's divider property will be applied to the se-block-header component. */
  divider?: Components.SeBlockHeader["divider"]
  
  /** Defines the visual appearance of a header.
Updated automatically by the `se-block` component when the option is set to `card`, which will update the design of the header with respect to the card design.
`fill` removes all spacing, for example with use of the `se-tabbar` option `content`. */
  option?: Components.SeBlockHeader["option"]
}

interface SeBlockHeaderEvents {
  
}

interface SeBlockHeaderSlots {
  default: any
}
  
/* generated by Svelte v3.46.4 */
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
	let se_block_header;
	let current;
	const default_slot_template = /*#slots*/ ctx[5].default;
	const default_slot = create_slot(default_slot_template, ctx, /*$$scope*/ ctx[4], null);

	return {
		c() {
			se_block_header = element("se-block-header");
			if (default_slot) default_slot.c();
			set_custom_element_data(se_block_header, "divider", /*divider*/ ctx[0]);
			set_custom_element_data(se_block_header, "option", /*option*/ ctx[1]);
		},
		m(target, anchor) {
			insert(target, se_block_header, anchor);

			if (default_slot) {
				default_slot.m(se_block_header, null);
			}

			/*se_block_header_binding*/ ctx[6](se_block_header);
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

			if (!current || dirty & /*divider*/ 1) {
				set_custom_element_data(se_block_header, "divider", /*divider*/ ctx[0]);
			}

			if (!current || dirty & /*option*/ 2) {
				set_custom_element_data(se_block_header, "option", /*option*/ ctx[1]);
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
			if (detaching) detach(se_block_header);
			if (default_slot) default_slot.d(detaching);
			/*se_block_header_binding*/ ctx[6](null);
		}
	};
}

function instance($$self, $$props, $$invalidate) {
	let { $$slots: slots = {}, $$scope } = $$props;
	let __ref;
	let __mounted = false;
	const dispatch = createEventDispatcher();
	let { divider = undefined } = $$props;
	let { option = undefined } = $$props;
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

	function se_block_header_binding($$value) {
		binding_callbacks[$$value ? 'unshift' : 'push'](() => {
			__ref = $$value;
			$$invalidate(2, __ref);
		});
	}

	$$self.$$set = $$props => {
		if ('divider' in $$props) $$invalidate(0, divider = $$props.divider);
		if ('option' in $$props) $$invalidate(1, option = $$props.option);
		if ('$$scope' in $$props) $$invalidate(4, $$scope = $$props.$$scope);
	};

	return [
		divider,
		option,
		__ref,
		getWebComponent,
		$$scope,
		slots,
		se_block_header_binding
	];
}

class SeBlockHeader extends SvelteComponent {
  $$prop_def: SeBlockHeaderProps;
  $$events_def: SeBlockHeaderEvents;
  $$slot_def: SeBlockHeaderSlots;

  $on<K extends keyof SeBlockHeaderEvents>(type: K, callback: (e: SeBlockHeaderEvents[K]) => any): () => void {
	  return super.$on(type, callback);
	}

  $set($$props: Partial<SeBlockHeaderProps>): void {
	  super.$set($$props);
	}

	constructor(options) {
		super();

		init(this, options, instance, create_fragment, safe_not_equal, {
			divider: 0,
			option: 1,
			getWebComponent: 3
		});
	}

	get divider() {
		return this.$$.ctx[0];
	}

	set divider(divider) {
		this.$$set({ divider });
		flush();
	}

	get option() {
		return this.$$.ctx[1];
	}

	set option(option) {
		this.$$set({ option });
		flush();
	}

	get getWebComponent(): HTMLSeBlockHeaderElement | undefined {
		return this.$$.ctx[3];
	}
}

export default SeBlockHeader;