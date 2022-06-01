/* eslint-disable */
/* tslint:disable */
// @ts-nocheck
import { Components, JSX } from '@se/web-ui';


interface SeTableProps {
  
  /** Define if we should show a compact view of the table, vs a version with larger spacing and font */
  compact?: Components.SeTable["compact"]
  
  /** Defines the vertical alignment of table items. */
  alignItems?: Components.SeTable["alignItems"]
}

interface SeTableEvents {
  
}

interface SeTableSlots {
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
	let se_table;
	let current;
	const default_slot_template = /*#slots*/ ctx[5].default;
	const default_slot = create_slot(default_slot_template, ctx, /*$$scope*/ ctx[4], null);

	return {
		c() {
			se_table = element("se-table");
			if (default_slot) default_slot.c();
			set_custom_element_data(se_table, "compact", /*compact*/ ctx[0]);
			set_custom_element_data(se_table, "align-items", /*alignItems*/ ctx[1]);
		},
		m(target, anchor) {
			insert(target, se_table, anchor);

			if (default_slot) {
				default_slot.m(se_table, null);
			}

			/*se_table_binding*/ ctx[6](se_table);
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

			if (!current || dirty & /*compact*/ 1) {
				set_custom_element_data(se_table, "compact", /*compact*/ ctx[0]);
			}

			if (!current || dirty & /*alignItems*/ 2) {
				set_custom_element_data(se_table, "align-items", /*alignItems*/ ctx[1]);
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
			if (detaching) detach(se_table);
			if (default_slot) default_slot.d(detaching);
			/*se_table_binding*/ ctx[6](null);
		}
	};
}

function instance($$self, $$props, $$invalidate) {
	let { $$slots: slots = {}, $$scope } = $$props;
	let __ref;
	let __mounted = false;
	const dispatch = createEventDispatcher();
	let { compact = undefined } = $$props;
	let { alignItems = undefined } = $$props;
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

	function se_table_binding($$value) {
		binding_callbacks[$$value ? 'unshift' : 'push'](() => {
			__ref = $$value;
			$$invalidate(2, __ref);
		});
	}

	$$self.$$set = $$props => {
		if ('compact' in $$props) $$invalidate(0, compact = $$props.compact);
		if ('alignItems' in $$props) $$invalidate(1, alignItems = $$props.alignItems);
		if ('$$scope' in $$props) $$invalidate(4, $$scope = $$props.$$scope);
	};

	return [compact, alignItems, __ref, getWebComponent, $$scope, slots, se_table_binding];
}

class SeTable extends SvelteComponent {
  $$prop_def: SeTableProps;
  $$events_def: SeTableEvents;
  $$slot_def: SeTableSlots;

  $on<K extends keyof SeTableEvents>(type: K, callback: (e: SeTableEvents[K]) => any): () => void {
	  return super.$on(type, callback);
	}

  $set($$props: Partial<SeTableProps>): void {
	  super.$set($$props);
	}

	constructor(options) {
		super();

		init(this, options, instance, create_fragment, safe_not_equal, {
			compact: 0,
			alignItems: 1,
			getWebComponent: 3
		});
	}

	get compact() {
		return this.$$.ctx[0];
	}

	set compact(compact) {
		this.$$set({ compact });
		flush();
	}

	get alignItems() {
		return this.$$.ctx[1];
	}

	set alignItems(alignItems) {
		this.$$set({ alignItems });
		flush();
	}

	get getWebComponent(): HTMLSeTableElement | undefined {
		return this.$$.ctx[3];
	}
}

export default SeTable;