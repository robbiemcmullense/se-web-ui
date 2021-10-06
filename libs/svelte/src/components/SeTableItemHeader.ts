/* eslint-disable */
/* tslint:disable */
// @ts-nocheck
import { Components, JSX } from '@se/web-ui';


interface SeTableItemHeaderProps {
  
  /** Defines the specific flex-basis of a block. */
  flex?: Components.SeTableItemHeader["flex"]
  
  /** Defines the specific width of a block, for items that should not be flexible. */
  width?: Components.SeTableItemHeader["width"]
  
  /** Defines the  min-width of a block to insure that a scroll appear if too many column are in the table. Only necessary if using flex. */
  minWidth?: Components.SeTableItemHeader["minWidth"]
  
  /** Optional property defines the tag type within the `se-table-item`.
Default value `false` defines the tag type as `div`.
`true` defines the tag type as a `button`. */
  clickable?: Components.SeTableItemHeader["clickable"]
  
  /** Optional property that provides the arrow icon based on which string is provided, and also causes the `clickable` property to `true`.
`asc` defines the icon as an upwards arrow in black.
`desc` defines the icon as a downwards arrow in black.
`none` defines the icon as an upwards arrow in grey. */
  sort?: Components.SeTableItemHeader["sort"]
  
  /** Optional property defines whether the column is resizable or not.
Default value `false` defines column as not resizable
`true` defines column is resizable */
  resizable?: Components.SeTableItemHeader["resizable"]
}

interface SeTableItemHeaderEvents {
  
  /** Event emitted to notify the table-group-header component that the width has changed. */
  didWidthChange: Parameters<JSX.SeTableItemHeader["onDidWidthChange"]>[0]
}

interface SeTableItemHeaderSlots {
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
	listen,
	safe_not_equal,
	set_custom_element_data,
	transition_in,
	transition_out,
	update_slot_base
} from "svelte/internal";

import { createEventDispatcher, onMount } from 'svelte';

