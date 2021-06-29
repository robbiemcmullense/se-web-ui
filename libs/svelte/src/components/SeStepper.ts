/* eslint-disable */
/* tslint:disable */
// @ts-nocheck
import { Components, JSX } from '@se/web-ui';


interface SeStepperProps {
  
  /** Sets the background color of your stepper.
The default setting is `primary`, implementing a green background for the stepper visual items.
The `alternative` setting implements a white background for the stepper visual items. This setting is best used against a gray background. */
  color?: Components.SeStepper["color"]
  
  /** Defines if the stepper items must be completed sequentially.
The default setting is `true`, each stepper item must be validated before advancing to the next step.
`false` allows each step to be selected in any order. */
  linear?: Components.SeStepper["linear"]
  
  /** Defines if the stepper takes the whole space. */
  block?: Components.SeStepper["block"]
  
  /** Defines if the stepper items is interactive or not.
The default setting is `true`, each stepper item can be interacted with. `linear` keeps its same interaction limitation.
`false` disabled the interactivness. It overrides the individual stepper item `interactive` property. */
  interactive?: Components.SeStepper["interactive"]
}

interface SeStepperEvents {
  
  /** Event to send to the parent component when a stepper item is clicked and next and previous will be clicked.
The Stepper Item data is passed to the parent. */
  didChange: Parameters<JSX.SeStepper["onDidChange"]>[0]
}

interface SeStepperSlots {
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
	listen,
	safe_not_equal,
	set_custom_element_data,
	transition_in,
	transition_out,
	update_slot
} from "svelte/internal";

import { createEventDispatcher, onMount } from "svelte";

function create_fragment(ctx) {
	let se_stepper;
	let current;
	let mounted;
	let dispose;
	const default_slot_template = /*#slots*/ ctx[11].default;
	const default_slot = create_slot(default_slot_template, ctx, /*$$scope*/ ctx[10], null);

	return {
		c() {
			se_stepper = element("se-stepper");
			if (default_slot) default_slot.c();
			set_custom_element_data(se_stepper, "color", /*color*/ ctx[0]);
			set_custom_element_data(se_stepper, "linear", /*linear*/ ctx[1]);
			set_custom_element_data(se_stepper, "block", /*block*/ ctx[2]);
			set_custom_element_data(se_stepper, "interactive", /*interactive*/ ctx[3]);
		},
		m(target, anchor) {
			insert(target, se_stepper, anchor);

			if (default_slot) {
				default_slot.m(se_stepper, null);
			}

			/*se_stepper_binding*/ ctx[12](se_stepper);
			current = true;

			if (!mounted) {
				dispose = listen(se_stepper, "didChange", /*onEvent*/ ctx[5]);
				mounted = true;
			}
		},
		p(ctx, [dirty]) {
			if (default_slot) {
				if (default_slot.p && (!current || dirty & /*$$scope*/ 1024)) {
					update_slot(default_slot, default_slot_template, ctx, /*$$scope*/ ctx[10], !current ? -1 : dirty, null, null);
				}
			}

			if (!current || dirty & /*color*/ 1) {
				set_custom_element_data(se_stepper, "color", /*color*/ ctx[0]);
			}

			if (!current || dirty & /*linear*/ 2) {
				set_custom_element_data(se_stepper, "linear", /*linear*/ ctx[1]);
			}

			if (!current || dirty & /*block*/ 4) {
				set_custom_element_data(se_stepper, "block", /*block*/ ctx[2]);
			}

			if (!current || dirty & /*interactive*/ 8) {
				set_custom_element_data(se_stepper, "interactive", /*interactive*/ ctx[3]);
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
			if (detaching) detach(se_stepper);
			if (default_slot) default_slot.d(detaching);
			/*se_stepper_binding*/ ctx[12](null);
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
	let { color = undefined } = $$props;
	let { linear = undefined } = $$props;
	let { block = undefined } = $$props;
	let { interactive = undefined } = $$props;
	const reset = (...args) => __ref.reset(...args);
	const previous = (...args) => __ref.previous(...args);
	const next = (...args) => __ref.next(...args);
	const getWebComponent = () => __ref;

	onMount(() => {
		__mounted = true;
	});

	const setProp = (prop, value) => {
		if (__ref) $$invalidate(4, __ref[prop] = value, __ref);
	};

	const onEvent = e => {
		e.stopPropagation();
		dispatch(e.type, e.detail);
	};

	function se_stepper_binding($$value) {
		binding_callbacks[$$value ? "unshift" : "push"](() => {
			__ref = $$value;
			$$invalidate(4, __ref);
		});
	}

	$$self.$$set = $$props => {
		if ("color" in $$props) $$invalidate(0, color = $$props.color);
		if ("linear" in $$props) $$invalidate(1, linear = $$props.linear);
		if ("block" in $$props) $$invalidate(2, block = $$props.block);
		if ("interactive" in $$props) $$invalidate(3, interactive = $$props.interactive);
		if ("$$scope" in $$props) $$invalidate(10, $$scope = $$props.$$scope);
	};

	return [
		color,
		linear,
		block,
		interactive,
		__ref,
		onEvent,
		reset,
		previous,
		next,
		getWebComponent,
		$$scope,
		slots,
		se_stepper_binding
	];
}

class SeStepper extends SvelteComponent {
  $$prop_def: SeStepperProps;
  $$events_def: SeStepperEvents;
  $$slot_def: SeStepperSlots;

  $on<K extends keyof SeStepperEvents>(type: K, callback: (e: SeStepperEvents[K]) => any): () => void {
	  return super.$on(type, callback);
	}

  $set($$props: Partial<SeStepperProps>): void {
	  super.$set($$props);
	}

	constructor(options) {
		super();

		init(this, options, instance, create_fragment, safe_not_equal, {
			color: 0,
			linear: 1,
			block: 2,
			interactive: 3,
			reset: 6,
			previous: 7,
			next: 8,
			getWebComponent: 9
		});
	}

	get color() {
		return this.$$.ctx[0];
	}

	set color(color) {
		this.$set({ color });
		flush();
	}

	get linear() {
		return this.$$.ctx[1];
	}

	set linear(linear) {
		this.$set({ linear });
		flush();
	}

	get block() {
		return this.$$.ctx[2];
	}

	set block(block) {
		this.$set({ block });
		flush();
	}

	get interactive() {
		return this.$$.ctx[3];
	}

	set interactive(interactive) {
		this.$set({ interactive });
		flush();
	}

	
  /** Call the `reset` method to reset the stepper to the indicated step.  This also invalidates any validated steps.
It no step parameter is provided, it will reset to the first stepper item. */
 get reset(): Components.SeStepper["reset"] {
		return this.$$.ctx[6];
	}

	
  /** Call the `previous` method to navigate to the previous step from the step that is currently selected. */
 get previous(): Components.SeStepper["previous"] {
		return this.$$.ctx[7];
	}

	
  /** Call the `next` method to navigate to the next step from the step that is currently selected.
This will not work in linear mode if the next step is not validated. */
 get next(): Components.SeStepper["next"] {
		return this.$$.ctx[8];
	}

	get getWebComponent(): HTMLSeStepperElement | undefined {
		return this.$$.ctx[9];
	}
}

export default SeStepper;