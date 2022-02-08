/* eslint-disable */
/* tslint:disable */
// @ts-nocheck
import { Components, JSX } from '@se/web-ui';


interface SeChipProps {
  
  /** The text you want to display in your chip. */
  value?: Components.SeChip["value"]
  
  /** Defines the size of the chip.
`nano` sets the font to 14px and the height to 20px.
`small` is the default option, with a 16px font and a 24px height.
`medium` is the default option, with a 16px font and a 32px height.
`large` is the default option, with a 16px font and a 40px height. */
  size?: Components.SeChip["size"]
  
  /** Defines the background color of the chip.  The default setting is `standard`, which is a light gray color. */
  color?: Components.SeChip["color"]
  
  /** Indicates whether or not the chip has a close button.  Set to `false` by default. */
  canClose?: Components.SeChip["canClose"]
  
  /** Indicates whether or not the chip is selected.  Set to `false` by default. */
  selected?: Components.SeChip["selected"]
  
  /** Indicates whether or not the chip is disabled.  Set to `false` by default. */
  disabled?: Components.SeChip["disabled"]
  
  /** Indicates whether or not the chip can changed state when hover or clicked on.  Set to `false` by default. */
  readonly?: Components.SeChip["readonly"]
  
  /** Optional property that defines if the chip displays as a block in it's container.
When set to true, the chip will be as wide as its container. */
  block?: Components.SeChip["block"]
  
  /** Indicates whether or not the chip has dashed border. Set to `false` by default. */
  dashed?: Components.SeChip["dashed"]
}

interface SeChipEvents {
  
  /** Send the chip value to the parent component when clicking the close button of a chip. */
  didClose: Parameters<JSX.SeChip["onDidClose"]>[0]
}

interface SeChipSlots {
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
	listen,
	safe_not_equal,
	set_custom_element_data,
	transition_in,
	transition_out,
	update_slot_base
} from "svelte/internal";

import { createEventDispatcher, onMount } from 'svelte';

