/* eslint-disable */
/* tslint:disable */
// @ts-nocheck
import { Components, JSX } from '@se/web-ui';


interface SeFabItemProps {
  
  /** Property that determines if an icon is included in the floating action button. */
  icon?: Components.SeFabItem["icon"]
}

interface SeFabItemEvents {
  
  /** Send the value of the caption to the parent when clicking on the item. */
  didClick: Parameters<JSX.SeFabItem["onDidClick"]>[0]
}

interface SeFabItemSlots {
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
	listen,
	safe_not_equal,
	set_custom_element_data,
	transition_in,
	transition_out,
	update_slot_base
} from "svelte/internal";

import { createEventDispatcher, onMount } from 'svelte';

function create_fragment(ctx) {
	let se_fab_item;
	let current;
	let mounted;
	let dispose;
	const default_slot_template = /*#slots*/ ctx[5].default;
	const default_slot = create_slot(default_slot_template, ctx, /*$$scope*/ ctx[4], null);

	return {
		c() {
			se_fab_item = element("se-fab-item");
			if (default_slot) default_slot.c();
			set_custom_element_data(se_fab_item, "icon", /*icon*/ ctx[0]);
		},
		m(target, anchor) {
			insert(target, se_fab_item, anchor);

			if (default_slot) {
				default_slot.m(se_fab_item, null);
			}

			/*se_fab_item_binding*/ ctx[6](se_fab_item);
			current = true;

			if (!mounted) {
				dispose = listen(se_fab_item, "didClick", /*onEvent*/ ctx[2]);
				mounted = true;
			}
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

			if (!current || dirty & /*icon*/ 1) {
				set_custom_element_data(se_fab_item, "icon", /*icon*/ ctx[0]);
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
			if (detaching) detach(se_fab_item);
			if (default_slot) default_slot.d(detaching);
			/*se_fab_item_binding*/ ctx[6](null);
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
	let { icon = undefined } = $$props;
	const getWebComponent = () => __ref;

	onMount(() => {
		__mounted = true;
	});

	const setProp = (prop, value) => {
		if (__ref) $$invalidate(1, __ref[prop] = value, __ref);
	};

	const onEvent = e => {
		e.stopPropagation();
		dispatch(e.type, e.detail);
	};

	function se_fab_item_binding($$value) {
		binding_callbacks[$$value ? 'unshift' : 'push'](() => {
			__ref = $$value;
			$$invalidate(1, __ref);
		});
	}

	$$self.$$set = $$props => {
		if ('icon' in $$props) $$invalidate(0, icon = $$props.icon);
		if ('$$scope' in $$props) $$invalidate(4, $$scope = $$props.$$scope);
	};

	return [icon, __ref, onEvent, getWebComponent, $$scope, slots, se_fab_item_binding];
}

class SeFabItem extends SvelteComponent {
  $$prop_def: SeFabItemProps;
  $$events_def: SeFabItemEvents;
  $$slot_def: SeFabItemSlots;

  $on<K extends keyof SeFabItemEvents>(type: K, callback: (e: SeFabItemEvents[K]) => any): () => void {
	  return super.$on(type, callback);
	}

  $set($$props: Partial<SeFabItemProps>): void {
	  super.$set($$props);
	}

	constructor(options) {
		super();
		init(this, options, instance, create_fragment, safe_not_equal, { icon: 0, getWebComponent: 3 });
	}

	get icon() {
		return this.$$.ctx[0];
	}

	set icon(icon) {
		this.$$set({ icon });
		flush();
	}

	get getWebComponent(): HTMLSeFabItemElement | undefined {
		return this.$$.ctx[3];
	}
}

export default SeFabItem;