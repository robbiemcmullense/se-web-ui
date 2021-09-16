/* eslint-disable */
/* tslint:disable */
// @ts-nocheck
import { Components, JSX } from '@se/web-ui';


interface SeTabItemProps {
  
  /** Defines if the list element should be selected or not. */
  selected?: Components.SeTabItem["selected"]
  
  /** Disable the item for any interaction. */
  disabled?: Components.SeTabItem["disabled"]
  
  /** Determines if se-item configures an `a` tag with an `href` attibute.
Default when href is blank configures as a `button` tag. */
  href?: Components.SeTabItem["href"]
}

interface SeTabItemEvents {
  
}

interface SeTabItemSlots {
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
	let se_tab_item;
	let current;
	const default_slot_template = /*#slots*/ ctx[6].default;
	const default_slot = create_slot(default_slot_template, ctx, /*$$scope*/ ctx[5], null);

	return {
		c() {
			se_tab_item = element("se-tab-item");
			if (default_slot) default_slot.c();
			set_custom_element_data(se_tab_item, "selected", /*selected*/ ctx[0]);
			set_custom_element_data(se_tab_item, "disabled", /*disabled*/ ctx[1]);
			set_custom_element_data(se_tab_item, "href", /*href*/ ctx[2]);
		},
		m(target, anchor) {
			insert(target, se_tab_item, anchor);

			if (default_slot) {
				default_slot.m(se_tab_item, null);
			}

			/*se_tab_item_binding*/ ctx[7](se_tab_item);
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

			if (!current || dirty & /*selected*/ 1) {
				set_custom_element_data(se_tab_item, "selected", /*selected*/ ctx[0]);
			}

			if (!current || dirty & /*disabled*/ 2) {
				set_custom_element_data(se_tab_item, "disabled", /*disabled*/ ctx[1]);
			}

			if (!current || dirty & /*href*/ 4) {
				set_custom_element_data(se_tab_item, "href", /*href*/ ctx[2]);
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
			if (detaching) detach(se_tab_item);
			if (default_slot) default_slot.d(detaching);
			/*se_tab_item_binding*/ ctx[7](null);
		}
	};
}

function instance($$self, $$props, $$invalidate) {
	let { $$slots: slots = {}, $$scope } = $$props;
	let __ref;
	let __mounted = false;
	const dispatch = createEventDispatcher();
	let { selected = undefined } = $$props;
	let { disabled = undefined } = $$props;
	let { href = undefined } = $$props;
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

	function se_tab_item_binding($$value) {
		binding_callbacks[$$value ? 'unshift' : 'push'](() => {
			__ref = $$value;
			$$invalidate(3, __ref);
		});
	}

	$$self.$$set = $$props => {
		if ('selected' in $$props) $$invalidate(0, selected = $$props.selected);
		if ('disabled' in $$props) $$invalidate(1, disabled = $$props.disabled);
		if ('href' in $$props) $$invalidate(2, href = $$props.href);
		if ('$$scope' in $$props) $$invalidate(5, $$scope = $$props.$$scope);
	};

	return [
		selected,
		disabled,
		href,
		__ref,
		getWebComponent,
		$$scope,
		slots,
		se_tab_item_binding
	];
}

class SeTabItem extends SvelteComponent {
  $$prop_def: SeTabItemProps;
  $$events_def: SeTabItemEvents;
  $$slot_def: SeTabItemSlots;

  $on<K extends keyof SeTabItemEvents>(type: K, callback: (e: SeTabItemEvents[K]) => any): () => void {
	  return super.$on(type, callback);
	}

  $set($$props: Partial<SeTabItemProps>): void {
	  super.$set($$props);
	}

	constructor(options) {
		super();

		init(this, options, instance, create_fragment, safe_not_equal, {
			selected: 0,
			disabled: 1,
			href: 2,
			getWebComponent: 4
		});
	}

	get selected() {
		return this.$$.ctx[0];
	}

	set selected(selected) {
		this.$$set({ selected });
		flush();
	}

	get disabled() {
		return this.$$.ctx[1];
	}

	set disabled(disabled) {
		this.$$set({ disabled });
		flush();
	}

	get href() {
		return this.$$.ctx[2];
	}

	set href(href) {
		this.$$set({ href });
		flush();
	}

	get getWebComponent(): HTMLSeTabItemElement | undefined {
		return this.$$.ctx[4];
	}
}

export default SeTabItem;