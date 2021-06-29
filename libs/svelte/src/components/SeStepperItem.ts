/* eslint-disable */
/* tslint:disable */
// @ts-nocheck
import { Components, JSX } from '@se/web-ui';


interface SeStepperItemProps {
  
  /** Indicates the label for your stepper item. */
  label?: Components.SeStepperItem["label"]
  
  /** Indicates the content for the currently selected step in the stepper. */
  active?: Components.SeStepperItem["active"]
  
  /** Indicates if the stepper item is interactive or not.
The default setting is `true`, the stepper item can be interacted with.
`false` disabled the interactivness. */
  interactive?: Components.SeStepperItem["interactive"]
  
  /** Indicates whether a required item's data has been validated.  Useful if using a form field.
When the stepper component is set to linear mode, all stepper items will need to be validated before advancing the stpper. */
  validated?: Components.SeStepperItem["validated"]
}

interface SeStepperItemEvents {
  
  /** Event to send to the parent component when a stepper item's data is validated. */
  didValidate: Parameters<JSX.SeStepperItem["onDidValidate"]>[0]
  
  /** Event to send to the parent component when a stepper item's data is active true or false.
The boolean validated property is passed to the parent. */
  didActivate: Parameters<JSX.SeStepperItem["onDidActivate"]>[0]
}

interface SeStepperItemSlots {
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
	run_all,
	safe_not_equal,
	set_custom_element_data,
	transition_in,
	transition_out,
	update_slot
} from "svelte/internal";

import { createEventDispatcher, onMount } from "svelte";

function create_fragment(ctx) {
	let se_stepper_item;
	let current;
	let mounted;
	let dispose;
	const default_slot_template = /*#slots*/ ctx[8].default;
	const default_slot = create_slot(default_slot_template, ctx, /*$$scope*/ ctx[7], null);

	return {
		c() {
			se_stepper_item = element("se-stepper-item");
			if (default_slot) default_slot.c();
			set_custom_element_data(se_stepper_item, "label", /*label*/ ctx[0]);
			set_custom_element_data(se_stepper_item, "active", /*active*/ ctx[1]);
			set_custom_element_data(se_stepper_item, "interactive", /*interactive*/ ctx[2]);
			set_custom_element_data(se_stepper_item, "validated", /*validated*/ ctx[3]);
		},
		m(target, anchor) {
			insert(target, se_stepper_item, anchor);

			if (default_slot) {
				default_slot.m(se_stepper_item, null);
			}

			/*se_stepper_item_binding*/ ctx[9](se_stepper_item);
			current = true;

			if (!mounted) {
				dispose = [
					listen(se_stepper_item, "didValidate", /*onEvent*/ ctx[5]),
					listen(se_stepper_item, "didActivate", /*onEvent*/ ctx[5])
				];

				mounted = true;
			}
		},
		p(ctx, [dirty]) {
			if (default_slot) {
				if (default_slot.p && (!current || dirty & /*$$scope*/ 128)) {
					update_slot(default_slot, default_slot_template, ctx, /*$$scope*/ ctx[7], !current ? -1 : dirty, null, null);
				}
			}

			if (!current || dirty & /*label*/ 1) {
				set_custom_element_data(se_stepper_item, "label", /*label*/ ctx[0]);
			}

			if (!current || dirty & /*active*/ 2) {
				set_custom_element_data(se_stepper_item, "active", /*active*/ ctx[1]);
			}

			if (!current || dirty & /*interactive*/ 4) {
				set_custom_element_data(se_stepper_item, "interactive", /*interactive*/ ctx[2]);
			}

			if (!current || dirty & /*validated*/ 8) {
				set_custom_element_data(se_stepper_item, "validated", /*validated*/ ctx[3]);
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
			if (detaching) detach(se_stepper_item);
			if (default_slot) default_slot.d(detaching);
			/*se_stepper_item_binding*/ ctx[9](null);
			mounted = false;
			run_all(dispose);
		}
	};
}

function instance($$self, $$props, $$invalidate) {
	let { $$slots: slots = {}, $$scope } = $$props;
	let __ref;
	let __mounted = false;
	const dispatch = createEventDispatcher();
	let { label = undefined } = $$props;
	let { active = undefined } = $$props;
	let { interactive = undefined } = $$props;
	let { validated = undefined } = $$props;
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

	function se_stepper_item_binding($$value) {
		binding_callbacks[$$value ? "unshift" : "push"](() => {
			__ref = $$value;
			$$invalidate(4, __ref);
		});
	}

	$$self.$$set = $$props => {
		if ("label" in $$props) $$invalidate(0, label = $$props.label);
		if ("active" in $$props) $$invalidate(1, active = $$props.active);
		if ("interactive" in $$props) $$invalidate(2, interactive = $$props.interactive);
		if ("validated" in $$props) $$invalidate(3, validated = $$props.validated);
		if ("$$scope" in $$props) $$invalidate(7, $$scope = $$props.$$scope);
	};

	return [
		label,
		active,
		interactive,
		validated,
		__ref,
		onEvent,
		getWebComponent,
		$$scope,
		slots,
		se_stepper_item_binding
	];
}

class SeStepperItem extends SvelteComponent {
  $$prop_def: SeStepperItemProps;
  $$events_def: SeStepperItemEvents;
  $$slot_def: SeStepperItemSlots;

  $on<K extends keyof SeStepperItemEvents>(type: K, callback: (e: SeStepperItemEvents[K]) => any): () => void {
	  return super.$on(type, callback);
	}

  $set($$props: Partial<SeStepperItemProps>): void {
	  super.$set($$props);
	}

	constructor(options) {
		super();

		init(this, options, instance, create_fragment, safe_not_equal, {
			label: 0,
			active: 1,
			interactive: 2,
			validated: 3,
			getWebComponent: 6
		});
	}

	get label() {
		return this.$$.ctx[0];
	}

	set label(label) {
		this.$set({ label });
		flush();
	}

	get active() {
		return this.$$.ctx[1];
	}

	set active(active) {
		this.$set({ active });
		flush();
	}

	get interactive() {
		return this.$$.ctx[2];
	}

	set interactive(interactive) {
		this.$set({ interactive });
		flush();
	}

	get validated() {
		return this.$$.ctx[3];
	}

	set validated(validated) {
		this.$set({ validated });
		flush();
	}

	get getWebComponent(): HTMLSeStepperItemElement | undefined {
		return this.$$.ctx[6];
	}
}

export default SeStepperItem;