function create_fragment(ctx) {
	let se_chip;
	let current;
	let mounted;
	let dispose;
	const default_slot_template = /*#slots*/ ctx[13].default;
	const default_slot = create_slot(default_slot_template, ctx, /*$$scope*/ ctx[12], null);

	return {
		c() {
			se_chip = element("se-chip");
			if (default_slot) default_slot.c();
			set_custom_element_data(se_chip, "value", /*value*/ ctx[0]);
			set_custom_element_data(se_chip, "size", /*size*/ ctx[1]);
			set_custom_element_data(se_chip, "color", /*color*/ ctx[2]);
			set_custom_element_data(se_chip, "can-close", /*canClose*/ ctx[3]);
			set_custom_element_data(se_chip, "selected", /*selected*/ ctx[4]);
			set_custom_element_data(se_chip, "disabled", /*disabled*/ ctx[5]);
			set_custom_element_data(se_chip, "readonly", /*readonly*/ ctx[6]);
			set_custom_element_data(se_chip, "block", /*block*/ ctx[7]);
			set_custom_element_data(se_chip, "dashed", /*dashed*/ ctx[8]);
		},
		m(target, anchor) {
			insert(target, se_chip, anchor);

			if (default_slot) {
				default_slot.m(se_chip, null);
			}

			/*se_chip_binding*/ ctx[14](se_chip);
			current = true;

			if (!mounted) {
				dispose = listen(se_chip, "didClose", /*onEvent*/ ctx[10]);
				mounted = true;
			}
		},
		p(ctx, [dirty]) {
			if (default_slot) {
				if (default_slot.p && (!current || dirty & /*$$scope*/ 4096)) {
					update_slot_base(
						default_slot,
						default_slot_template,
						ctx,
						/*$$scope*/ ctx[12],
						!current
						? get_all_dirty_from_scope(/*$$scope*/ ctx[12])
						: get_slot_changes(default_slot_template, /*$$scope*/ ctx[12], dirty, null),
						null
					);
				}
			}

			if (!current || dirty & /*value*/ 1) {
				set_custom_element_data(se_chip, "value", /*value*/ ctx[0]);
			}

			if (!current || dirty & /*size*/ 2) {
				set_custom_element_data(se_chip, "size", /*size*/ ctx[1]);
			}

			if (!current || dirty & /*color*/ 4) {
				set_custom_element_data(se_chip, "color", /*color*/ ctx[2]);
			}

			if (!current || dirty & /*canClose*/ 8) {
				set_custom_element_data(se_chip, "can-close", /*canClose*/ ctx[3]);
			}

			if (!current || dirty & /*selected*/ 16) {
				set_custom_element_data(se_chip, "selected", /*selected*/ ctx[4]);
			}

			if (!current || dirty & /*disabled*/ 32) {
				set_custom_element_data(se_chip, "disabled", /*disabled*/ ctx[5]);
			}

			if (!current || dirty & /*readonly*/ 64) {
				set_custom_element_data(se_chip, "readonly", /*readonly*/ ctx[6]);
			}

			if (!current || dirty & /*block*/ 128) {
				set_custom_element_data(se_chip, "block", /*block*/ ctx[7]);
			}

			if (!current || dirty & /*dashed*/ 256) {
				set_custom_element_data(se_chip, "dashed", /*dashed*/ ctx[8]);
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
			if (detaching) detach(se_chip);
			if (default_slot) default_slot.d(detaching);
			/*se_chip_binding*/ ctx[14](null);
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
	let { value = undefined } = $$props;
	let { size = undefined } = $$props;
	let { color = undefined } = $$props;
	let { canClose = undefined } = $$props;
	let { selected = undefined } = $$props;
	let { disabled = undefined } = $$props;
	let { readonly = undefined } = $$props;
	let { block = undefined } = $$props;
	let { dashed = undefined } = $$props;
	const getWebComponent = () => __ref;

	onMount(() => {
		__mounted = true;
	});

	const setProp = (prop, value) => {
		if (__ref) $$invalidate(9, __ref[prop] = value, __ref);
	};

	const onEvent = e => {
		e.stopPropagation();
		dispatch(e.type, e.detail);
	};

	function se_chip_binding($$value) {
		binding_callbacks[$$value ? 'unshift' : 'push'](() => {
			__ref = $$value;
			$$invalidate(9, __ref);
		});
	}

	$$self.$$set = $$props => {
		if ('value' in $$props) $$invalidate(0, value = $$props.value);
		if ('size' in $$props) $$invalidate(1, size = $$props.size);
		if ('color' in $$props) $$invalidate(2, color = $$props.color);
		if ('canClose' in $$props) $$invalidate(3, canClose = $$props.canClose);
		if ('selected' in $$props) $$invalidate(4, selected = $$props.selected);
		if ('disabled' in $$props) $$invalidate(5, disabled = $$props.disabled);
		if ('readonly' in $$props) $$invalidate(6, readonly = $$props.readonly);
		if ('block' in $$props) $$invalidate(7, block = $$props.block);
		if ('dashed' in $$props) $$invalidate(8, dashed = $$props.dashed);
		if ('$$scope' in $$props) $$invalidate(12, $$scope = $$props.$$scope);
	};

	return [
		value,
		size,
		color,
		canClose,
		selected,
		disabled,
		readonly,
		block,
		dashed,
		__ref,
		onEvent,
		getWebComponent,
		$$scope,
		slots,
		se_chip_binding
	];
}

class SeChip extends SvelteComponent {
  $$prop_def: SeChipProps;
  $$events_def: SeChipEvents;
  $$slot_def: SeChipSlots;

  $on<K extends keyof SeChipEvents>(type: K, callback: (e: SeChipEvents[K]) => any): () => void {
	  return super.$on(type, callback);
	}

  $set($$props: Partial<SeChipProps>): void {
	  super.$set($$props);
	}

	constructor(options) {
		super();

		init(this, options, instance, create_fragment, safe_not_equal, {
			value: 0,
			size: 1,
			color: 2,
			canClose: 3,
			selected: 4,
			disabled: 5,
			readonly: 6,
			block: 7,
			dashed: 8,
			getWebComponent: 11
		});
	}

	get value() {
		return this.$$.ctx[0];
	}

	set value(value) {
		this.$$set({ value });
		flush();
	}

	get size() {
		return this.$$.ctx[1];
	}

	set size(size) {
		this.$$set({ size });
		flush();
	}

	get color() {
		return this.$$.ctx[2];
	}

	set color(color) {
		this.$$set({ color });
		flush();
	}

	get canClose() {
		return this.$$.ctx[3];
	}

	set canClose(canClose) {
		this.$$set({ canClose });
		flush();
	}

	get selected() {
		return this.$$.ctx[4];
	}

	set selected(selected) {
		this.$$set({ selected });
		flush();
	}

	get disabled() {
		return this.$$.ctx[5];
	}

	set disabled(disabled) {
		this.$$set({ disabled });
		flush();
	}

	get readonly() {
		return this.$$.ctx[6];
	}

	set readonly(readonly) {
		this.$$set({ readonly });
		flush();
	}

	get block() {
		return this.$$.ctx[7];
	}

	set block(block) {
		this.$$set({ block });
		flush();
	}

	get dashed() {
		return this.$$.ctx[8];
	}

	set dashed(dashed) {
		this.$$set({ dashed });
		flush();
	}

	get getWebComponent(): HTMLSeChipElement | undefined {
		return this.$$.ctx[11];
	}
}

export default SeChip;