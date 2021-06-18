/* eslint-disable */
/* tslint:disable */
// @ts-nocheck
import { Components, JSX } from '@se/web-ui';


interface SeListProps {
  
  /** Defines the style of the list.  The default setting is `classic`. */
  option?: Components.SeList["option"]
  
  /** Defines if the list element should be selected or not. */
  selectedColor?: Components.SeList["selectedColor"]
  
  /** Defines if list groups can be collapsed.  The default setting is `true`. */
  canCollapse?: Components.SeList["canCollapse"]
}

interface SeListEvents {
  
}

interface SeListSlots {
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
	let se_list;
	let current;
	const default_slot_template = /*#slots*/ ctx[6].default;
	const default_slot = create_slot(default_slot_template, ctx, /*$$scope*/ ctx[5], null);

	return {
		c() {
			se_list = element("se-list");
			if (default_slot) default_slot.c();
			set_custom_element_data(se_list, "option", /*option*/ ctx[0]);
			set_custom_element_data(se_list, "selected-color", /*selectedColor*/ ctx[1]);
			set_custom_element_data(se_list, "can-collapse", /*canCollapse*/ ctx[2]);
		},
		m(target, anchor) {
			insert(target, se_list, anchor);

			if (default_slot) {
				default_slot.m(se_list, null);
			}

			/*se_list_binding*/ ctx[7](se_list);
			current = true;
		},
		p(ctx, [dirty]) {
			if (default_slot) {
				if (default_slot.p && (!current || dirty & /*$$scope*/ 32)) {
					update_slot(default_slot, default_slot_template, ctx, /*$$scope*/ ctx[5], dirty, null, null);
				}
			}

			if (!current || dirty & /*option*/ 1) {
				set_custom_element_data(se_list, "option", /*option*/ ctx[0]);
			}

			if (!current || dirty & /*selectedColor*/ 2) {
				set_custom_element_data(se_list, "selected-color", /*selectedColor*/ ctx[1]);
			}

			if (!current || dirty & /*canCollapse*/ 4) {
				set_custom_element_data(se_list, "can-collapse", /*canCollapse*/ ctx[2]);
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
			if (detaching) detach(se_list);
			if (default_slot) default_slot.d(detaching);
			/*se_list_binding*/ ctx[7](null);
		}
	};
}

function instance($$self, $$props, $$invalidate) {
	let { $$slots: slots = {}, $$scope } = $$props;
	let __ref;
	let __mounted = false;
	const dispatch = createEventDispatcher();
	let { option = undefined } = $$props;
	let { selectedColor = undefined } = $$props;
	let { canCollapse = undefined } = $$props;
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

	function se_list_binding($$value) {
		binding_callbacks[$$value ? "unshift" : "push"](() => {
			__ref = $$value;
			$$invalidate(3, __ref);
		});
	}

	$$self.$$set = $$props => {
		if ("option" in $$props) $$invalidate(0, option = $$props.option);
		if ("selectedColor" in $$props) $$invalidate(1, selectedColor = $$props.selectedColor);
		if ("canCollapse" in $$props) $$invalidate(2, canCollapse = $$props.canCollapse);
		if ("$$scope" in $$props) $$invalidate(5, $$scope = $$props.$$scope);
	};

	return [
		option,
		selectedColor,
		canCollapse,
		__ref,
		getWebComponent,
		$$scope,
		slots,
		se_list_binding
	];
}

class SeList extends SvelteComponent {
  $$prop_def: SeListProps;
  $$events_def: SeListEvents;
  $$slot_def: SeListSlots;

  $on<K extends keyof SeListEvents>(type: K, callback: (e: SeListEvents[K]) => any): () => void {
	  return super.$on(type, callback);
	}

  $set($$props: Partial<SeListProps>): void {
	  super.$set($$props);
	}

	constructor(options) {
		super();

		init(this, options, instance, create_fragment, safe_not_equal, {
			option: 0,
			selectedColor: 1,
			canCollapse: 2,
			getWebComponent: 4
		});
	}

	get option() {
		return this.$$.ctx[0];
	}

	set option(option) {
		this.$set({ option });
		flush();
	}

	get selectedColor() {
		return this.$$.ctx[1];
	}

	set selectedColor(selectedColor) {
		this.$set({ selectedColor });
		flush();
	}

	get canCollapse() {
		return this.$$.ctx[2];
	}

	set canCollapse(canCollapse) {
		this.$set({ canCollapse });
		flush();
	}

	get getWebComponent(): HTMLSeListElement | undefined {
		return this.$$.ctx[4];
	}
}

export default SeList;