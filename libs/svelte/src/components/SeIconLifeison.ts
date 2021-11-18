/* eslint-disable */
/* tslint:disable */
// @ts-nocheck
import { Components, JSX } from '@se/web-ui';


interface SeIconLifeisonProps {
  
  /** Defines the color of the logo.
`standard`: displays a light green / dark green conventional SE logo.
`inherited`: default option, which takes the color from it's parent. */
  color?: Components.SeIconLifeison["color"]
}

interface SeIconLifeisonEvents {
  
}

interface SeIconLifeisonSlots {
  default: any
}
  
/* generated by Svelte v3.44.1 */
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
	let se_icon_lifeison;
	let current;
	const default_slot_template = /*#slots*/ ctx[4].default;
	const default_slot = create_slot(default_slot_template, ctx, /*$$scope*/ ctx[3], null);

	return {
		c() {
			se_icon_lifeison = element("se-icon-lifeison");
			if (default_slot) default_slot.c();
			set_custom_element_data(se_icon_lifeison, "color", /*color*/ ctx[0]);
		},
		m(target, anchor) {
			insert(target, se_icon_lifeison, anchor);

			if (default_slot) {
				default_slot.m(se_icon_lifeison, null);
			}

			/*se_icon_lifeison_binding*/ ctx[5](se_icon_lifeison);
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

			if (!current || dirty & /*color*/ 1) {
				set_custom_element_data(se_icon_lifeison, "color", /*color*/ ctx[0]);
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
			if (detaching) detach(se_icon_lifeison);
			if (default_slot) default_slot.d(detaching);
			/*se_icon_lifeison_binding*/ ctx[5](null);
		}
	};
}

function instance($$self, $$props, $$invalidate) {
	let { $$slots: slots = {}, $$scope } = $$props;
	let __ref;
	let __mounted = false;
	const dispatch = createEventDispatcher();
	let { color = undefined } = $$props;
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

	function se_icon_lifeison_binding($$value) {
		binding_callbacks[$$value ? 'unshift' : 'push'](() => {
			__ref = $$value;
			$$invalidate(1, __ref);
		});
	}

	$$self.$$set = $$props => {
		if ('color' in $$props) $$invalidate(0, color = $$props.color);
		if ('$$scope' in $$props) $$invalidate(3, $$scope = $$props.$$scope);
	};

	return [color, __ref, getWebComponent, $$scope, slots, se_icon_lifeison_binding];
}

class SeIconLifeison extends SvelteComponent {
  $$prop_def: SeIconLifeisonProps;
  $$events_def: SeIconLifeisonEvents;
  $$slot_def: SeIconLifeisonSlots;

  $on<K extends keyof SeIconLifeisonEvents>(type: K, callback: (e: SeIconLifeisonEvents[K]) => any): () => void {
	  return super.$on(type, callback);
	}

  $set($$props: Partial<SeIconLifeisonProps>): void {
	  super.$set($$props);
	}

	constructor(options) {
		super();
		init(this, options, instance, create_fragment, safe_not_equal, { color: 0, getWebComponent: 2 });
	}

	get color() {
		return this.$$.ctx[0];
	}

	set color(color) {
		this.$$set({ color });
		flush();
	}

	get getWebComponent(): HTMLSeIconLifeisonElement | undefined {
		return this.$$.ctx[2];
	}
}

export default SeIconLifeison;