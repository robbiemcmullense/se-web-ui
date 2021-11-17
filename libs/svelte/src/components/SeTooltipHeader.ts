/* eslint-disable */
/* tslint:disable */
// @ts-nocheck
import { Components, JSX } from '@se/web-ui';


interface SeTooltipHeaderProps {
  
  /** Indicates an icon you want to display in your tooltip. */
  icon?: Components.SeTooltipHeader["icon"]
}

interface SeTooltipHeaderEvents {
  
}

interface SeTooltipHeaderSlots {
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
	let se_tooltip_header;
	let current;
	const default_slot_template = /*#slots*/ ctx[4].default;
	const default_slot = create_slot(default_slot_template, ctx, /*$$scope*/ ctx[3], null);

	return {
		c() {
			se_tooltip_header = element("se-tooltip-header");
			if (default_slot) default_slot.c();
			set_custom_element_data(se_tooltip_header, "icon", /*icon*/ ctx[0]);
		},
		m(target, anchor) {
			insert(target, se_tooltip_header, anchor);

			if (default_slot) {
				default_slot.m(se_tooltip_header, null);
			}

			/*se_tooltip_header_binding*/ ctx[5](se_tooltip_header);
			current = true;
		},
		p(ctx, [dirty]) {
			if (default_slot) {
				if (default_slot.p && (!current || dirty & /*$$scope*/ 8)) {
					update_slot_base(
						default_slot,
						default_slot_template,
						ctx,
						/*$$scope*/ ctx[3],
						!current
						? get_all_dirty_from_scope(/*$$scope*/ ctx[3])
						: get_slot_changes(default_slot_template, /*$$scope*/ ctx[3], dirty, null),
						null
					);
				}
			}

			if (!current || dirty & /*icon*/ 1) {
				set_custom_element_data(se_tooltip_header, "icon", /*icon*/ ctx[0]);
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
			if (detaching) detach(se_tooltip_header);
			if (default_slot) default_slot.d(detaching);
			/*se_tooltip_header_binding*/ ctx[5](null);
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

	function se_tooltip_header_binding($$value) {
		binding_callbacks[$$value ? 'unshift' : 'push'](() => {
			__ref = $$value;
			$$invalidate(1, __ref);
		});
	}

	$$self.$$set = $$props => {
		if ('icon' in $$props) $$invalidate(0, icon = $$props.icon);
		if ('$$scope' in $$props) $$invalidate(3, $$scope = $$props.$$scope);
	};

	return [icon, __ref, getWebComponent, $$scope, slots, se_tooltip_header_binding];
}

class SeTooltipHeader extends SvelteComponent {
  $$prop_def: SeTooltipHeaderProps;
  $$events_def: SeTooltipHeaderEvents;
  $$slot_def: SeTooltipHeaderSlots;

  $on<K extends keyof SeTooltipHeaderEvents>(type: K, callback: (e: SeTooltipHeaderEvents[K]) => any): () => void {
	  return super.$on(type, callback);
	}

  $set($$props: Partial<SeTooltipHeaderProps>): void {
	  super.$set($$props);
	}

	constructor(options) {
		super();
		init(this, options, instance, create_fragment, safe_not_equal, { icon: 0, getWebComponent: 2 });
	}

	get icon() {
		return this.$$.ctx[0];
	}

	set icon(icon) {
		this.$$set({ icon });
		flush();
	}

	get getWebComponent(): HTMLSeTooltipHeaderElement | undefined {
		return this.$$.ctx[2];
	}
}

export default SeTooltipHeader;