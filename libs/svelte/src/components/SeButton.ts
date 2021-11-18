/* eslint-disable */
/* tslint:disable */
// @ts-nocheck
import { Components, JSX } from '@se/web-ui';


interface SeButtonProps {
  
  /** Defines the visual appearance of the button.
`flat` is the default option, which includes a gray background.
`raised` adds a box shadow to the button.
`outline` adds a border to the button.
`login` and `signup` are specific options for "Login" and "Sign Up" buttons in your application. */
  option?: Components.SeButton["option"]
  
  /** Defines the size of the button.
`nano` sets the font to 12px font and a 24px height.  Used primarily with the `se-radio-group` component.
`small` is the default option, with a 14px font and a 32px height.
`medium` sets the font to 16px and the height to 40px.
`large` sets the font to 18px and the height to 48px. */
  size?: Components.SeButton["size"]
  
  /** Defines the background color of the button. The default setting is `standard`. */
  color?: Components.SeButton["color"]
  
  /** Optional property that defines the value of your button, which gets passed to the parent component when clicking the button. */
  value?: Components.SeButton["value"]
  
  /** Optional property that determines if your button includes an icon. */
  icon?: Components.SeButton["icon"]
  
  /** Optional property to change the color of the icon when needed. For example, the user dropdown in the header component. */
  iconColor?: Components.SeButton["iconColor"]
  
  /** Property to specify if the button should only display an icon (no extra spacing). */
  iconOnly?: Components.SeButton["iconOnly"]
  
  /** Optional property.
`button`	is the default setting, creating a clickable button.
`submit`	creates a "submit" button (useful to submit form-data).
`reset`	creates a reset button (useful to reset form-data to its initial values). */
  type?: Components.SeButton["type"]
  
  /** optional property. define the padding around the button
`none` no padding.
`small` 4px padding: default
`medium` 8px padding.
`large` 16px padding. */
  padding?: Components.SeButton["padding"]
  
  /** Optional property that defines if the button is disabled.  Set to `false` by default. */
  disabled?: Components.SeButton["disabled"]
  
  /** Optional property that defines if the button should be shown as selected. Used with the `se-radio-group` component. */
  selected?: Components.SeButton["selected"]
  
  /** Optional property that defines if the button has a caption or tooltip text. */
  caption?: Components.SeButton["caption"]
  
  /** Optional property that defines if the button displays as a block in it's container.
When set to true, the button will be as wide as its container. */
  block?: Components.SeButton["block"]
}

interface SeButtonEvents {
  
  /** Passes button data to the parent component on a click. */
  didClick: Parameters<JSX.SeButton["onDidClick"]>[0]
}

interface SeButtonSlots {
  default: any
}
  
