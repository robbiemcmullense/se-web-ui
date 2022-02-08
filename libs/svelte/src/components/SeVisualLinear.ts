/* eslint-disable */
/* tslint:disable */
// @ts-nocheck
import { Components, JSX } from '@se/web-ui';


interface SeVisualLinearProps {
  
  /** Defines the layout of your component.
`inline` is the default option.  This sets the "progress bar" adjacent to the label.
`stacked` option will render the "progress bar" below the label. */
  option?: Components.SeVisualLinear["option"]
  
  /** Defines the text value of the label in your component. */
  label?: Components.SeVisualLinear["label"]
  
  /** Defines the value of your component. */
  value?: Components.SeVisualLinear["value"]
  
  /** Sets the color of the visual "progress bar".
The string should be a 6-digit hexadecimal color with a hashtag (example: #3dcd58).
By default, the progress bar will have a green color. */
  secolor?: Components.SeVisualLinear["secolor"]
  
  /** Set the percentage of the "progress bar" to be "filled". */
  percentage?: Components.SeVisualLinear["percentage"]
}

interface SeVisualLinearEvents {
  
}

interface SeVisualLinearSlots {
  default: any
}
  
/* generated by Svelte v3.46.4 */
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
	let se_visual_linear;
	let current;
	const default_slot_template = /*#slots*/ ctx[8].default;
	const default_slot = create_slot(default_slot_template, ctx, /*$$scope*/ ctx[7], null);

	return {
		c() {
			se_visual_linear = element("se-visual-linear");
			if (default_slot) default_slot.c();
			set_custom_element_data(se_visual_linear, "option", /*option*/ ctx[0]);
			set_custom_element_data(se_visual_linear, "label", /*label*/ ctx[1]);
			set_custom_element_data(se_visual_linear, "value", /*value*/ ctx[2]);
			set_custom_element_data(se_visual_linear, "secolor", /*secolor*/ ctx[3]);
			set_custom_element_data(se_visual_linear, "percentage", /*percentage*/ ctx[4]);
		},
		m(target, anchor) {
			insert(target, se_visual_linear, anchor);

			if (default_slot) {
				default_slot.m(se_visual_linear, null);
			}

			/*se_visual_linear_binding*/ ctx[9](se_visual_linear);
			current = true;
		},
		p(ctx, [dirty]) {
			if (default_slot) {
				if (default_slot.p && (!current || dirty & /*$$scope*/ 128)) {
					update_slot_base(
						default_slot,
						default_slot_template,
						ctx,
						/*$$scope*/ ctx[7],
						!current
						? get_all_dirty_from_scope(/*$$scope*/ ctx[7])
						: get_slot_changes(default_slot_template, /*$$scope*/ ctx[7], dirty, null),
						null
					);
				}
			}

			if (!current || dirty & /*option*/ 1) {
				set_custom_element_data(se_visual_linear, "option", /*option*/ ctx[0]);
			}

			if (!current || dirty & /*label*/ 2) {
				set_custom_element_data(se_visual_linear, "label", /*label*/ ctx[1]);
			}

			if (!current || dirty & /*value*/ 4) {
				set_custom_element_data(se_visual_linear, "value", /*value*/ ctx[2]);
			}

			if (!current || dirty & /*secolor*/ 8) {
				set_custom_element_data(se_visual_linear, "secolor", /*secolor*/ ctx[3]);
			}

			if (!current || dirty & /*percentage*/ 16) {
				set_custom_element_data(se_visual_linear, "percentage", /*percentage*/ ctx[4]);
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
			if (detaching) detach(se_visual_linear);
			if (default_slot) default_slot.d(detaching);
			/*se_visual_linear_binding*/ ctx[9](null);
		}
	};
}

function instance($$self, $$props, $$invalidate) {
	let { $$slots: slots = {}, $$scope } = $$props;
	let __ref;
	let __mounted = false;
	const dispatch = createEventDispatcher();
	let { option = undefined } = $$props;
	let { label = undefined } = $$props;
	let { value = undefined } = $$props;
	let { secolor = undefined } = $$props;
	let { percentage = undefined } = $$props;
	const getWebComponent = () => __ref;

	onMount(() => {
		__mounted = true;
	});

	const setProp = (prop, value) => {
		if (__ref) $$invalidate(5, __ref[prop] = value, __ref);
	};

	const onEvent = e => {
		e.stopPropagation();
		dispatch(e.type, e.detail);
	};

	function se_visual_linear_binding($$value) {
		binding_callbacks[$$value ? 'unshift' : 'push'](() => {
			__ref = $$value;
			$$invalidate(5, __ref);
		});
	}

	$$self.$$set = $$props => {
		if ('option' in $$props) $$invalidate(0, option = $$props.option);
		if ('label' in $$props) $$invalidate(1, label = $$props.label);
		if ('value' in $$props) $$invalidate(2, value = $$props.value);
		if ('secolor' in $$props) $$invalidate(3, secolor = $$props.secolor);
		if ('percentage' in $$props) $$invalidate(4, percentage = $$props.percentage);
		if ('$$scope' in $$props) $$invalidate(7, $$scope = $$props.$$scope);
	};

	return [
		option,
		label,
		value,
		secolor,
		percentage,
		__ref,
		getWebComponent,
		$$scope,
		slots,
		se_visual_linear_binding
	];
}

class SeVisualLinear extends SvelteComponent {
  $$prop_def: SeVisualLinearProps;
  $$events_def: SeVisualLinearEvents;
  $$slot_def: SeVisualLinearSlots;

  $on<K extends keyof SeVisualLinearEvents>(type: K, callback: (e: SeVisualLinearEvents[K]) => any): () => void {
	  return super.$on(type, callback);
	}

  $set($$props: Partial<SeVisualLinearProps>): void {
	  super.$set($$props);
	}

	constructor(options) {
		super();

		init(this, options, instance, create_fragment, safe_not_equal, {
			option: 0,
			label: 1,
			value: 2,
			secolor: 3,
			percentage: 4,
			getWebComponent: 6
		});
	}

	get option() {
		return this.$$.ctx[0];
	}

	set option(option) {
		this.$$set({ option });
		flush();
	}

	get label() {
		return this.$$.ctx[1];
	}

	set label(label) {
		this.$$set({ label });
		flush();
	}

	get value() {
		return this.$$.ctx[2];
	}

	set value(value) {
		this.$$set({ value });
		flush();
	}

	get secolor() {
		return this.$$.ctx[3];
	}

	set secolor(secolor) {
		this.$$set({ secolor });
		flush();
	}

	get percentage() {
		return this.$$.ctx[4];
	}

	set percentage(percentage) {
		this.$$set({ percentage });
		flush();
	}

	get getWebComponent(): HTMLSeVisualLinearElement | undefined {
		return this.$$.ctx[6];
	}
}

export default SeVisualLinear;