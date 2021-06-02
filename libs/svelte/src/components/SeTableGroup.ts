/* eslint-disable */
/* tslint:disable */
// @ts-nocheck
import { Components, JSX } from '@se/web-ui';


interface SeTableGroupProps {
  
  /** Indicates whether or not the `se-table-group` is selectable.  Set to `false` by default. */
  selectable?: Components.SeTableGroup["selectable"]
  
  /** Indicates whether or not the `se-table-group` is selected.  Set to `false` by default. */
  selected?: Components.SeTableGroup["selected"]
}

interface SeTableGroupEvents {
  
}

interface SeTableGroupSlots {
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
	let se_table_group;
	let current;
	const default_slot_template = /*#slots*/ ctx[5].default;
	const default_slot = create_slot(default_slot_template, ctx, /*$$scope*/ ctx[4], null);

	return {
		c() {
			se_table_group = element("se-table-group");
			if (default_slot) default_slot.c();
			set_custom_element_data(se_table_group, "selectable", /*selectable*/ ctx[0]);
			set_custom_element_data(se_table_group, "selected", /*selected*/ ctx[1]);
		},
		m(target, anchor) {
			insert(target, se_table_group, anchor);

			if (default_slot) {
				default_slot.m(se_table_group, null);
			}

			/*se_table_group_binding*/ ctx[6](se_table_group);
			current = true;
		},
		p(ctx, [dirty]) {
			if (default_slot) {
				if (default_slot.p && (!current || dirty & /*$$scope*/ 16)) {
					update_slot(default_slot, default_slot_template, ctx, /*$$scope*/ ctx[4], dirty, null, null);
				}
			}

			if (!current || dirty & /*selectable*/ 1) {
				set_custom_element_data(se_table_group, "selectable", /*selectable*/ ctx[0]);
			}

			if (!current || dirty & /*selected*/ 2) {
				set_custom_element_data(se_table_group, "selected", /*selected*/ ctx[1]);
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
			if (detaching) detach(se_table_group);
			if (default_slot) default_slot.d(detaching);
			/*se_table_group_binding*/ ctx[6](null);
		}
	};
}

function instance($$self, $$props, $$invalidate) {
	let { $$slots: slots = {}, $$scope } = $$props;
	let __ref;
	let __mounted = false;
	const dispatch = createEventDispatcher();
	let { selectable = undefined } = $$props;
	let { selected = undefined } = $$props;
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

	function se_table_group_binding($$value) {
		binding_callbacks[$$value ? "unshift" : "push"](() => {
			__ref = $$value;
			$$invalidate(2, __ref);
		});
	}

	$$self.$$set = $$props => {
		if ("selectable" in $$props) $$invalidate(0, selectable = $$props.selectable);
		if ("selected" in $$props) $$invalidate(1, selected = $$props.selected);
		if ("$$scope" in $$props) $$invalidate(4, $$scope = $$props.$$scope);
	};

	return [
		selectable,
		selected,
		__ref,
		getWebComponent,
		$$scope,
		slots,
		se_table_group_binding
	];
}

class SeTableGroup extends SvelteComponent {
  $$prop_def: SeTableGroupProps;
  $$events_def: SeTableGroupEvents;
  $$slot_def: SeTableGroupSlots;

  $on<K extends keyof SeTableGroupEvents>(type: K, callback: (e: SeTableGroupEvents[K]) => any): () => void {
	  return super.$on(type, callback);
	}

  $set($$props: Partial<SeTableGroupProps>): void {
	  super.$set($$props);
	}

	constructor(options) {
		super();

		init(this, options, instance, create_fragment, safe_not_equal, {
			selectable: 0,
			selected: 1,
			getWebComponent: 3
		});
	}

	get selectable() {
		return this.$$.ctx[0];
	}

	set selectable(selectable) {
		this.$set({ selectable });
		flush();
	}

	get selected() {
		return this.$$.ctx[1];
	}

	set selected(selected) {
		this.$set({ selected });
		flush();
	}

	get getWebComponent(): HTMLSeTableGroupElement | undefined {
		return this.$$.ctx[3];
	}
}

export default SeTableGroup;