/* generated by Svelte v3.42.6 */
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
	let se_button;
	let current;
	let mounted;
	let dispose;
	const default_slot_template = /*#slots*/ ctx[19].default;
	const default_slot = create_slot(default_slot_template, ctx, /*$$scope*/ ctx[18], null);

	return {
		c() {
			se_button = element("se-button");
			if (default_slot) default_slot.c();
			set_custom_element_data(se_button, "option", /*option*/ ctx[0]);
			set_custom_element_data(se_button, "size", /*size*/ ctx[1]);
			set_custom_element_data(se_button, "color", /*color*/ ctx[2]);
			set_custom_element_data(se_button, "value", /*value*/ ctx[3]);
			set_custom_element_data(se_button, "icon", /*icon*/ ctx[4]);
			set_custom_element_data(se_button, "icon-color", /*iconColor*/ ctx[5]);
			set_custom_element_data(se_button, "icon-only", /*iconOnly*/ ctx[6]);
			set_custom_element_data(se_button, "type", /*type*/ ctx[7]);
			set_custom_element_data(se_button, "padding", /*padding*/ ctx[8]);
			set_custom_element_data(se_button, "disabled", /*disabled*/ ctx[9]);
			set_custom_element_data(se_button, "selected", /*selected*/ ctx[10]);
			set_custom_element_data(se_button, "caption", /*caption*/ ctx[11]);
			set_custom_element_data(se_button, "block", /*block*/ ctx[12]);
		},
		m(target, anchor) {
			insert(target, se_button, anchor);

			if (default_slot) {
				default_slot.m(se_button, null);
			}

			/*se_button_binding*/ ctx[20](se_button);
			current = true;

			if (!mounted) {
				dispose = listen(se_button, "didClick", /*onEvent*/ ctx[14]);
				mounted = true;
			}
		},
		p(ctx, [dirty]) {
			if (default_slot) {
				if (default_slot.p && (!current || dirty & /*$$scope*/ 262144)) {
					update_slot_base(
						default_slot,
						default_slot_template,
						ctx,
						/*$$scope*/ ctx[18],
						!current
						? get_all_dirty_from_scope(/*$$scope*/ ctx[18])
						: get_slot_changes(default_slot_template, /*$$scope*/ ctx[18], dirty, null),
						null
					);
				}
			}

			if (!current || dirty & /*option*/ 1) {
				set_custom_element_data(se_button, "option", /*option*/ ctx[0]);
			}

			if (!current || dirty & /*size*/ 2) {
				set_custom_element_data(se_button, "size", /*size*/ ctx[1]);
			}

			if (!current || dirty & /*color*/ 4) {
				set_custom_element_data(se_button, "color", /*color*/ ctx[2]);
			}

			if (!current || dirty & /*value*/ 8) {
				set_custom_element_data(se_button, "value", /*value*/ ctx[3]);
			}

			if (!current || dirty & /*icon*/ 16) {
				set_custom_element_data(se_button, "icon", /*icon*/ ctx[4]);
			}

			if (!current || dirty & /*iconColor*/ 32) {
				set_custom_element_data(se_button, "icon-color", /*iconColor*/ ctx[5]);
			}

			if (!current || dirty & /*iconOnly*/ 64) {
				set_custom_element_data(se_button, "icon-only", /*iconOnly*/ ctx[6]);
			}

			if (!current || dirty & /*type*/ 128) {
				set_custom_element_data(se_button, "type", /*type*/ ctx[7]);
			}

			if (!current || dirty & /*padding*/ 256) {
				set_custom_element_data(se_button, "padding", /*padding*/ ctx[8]);
			}

			if (!current || dirty & /*disabled*/ 512) {
				set_custom_element_data(se_button, "disabled", /*disabled*/ ctx[9]);
			}

			if (!current || dirty & /*selected*/ 1024) {
				set_custom_element_data(se_button, "selected", /*selected*/ ctx[10]);
			}

			if (!current || dirty & /*caption*/ 2048) {
				set_custom_element_data(se_button, "caption", /*caption*/ ctx[11]);
			}

			if (!current || dirty & /*block*/ 4096) {
				set_custom_element_data(se_button, "block", /*block*/ ctx[12]);
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
			if (detaching) detach(se_button);
			if (default_slot) default_slot.d(detaching);
			/*se_button_binding*/ ctx[20](null);
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
	let { option = undefined } = $$props;
	let { size = undefined } = $$props;
	let { color = undefined } = $$props;
	let { value = undefined } = $$props;
	let { icon = undefined } = $$props;
	let { iconColor = undefined } = $$props;
	let { iconOnly = undefined } = $$props;
	let { type = undefined } = $$props;
	let { padding = undefined } = $$props;
	let { disabled = undefined } = $$props;
	let { selected = undefined } = $$props;
	let { caption = undefined } = $$props;
	let { block = undefined } = $$props;
	const setDisabled = (...args) => __ref.setDisabled(...args);
	const setGrouped = (...args) => __ref.setGrouped(...args);
	const getWebComponent = () => __ref;

	onMount(() => {
		__mounted = true;
	});

	const setProp = (prop, value) => {
		if (__ref) $$invalidate(13, __ref[prop] = value, __ref);
	};

	const onEvent = e => {
		e.stopPropagation();
		dispatch(e.type, e.detail);
	};

	function se_button_binding($$value) {
		binding_callbacks[$$value ? 'unshift' : 'push'](() => {
			__ref = $$value;
			$$invalidate(13, __ref);
		});
	}

	$$self.$$set = $$props => {
		if ('option' in $$props) $$invalidate(0, option = $$props.option);
		if ('size' in $$props) $$invalidate(1, size = $$props.size);
		if ('color' in $$props) $$invalidate(2, color = $$props.color);
		if ('value' in $$props) $$invalidate(3, value = $$props.value);
		if ('icon' in $$props) $$invalidate(4, icon = $$props.icon);
		if ('iconColor' in $$props) $$invalidate(5, iconColor = $$props.iconColor);
		if ('iconOnly' in $$props) $$invalidate(6, iconOnly = $$props.iconOnly);
		if ('type' in $$props) $$invalidate(7, type = $$props.type);
		if ('padding' in $$props) $$invalidate(8, padding = $$props.padding);
		if ('disabled' in $$props) $$invalidate(9, disabled = $$props.disabled);
		if ('selected' in $$props) $$invalidate(10, selected = $$props.selected);
		if ('caption' in $$props) $$invalidate(11, caption = $$props.caption);
		if ('block' in $$props) $$invalidate(12, block = $$props.block);
		if ('$$scope' in $$props) $$invalidate(18, $$scope = $$props.$$scope);
	};

	return [
		option,
		size,
		color,
		value,
		icon,
		iconColor,
		iconOnly,
		type,
		padding,
		disabled,
		selected,
		caption,
		block,
		__ref,
		onEvent,
		setDisabled,
		setGrouped,
		getWebComponent,
		$$scope,
		slots,
		se_button_binding
	];
}

class SeButton extends SvelteComponent {
  $$prop_def: SeButtonProps;
  $$events_def: SeButtonEvents;
  $$slot_def: SeButtonSlots;

  $on<K extends keyof SeButtonEvents>(type: K, callback: (e: SeButtonEvents[K]) => any): () => void {
	  return super.$on(type, callback);
	}

  $set($$props: Partial<SeButtonProps>): void {
	  super.$set($$props);
	}

	constructor(options) {
		super();

		init(this, options, instance, create_fragment, safe_not_equal, {
			option: 0,
			size: 1,
			color: 2,
			value: 3,
			icon: 4,
			iconColor: 5,
			iconOnly: 6,
			type: 7,
			padding: 8,
			disabled: 9,
			selected: 10,
			caption: 11,
			block: 12,
			setDisabled: 15,
			setGrouped: 16,
			getWebComponent: 17
		});
	}

	get option() {
		return this.$$.ctx[0];
	}

	set option(option) {
		this.$$set({ option });
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

	get value() {
		return this.$$.ctx[3];
	}

	set value(value) {
		this.$$set({ value });
		flush();
	}

	get icon() {
		return this.$$.ctx[4];
	}

	set icon(icon) {
		this.$$set({ icon });
		flush();
	}

	get iconColor() {
		return this.$$.ctx[5];
	}

	set iconColor(iconColor) {
		this.$$set({ iconColor });
		flush();
	}

	get iconOnly() {
		return this.$$.ctx[6];
	}

	set iconOnly(iconOnly) {
		this.$$set({ iconOnly });
		flush();
	}

	get type() {
		return this.$$.ctx[7];
	}

	set type(type) {
		this.$$set({ type });
		flush();
	}

	get padding() {
		return this.$$.ctx[8];
	}

	set padding(padding) {
		this.$$set({ padding });
		flush();
	}

	get disabled() {
		return this.$$.ctx[9];
	}

	set disabled(disabled) {
		this.$$set({ disabled });
		flush();
	}

	get selected() {
		return this.$$.ctx[10];
	}

	set selected(selected) {
		this.$$set({ selected });
		flush();
	}

	get caption() {
		return this.$$.ctx[11];
	}

	set caption(caption) {
		this.$$set({ caption });
		flush();
	}

	get block() {
		return this.$$.ctx[12];
	}

	set block(block) {
		this.$$set({ block });
		flush();
	}

	
  /** Sets the disabled property for your button from the parent component. */
 get setDisabled(): Components.SeButton["setDisabled"] {
		return this.$$.ctx[15];
	}

	
  /** Indicates if the button is part of a group of buttons within the `se-radio-group` component. */
 get setGrouped(): Components.SeButton["setGrouped"] {
		return this.$$.ctx[16];
	}

	get getWebComponent(): HTMLSeButtonElement | undefined {
		return this.$$.ctx[17];
	}
}

export default SeButton;