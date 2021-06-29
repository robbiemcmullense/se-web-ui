/* eslint-disable */
/* tslint:disable */
// @ts-nocheck
import { Components, JSX } from '@se/web-ui';


interface SeIconEcostruxureProps {
  
  /** Sets the size of the EcoStruxure icon.  The default setting is `small`. */
  size?: Components.SeIconEcostruxure["size"]
  
  /** Defines the color of the logo.
`standard`: displays a light green / dark green conventional SE logo.
`inherited`: default option, which takes the color from it's parent. */
  color?: Components.SeIconEcostruxure["color"]
}

interface SeIconEcostruxureEvents {
  
}

interface SeIconEcostruxureSlots {
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
	let se_icon_ecostruxure;
	let current;
	const default_slot_template = /*#slots*/ ctx[5].default;
	const default_slot = create_slot(default_slot_template, ctx, /*$$scope*/ ctx[4], null);

	return {
		c() {
			se_icon_ecostruxure = element("se-icon-ecostruxure");
			if (default_slot) default_slot.c();
			set_custom_element_data(se_icon_ecostruxure, "size", /*size*/ ctx[0]);
			set_custom_element_data(se_icon_ecostruxure, "color", /*color*/ ctx[1]);
		},
		m(target, anchor) {
			insert(target, se_icon_ecostruxure, anchor);

			if (default_slot) {
				default_slot.m(se_icon_ecostruxure, null);
			}

			/*se_icon_ecostruxure_binding*/ ctx[6](se_icon_ecostruxure);
			current = true;
		},
		p(ctx, [dirty]) {
			if (default_slot) {
				if (default_slot.p && (!current || dirty & /*$$scope*/ 16)) {
					update_slot(default_slot, default_slot_template, ctx, /*$$scope*/ ctx[4], !current ? -1 : dirty, null, null);
				}
			}

			if (!current || dirty & /*size*/ 1) {
				set_custom_element_data(se_icon_ecostruxure, "size", /*size*/ ctx[0]);
			}

			if (!current || dirty & /*color*/ 2) {
				set_custom_element_data(se_icon_ecostruxure, "color", /*color*/ ctx[1]);
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
			if (detaching) detach(se_icon_ecostruxure);
			if (default_slot) default_slot.d(detaching);
			/*se_icon_ecostruxure_binding*/ ctx[6](null);
		}
	};
}

function instance($$self, $$props, $$invalidate) {
	let { $$slots: slots = {}, $$scope } = $$props;
	let __ref;
	let __mounted = false;
	const dispatch = createEventDispatcher();
	let { size = undefined } = $$props;
	let { color = undefined } = $$props;
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

	function se_icon_ecostruxure_binding($$value) {
		binding_callbacks[$$value ? "unshift" : "push"](() => {
			__ref = $$value;
			$$invalidate(2, __ref);
		});
	}

	$$self.$$set = $$props => {
		if ("size" in $$props) $$invalidate(0, size = $$props.size);
		if ("color" in $$props) $$invalidate(1, color = $$props.color);
		if ("$$scope" in $$props) $$invalidate(4, $$scope = $$props.$$scope);
	};

	return [
		size,
		color,
		__ref,
		getWebComponent,
		$$scope,
		slots,
		se_icon_ecostruxure_binding
	];
}

class SeIconEcostruxure extends SvelteComponent {
  $$prop_def: SeIconEcostruxureProps;
  $$events_def: SeIconEcostruxureEvents;
  $$slot_def: SeIconEcostruxureSlots;

  $on<K extends keyof SeIconEcostruxureEvents>(type: K, callback: (e: SeIconEcostruxureEvents[K]) => any): () => void {
	  return super.$on(type, callback);
	}

  $set($$props: Partial<SeIconEcostruxureProps>): void {
	  super.$set($$props);
	}

	constructor(options) {
		super();
		init(this, options, instance, create_fragment, safe_not_equal, { size: 0, color: 1, getWebComponent: 3 });
	}

	get size() {
		return this.$$.ctx[0];
	}

	set size(size) {
		this.$set({ size });
		flush();
	}

	get color() {
		return this.$$.ctx[1];
	}

	set color(color) {
		this.$set({ color });
		flush();
	}

	get getWebComponent(): HTMLSeIconEcostruxureElement | undefined {
		return this.$$.ctx[3];
	}
}

export default SeIconEcostruxure;