function create_fragment(ctx) {
	let se_table_item_header;
	let current;
	let mounted;
	let dispose;
	const default_slot_template = /*#slots*/ ctx[10].default;
	const default_slot = create_slot(default_slot_template, ctx, /*$$scope*/ ctx[9], null);

	return {
		c() {
			se_table_item_header = element("se-table-item-header");
			if (default_slot) default_slot.c();
			set_custom_element_data(se_table_item_header, "flex", /*flex*/ ctx[0]);
			set_custom_element_data(se_table_item_header, "width", /*width*/ ctx[1]);
			set_custom_element_data(se_table_item_header, "min-width", /*minWidth*/ ctx[2]);
			set_custom_element_data(se_table_item_header, "clickable", /*clickable*/ ctx[3]);
			set_custom_element_data(se_table_item_header, "sort", /*sort*/ ctx[4]);
			set_custom_element_data(se_table_item_header, "resizable", /*resizable*/ ctx[5]);
		},
		m(target, anchor) {
			insert(target, se_table_item_header, anchor);

			if (default_slot) {
				default_slot.m(se_table_item_header, null);
			}

			/*se_table_item_header_binding*/ ctx[11](se_table_item_header);
			current = true;

			if (!mounted) {
				dispose = listen(se_table_item_header, "didWidthChange", /*onEvent*/ ctx[7]);
				mounted = true;
			}
		},
		p(ctx, [dirty]) {
			if (default_slot) {
				if (default_slot.p && (!current || dirty & /*$$scope*/ 512)) {
					update_slot_base(
						default_slot,
						default_slot_template,
						ctx,
						/*$$scope*/ ctx[9],
						!current
						? get_all_dirty_from_scope(/*$$scope*/ ctx[9])
						: get_slot_changes(default_slot_template, /*$$scope*/ ctx[9], dirty, null),
						null
					);
				}
			}

			if (!current || dirty & /*flex*/ 1) {
				set_custom_element_data(se_table_item_header, "flex", /*flex*/ ctx[0]);
			}

			if (!current || dirty & /*width*/ 2) {
				set_custom_element_data(se_table_item_header, "width", /*width*/ ctx[1]);
			}

			if (!current || dirty & /*minWidth*/ 4) {
				set_custom_element_data(se_table_item_header, "min-width", /*minWidth*/ ctx[2]);
			}

			if (!current || dirty & /*clickable*/ 8) {
				set_custom_element_data(se_table_item_header, "clickable", /*clickable*/ ctx[3]);
			}

			if (!current || dirty & /*sort*/ 16) {
				set_custom_element_data(se_table_item_header, "sort", /*sort*/ ctx[4]);
			}

			if (!current || dirty & /*resizable*/ 32) {
				set_custom_element_data(se_table_item_header, "resizable", /*resizable*/ ctx[5]);
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
			if (detaching) detach(se_table_item_header);
			if (default_slot) default_slot.d(detaching);
			/*se_table_item_header_binding*/ ctx[11](null);
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
	let { flex = undefined } = $$props;
	let { width = undefined } = $$props;
	let { minWidth = undefined } = $$props;
	let { clickable = undefined } = $$props;
	let { sort = undefined } = $$props;
	let { resizable = undefined } = $$props;
	const getWebComponent = () => __ref;

	onMount(() => {
		__mounted = true;
	});

	const setProp = (prop, value) => {
		if (__ref) $$invalidate(6, __ref[prop] = value, __ref);
	};

	const onEvent = e => {
		e.stopPropagation();
		dispatch(e.type, e.detail);
	};

	function se_table_item_header_binding($$value) {
		binding_callbacks[$$value ? 'unshift' : 'push'](() => {
			__ref = $$value;
			$$invalidate(6, __ref);
		});
	}

	$$self.$$set = $$props => {
		if ('flex' in $$props) $$invalidate(0, flex = $$props.flex);
		if ('width' in $$props) $$invalidate(1, width = $$props.width);
		if ('minWidth' in $$props) $$invalidate(2, minWidth = $$props.minWidth);
		if ('clickable' in $$props) $$invalidate(3, clickable = $$props.clickable);
		if ('sort' in $$props) $$invalidate(4, sort = $$props.sort);
		if ('resizable' in $$props) $$invalidate(5, resizable = $$props.resizable);
		if ('$$scope' in $$props) $$invalidate(9, $$scope = $$props.$$scope);
	};

	return [
		flex,
		width,
		minWidth,
		clickable,
		sort,
		resizable,
		__ref,
		onEvent,
		getWebComponent,
		$$scope,
		slots,
		se_table_item_header_binding
	];
}

class SeTableItemHeader extends SvelteComponent {
  $$prop_def: SeTableItemHeaderProps;
  $$events_def: SeTableItemHeaderEvents;
  $$slot_def: SeTableItemHeaderSlots;

  $on<K extends keyof SeTableItemHeaderEvents>(type: K, callback: (e: SeTableItemHeaderEvents[K]) => any): () => void {
	  return super.$on(type, callback);
	}

  $set($$props: Partial<SeTableItemHeaderProps>): void {
	  super.$set($$props);
	}

	constructor(options) {
		super();

		init(this, options, instance, create_fragment, safe_not_equal, {
			flex: 0,
			width: 1,
			minWidth: 2,
			clickable: 3,
			sort: 4,
			resizable: 5,
			getWebComponent: 8
		});
	}

	get flex() {
		return this.$$.ctx[0];
	}

	set flex(flex) {
		this.$$set({ flex });
		flush();
	}

	get width() {
		return this.$$.ctx[1];
	}

	set width(width) {
		this.$$set({ width });
		flush();
	}

	get minWidth() {
		return this.$$.ctx[2];
	}

	set minWidth(minWidth) {
		this.$$set({ minWidth });
		flush();
	}

	get clickable() {
		return this.$$.ctx[3];
	}

	set clickable(clickable) {
		this.$$set({ clickable });
		flush();
	}

	get sort() {
		return this.$$.ctx[4];
	}

	set sort(sort) {
		this.$$set({ sort });
		flush();
	}

	get resizable() {
		return this.$$.ctx[5];
	}

	set resizable(resizable) {
		this.$$set({ resizable });
		flush();
	}

	get getWebComponent(): HTMLSeTableItemHeaderElement | undefined {
		return this.$$.ctx[8];
	}
}

export default SeTableItemHeader;