/* eslint-disable */
/* tslint:disable */
// @ts-nocheck
import { Components, JSX } from '@se/web-ui';


interface SeBannerProps {
  
  /** Set the duration (in ms) that the banner will automatically switch slides.
Default is `6000`. */
  duration?: Components.SeBanner["duration"]
}

interface SeBannerEvents {
  
}

interface SeBannerSlots {
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
	let se_banner;
	let current;
	const default_slot_template = /*#slots*/ ctx[4].default;
	const default_slot = create_slot(default_slot_template, ctx, /*$$scope*/ ctx[3], null);

	return {
		c() {
			se_banner = element("se-banner");
			if (default_slot) default_slot.c();
			set_custom_element_data(se_banner, "duration", /*duration*/ ctx[0]);
		},
		m(target, anchor) {
			insert(target, se_banner, anchor);

			if (default_slot) {
				default_slot.m(se_banner, null);
			}

			/*se_banner_binding*/ ctx[5](se_banner);
			current = true;
		},
		p(ctx, [dirty]) {
			if (default_slot) {
				if (default_slot.p && (!current || dirty & /*$$scope*/ 8)) {
					update_slot(default_slot, default_slot_template, ctx, /*$$scope*/ ctx[3], dirty, null, null);
				}
			}

			if (!current || dirty & /*duration*/ 1) {
				set_custom_element_data(se_banner, "duration", /*duration*/ ctx[0]);
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
			if (detaching) detach(se_banner);
			if (default_slot) default_slot.d(detaching);
			/*se_banner_binding*/ ctx[5](null);
		}
	};
}

function instance($$self, $$props, $$invalidate) {
	let { $$slots: slots = {}, $$scope } = $$props;
	let __ref;
	let __mounted = false;
	const dispatch = createEventDispatcher();
	let { duration = undefined } = $$props;
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

	function se_banner_binding($$value) {
		binding_callbacks[$$value ? "unshift" : "push"](() => {
			__ref = $$value;
			$$invalidate(1, __ref);
		});
	}

	$$self.$$set = $$props => {
		if ("duration" in $$props) $$invalidate(0, duration = $$props.duration);
		if ("$$scope" in $$props) $$invalidate(3, $$scope = $$props.$$scope);
	};

	return [duration, __ref, getWebComponent, $$scope, slots, se_banner_binding];
}

class SeBanner extends SvelteComponent {
  $$prop_def: SeBannerProps;
  $$events_def: SeBannerEvents;
  $$slot_def: SeBannerSlots;

  $on<K extends keyof SeBannerEvents>(type: K, callback: (e: SeBannerEvents[K]) => any): () => void {
	  return super.$on(type, callback);
	}

  $set($$props: Partial<SeBannerProps>): void {
	  super.$set($$props);
	}

	constructor(options) {
		super();
		init(this, options, instance, create_fragment, safe_not_equal, { duration: 0, getWebComponent: 2 });
	}

	get duration() {
		return this.$$.ctx[0];
	}

	set duration(duration) {
		this.$set({ duration });
		flush();
	}

	get getWebComponent(): HTMLSeBannerElement | undefined {
		return this.$$.ctx[2];
	}
}

export default SeBanner;