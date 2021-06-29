/* eslint-disable */
/* tslint:disable */
// @ts-nocheck
import { Components, JSX } from '@se/web-ui';


interface SeTableItemProps {
  
  /**  */
  option?: Components.SeTableItem["option"]
  
  /** Defines the specific flex-basis of a block. */
  flex?: Components.SeTableItem["flex"]
  
  /** Defines the specific width of a block, for items that should not be flexible. */
  width?: Components.SeTableItem["width"]
  
  /** Defines the  min-width of a block to insure that a scroll appear if too many column are in the table. Only necessary if using flex. */
  minWidth?: Components.SeTableItem["minWidth"]
  
  /** Optional property defines the tag type within the `se-table-item`.
Default value `false` defines the tag type as `div`.
`true` defines the tag type as a `button`. */
  clickable?: Components.SeTableItem["clickable"]
}

interface SeTableItemEvents {
  
}

interface SeTableItemSlots {
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
	safe_not_equal,
	set_custom_element_data,
	transition_in,
	transition_out,
	update_slot
} from "svelte/internal";

import { createEventDispatcher, onMount } from "svelte";

function create_fragment(ctx) {
	let se_table_item;
	let current;
	const default_slot_template = /*#slots*/ ctx[8].default;
	const default_slot = create_slot(default_slot_template, ctx, /*$$scope*/ ctx[7], null);

	return {
		c() {
			se_table_item = element("se-table-item");
			if (default_slot) default_slot.c();
			set_custom_element_data(se_table_item, "option", /*option*/ ctx[0]);
			set_custom_element_data(se_table_item, "flex", /*flex*/ ctx[1]);
			set_custom_element_data(se_table_item, "width", /*width*/ ctx[2]);
			set_custom_element_data(se_table_item, "min-width", /*minWidth*/ ctx[3]);
			set_custom_element_data(se_table_item, "clickable", /*clickable*/ ctx[4]);
		},
		m(target, anchor) {
			insert(target, se_table_item, anchor);

			if (default_slot) {
				default_slot.m(se_table_item, null);
			}

			/*se_table_item_binding*/ ctx[9](se_table_item);
			current = true;
		},
		p(ctx, [dirty]) {
			if (default_slot) {
				if (default_slot.p && (!current || dirty & /*$$scope*/ 128)) {
					update_slot(default_slot, default_slot_template, ctx, /*$$scope*/ ctx[7], !current ? -1 : dirty, null, null);
				}
			}

			if (!current || dirty & /*option*/ 1) {
				set_custom_element_data(se_table_item, "option", /*option*/ ctx[0]);
			}

			if (!current || dirty & /*flex*/ 2) {
				set_custom_element_data(se_table_item, "flex", /*flex*/ ctx[1]);
			}

			if (!current || dirty & /*width*/ 4) {
				set_custom_element_data(se_table_item, "width", /*width*/ ctx[2]);
			}

			if (!current || dirty & /*minWidth*/ 8) {
				set_custom_element_data(se_table_item, "min-width", /*minWidth*/ ctx[3]);
			}

			if (!current || dirty & /*clickable*/ 16) {
				set_custom_element_data(se_table_item, "clickable", /*clickable*/ ctx[4]);
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
			if (detaching) detach(se_table_item);
			if (default_slot) default_slot.d(detaching);
			/*se_table_item_binding*/ ctx[9](null);
		}
	};
}

function instance($$self, $$props, $$invalidate) {
	let { $$slots: slots = {}, $$scope } = $$props;
	let __ref;
	let __mounted = false;
	const dispatch = createEventDispatcher();
	let { option = undefined } = $$props;
	let { flex = undefined } = $$props;
	let { width = undefined } = $$props;
	let { minWidth = undefined } = $$props;
	let { clickable = undefined } = $$props;
	const getWebComponent = () => __ref;

	onMount(() => {
		__mounted = true;
	});

	const setProp = (prop, value) => {
		if (__ref) $$invalidate(5, __ref[prop] = value, __ref);
	};

	const onEvent = e => {
		e.stopPropagation();
		dispatch(e.type, e.detail);
	};

	function se_table_item_binding($$value) {
		binding_callbacks[$$value ? "unshift" : "push"](() => {
			__ref = $$value;
			$$invalidate(5, __ref);
		});
	}

	$$self.$$set = $$props => {
		if ("option" in $$props) $$invalidate(0, option = $$props.option);
		if ("flex" in $$props) $$invalidate(1, flex = $$props.flex);
		if ("width" in $$props) $$invalidate(2, width = $$props.width);
		if ("minWidth" in $$props) $$invalidate(3, minWidth = $$props.minWidth);
		if ("clickable" in $$props) $$invalidate(4, clickable = $$props.clickable);
		if ("$$scope" in $$props) $$invalidate(7, $$scope = $$props.$$scope);
	};

	return [
		option,
		flex,
		width,
		minWidth,
		clickable,
		__ref,
		getWebComponent,
		$$scope,
		slots,
		se_table_item_binding
	];
}

class SeTableItem extends SvelteComponent {
  $$prop_def: SeTableItemProps;
  $$events_def: SeTableItemEvents;
  $$slot_def: SeTableItemSlots;

  $on<K extends keyof SeTableItemEvents>(type: K, callback: (e: SeTableItemEvents[K]) => any): () => void {
	  return super.$on(type, callback);
	}

  $set($$props: Partial<SeTableItemProps>): void {
	  super.$set($$props);
	}

	constructor(options) {
		super();

		init(this, options, instance, create_fragment, safe_not_equal, {
			option: 0,
			flex: 1,
			width: 2,
			minWidth: 3,
			clickable: 4,
			getWebComponent: 6
		});
	}

	get option() {
		return this.$$.ctx[0];
	}

	set option(option) {
		this.$set({ option });
		flush();
	}

	get flex() {
		return this.$$.ctx[1];
	}

	set flex(flex) {
		this.$set({ flex });
		flush();
	}

	get width() {
		return this.$$.ctx[2];
	}

	set width(width) {
		this.$set({ width });
		flush();
	}

	get minWidth() {
		return this.$$.ctx[3];
	}

	set minWidth(minWidth) {
		this.$set({ minWidth });
		flush();
	}

	get clickable() {
		return this.$$.ctx[4];
	}

	set clickable(clickable) {
		this.$set({ clickable });
		flush();
	}

	get getWebComponent(): HTMLSeTableItemElement | undefined {
		return this.$$.ctx[6];
	}
}

export default SeTableItem;