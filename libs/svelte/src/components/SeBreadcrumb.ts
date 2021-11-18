/* eslint-disable */
/* tslint:disable */
// @ts-nocheck
import { Components, JSX } from '@se/web-ui';


interface SeBreadcrumbProps {
  
  /** Indicates whether or not the last breadcrumb item should be selectable. The default setting is `false`. */
  canSelectLast?: Components.SeBreadcrumb["canSelectLast"]
  
  /** Provides a label that describes the type of navigation for assistive technologies.
The default value is `breadcrumb`. */
  ariaLabel?: Components.SeBreadcrumb["ariaLabel"]
  
  /** Setting allowing to transform breadcrumb into a backlink on screen sizes smaller than specified. */
  breakpoint?: Components.SeBreadcrumb["breakpoint"]
}

interface SeBreadcrumbEvents {
  
}

interface SeBreadcrumbSlots {
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
	let se_breadcrumb;
	let current;
	const default_slot_template = /*#slots*/ ctx[6].default;
	const default_slot = create_slot(default_slot_template, ctx, /*$$scope*/ ctx[5], null);

	return {
		c() {
			se_breadcrumb = element("se-breadcrumb");
			if (default_slot) default_slot.c();
			set_custom_element_data(se_breadcrumb, "can-select-last", /*canSelectLast*/ ctx[0]);
			set_custom_element_data(se_breadcrumb, "aria-label", /*ariaLabel*/ ctx[1]);
			set_custom_element_data(se_breadcrumb, "breakpoint", /*breakpoint*/ ctx[2]);
		},
		m(target, anchor) {
			insert(target, se_breadcrumb, anchor);

			if (default_slot) {
				default_slot.m(se_breadcrumb, null);
			}

			/*se_breadcrumb_binding*/ ctx[7](se_breadcrumb);
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

			if (!current || dirty & /*canSelectLast*/ 1) {
				set_custom_element_data(se_breadcrumb, "can-select-last", /*canSelectLast*/ ctx[0]);
			}

			if (!current || dirty & /*ariaLabel*/ 2) {
				set_custom_element_data(se_breadcrumb, "aria-label", /*ariaLabel*/ ctx[1]);
			}

			if (!current || dirty & /*breakpoint*/ 4) {
				set_custom_element_data(se_breadcrumb, "breakpoint", /*breakpoint*/ ctx[2]);
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
			if (detaching) detach(se_breadcrumb);
			if (default_slot) default_slot.d(detaching);
			/*se_breadcrumb_binding*/ ctx[7](null);
		}
	};
}

function instance($$self, $$props, $$invalidate) {
	let { $$slots: slots = {}, $$scope } = $$props;
	let __ref;
	let __mounted = false;
	const dispatch = createEventDispatcher();
	let { canSelectLast = undefined } = $$props;
	let { ariaLabel = undefined } = $$props;
	let { breakpoint = undefined } = $$props;
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

	function se_breadcrumb_binding($$value) {
		binding_callbacks[$$value ? 'unshift' : 'push'](() => {
			__ref = $$value;
			$$invalidate(3, __ref);
		});
	}

	$$self.$$set = $$props => {
		if ('canSelectLast' in $$props) $$invalidate(0, canSelectLast = $$props.canSelectLast);
		if ('ariaLabel' in $$props) $$invalidate(1, ariaLabel = $$props.ariaLabel);
		if ('breakpoint' in $$props) $$invalidate(2, breakpoint = $$props.breakpoint);
		if ('$$scope' in $$props) $$invalidate(5, $$scope = $$props.$$scope);
	};

	return [
		canSelectLast,
		ariaLabel,
		breakpoint,
		__ref,
		getWebComponent,
		$$scope,
		slots,
		se_breadcrumb_binding
	];
}

class SeBreadcrumb extends SvelteComponent {
  $$prop_def: SeBreadcrumbProps;
  $$events_def: SeBreadcrumbEvents;
  $$slot_def: SeBreadcrumbSlots;

  $on<K extends keyof SeBreadcrumbEvents>(type: K, callback: (e: SeBreadcrumbEvents[K]) => any): () => void {
	  return super.$on(type, callback);
	}

  $set($$props: Partial<SeBreadcrumbProps>): void {
	  super.$set($$props);
	}

	constructor(options) {
		super();

		init(this, options, instance, create_fragment, safe_not_equal, {
			canSelectLast: 0,
			ariaLabel: 1,
			breakpoint: 2,
			getWebComponent: 4
		});
	}

	get canSelectLast() {
		return this.$$.ctx[0];
	}

	set canSelectLast(canSelectLast) {
		this.$$set({ canSelectLast });
		flush();
	}

	get ariaLabel() {
		return this.$$.ctx[1];
	}

	set ariaLabel(ariaLabel) {
		this.$$set({ ariaLabel });
		flush();
	}

	get breakpoint() {
		return this.$$.ctx[2];
	}

	set breakpoint(breakpoint) {
		this.$$set({ breakpoint });
		flush();
	}

	get getWebComponent(): HTMLSeBreadcrumbElement | undefined {
		return this.$$.ctx[4];
	}
}

export default SeBreadcrumb;