/* eslint-disable */
/* tslint:disable */
// @ts-nocheck
import { Components, JSX } from '@se/web-ui';


interface SeCheckboxProps {
  
  /** Determines the visual appearance of the component.
`checkbox` is the default option, which will render the component like a standard HTML checkbox.
`checkbox-fake` will render the component exactly like `checkbox` but it will not have any interactive elements.
   It means it will not be accessible with keyboard, it will not trigger any unwanted events -- totally "dumb" component.
`switch` renders the component like a toggle switch.
`onoff` renders the component like an "on/off" switch, with a red "off" button and a green "on" button. */
  option?: Components.SeCheckbox["option"]
  
  /** The value you want to pass to the parent component when the checkbox is checked. */
  value?: Components.SeCheckbox["value"]
  
  /** The label of the checkbox that will be attached to the box. */
  label?: Components.SeCheckbox["label"]
  
  /** Sets suffix of the label shown with semi-transparent text just after the label. */
  labelSuffix?: Components.SeCheckbox["labelSuffix"]
  
  /** Adds a red asterisk if the checkbox is required when used in a form field.  Default is `false`. */
  required?: Components.SeCheckbox["required"]
  
  /** Defines the color of the checkbox for when the option is set to `checkbox` or `switch`.
The default value is `success`, rendering a green color.
The `secondary` setting renders a blue color. */
  color?: Components.SeCheckbox["color"]
  
  /** Optional property that defines if the checkbox is disabled.  Set to `false` by default. */
  disabled?: Components.SeCheckbox["disabled"]
  
  /** Optional property that defines if the checkbox is in indeterminate state (only work with option="checkbox").  Set to `false` by default. */
  indeterminate?: Components.SeCheckbox["indeterminate"]
  
  /** The "checked" state of the checkbox, `false` by default. */
  selected?: Components.SeCheckbox["selected"]
  
  /** Defines the text the user will see for the "on" or "active" part of the checkbox when option is set to `onoff`.  Set to `ON` by default. */
  textOn?: Components.SeCheckbox["textOn"]
  
  /** Defines the text the user will see for the "off" or "inactive" part of the checkbox when option is set to `onoff`.  Set to `OFF` by default. */
  textOff?: Components.SeCheckbox["textOff"]
  
  /** Reduces the visual height of the checkbox when the option is set to `onoff`.
Useful if the on/off checkbox is within a header element. */
  header?: Components.SeCheckbox["header"]
  
  /** optional property. define the padding around the button
`none` no padding.
`small` 4px padding: default
`medium` 8px padding.
`large` 16px padding. */
  padding?: Components.SeCheckbox["padding"]
  
  /** Sets the position of the label for your checkbox component.
The default setting is `right` when the option is set to `checkbox`.
The default setting is `left` when the option is set to `switch`. */
  labelPos?: Components.SeCheckbox["labelPos"]
  
  /** Defines the size of the control. So far it's only supported by checkbox.

There are two options:
`s`: 16px
`m`: 20px (default)

Also affects the font size of the checkbox text label:
`s`: 14px
`m`: 16px (default) */
  size?: Components.SeCheckbox["size"]
}

interface SeCheckboxEvents {
  
  /** Send the checkbox value to the parent component when clicking on the checkbox. */
  didChange: Parameters<JSX.SeCheckbox["onDidChange"]>[0]
}

interface SeCheckboxSlots {
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
	listen,
	safe_not_equal,
	set_custom_element_data,
	transition_in,
	transition_out,
	update_slot
} from "svelte/internal";

import { createEventDispatcher, onMount } from "svelte";

function create_fragment(ctx) {
	let se_checkbox;
	let current;
	let mounted;
	let dispose;
	const default_slot_template = /*#slots*/ ctx[20].default;
	const default_slot = create_slot(default_slot_template, ctx, /*$$scope*/ ctx[19], null);

	return {
		c() {
			se_checkbox = element("se-checkbox");
			if (default_slot) default_slot.c();
			set_custom_element_data(se_checkbox, "option", /*option*/ ctx[1]);
			set_custom_element_data(se_checkbox, "value", /*value*/ ctx[2]);
			set_custom_element_data(se_checkbox, "label", /*label*/ ctx[3]);
			set_custom_element_data(se_checkbox, "label-suffix", /*labelSuffix*/ ctx[4]);
			set_custom_element_data(se_checkbox, "required", /*required*/ ctx[5]);
			set_custom_element_data(se_checkbox, "color", /*color*/ ctx[6]);
			set_custom_element_data(se_checkbox, "disabled", /*disabled*/ ctx[7]);
			set_custom_element_data(se_checkbox, "indeterminate", /*indeterminate*/ ctx[8]);
			set_custom_element_data(se_checkbox, "selected", /*selected*/ ctx[0]);
			set_custom_element_data(se_checkbox, "text-on", /*textOn*/ ctx[9]);
			set_custom_element_data(se_checkbox, "text-off", /*textOff*/ ctx[10]);
			set_custom_element_data(se_checkbox, "header", /*header*/ ctx[11]);
			set_custom_element_data(se_checkbox, "padding", /*padding*/ ctx[12]);
			set_custom_element_data(se_checkbox, "label-pos", /*labelPos*/ ctx[13]);
			set_custom_element_data(se_checkbox, "size", /*size*/ ctx[14]);
		},
		m(target, anchor) {
			insert(target, se_checkbox, anchor);

			if (default_slot) {
				default_slot.m(se_checkbox, null);
			}

			/*se_checkbox_binding*/ ctx[21](se_checkbox);
			current = true;

			if (!mounted) {
				dispose = listen(se_checkbox, "didChange", /*onEvent*/ ctx[16]);
				mounted = true;
			}
		},
		p(ctx, [dirty]) {
			if (default_slot) {
				if (default_slot.p && (!current || dirty & /*$$scope*/ 524288)) {
					update_slot(default_slot, default_slot_template, ctx, /*$$scope*/ ctx[19], dirty, null, null);
				}
			}

			if (!current || dirty & /*option*/ 2) {
				set_custom_element_data(se_checkbox, "option", /*option*/ ctx[1]);
			}

			if (!current || dirty & /*value*/ 4) {
				set_custom_element_data(se_checkbox, "value", /*value*/ ctx[2]);
			}

			if (!current || dirty & /*label*/ 8) {
				set_custom_element_data(se_checkbox, "label", /*label*/ ctx[3]);
			}

			if (!current || dirty & /*labelSuffix*/ 16) {
				set_custom_element_data(se_checkbox, "label-suffix", /*labelSuffix*/ ctx[4]);
			}

			if (!current || dirty & /*required*/ 32) {
				set_custom_element_data(se_checkbox, "required", /*required*/ ctx[5]);
			}

			if (!current || dirty & /*color*/ 64) {
				set_custom_element_data(se_checkbox, "color", /*color*/ ctx[6]);
			}

			if (!current || dirty & /*disabled*/ 128) {
				set_custom_element_data(se_checkbox, "disabled", /*disabled*/ ctx[7]);
			}

			if (!current || dirty & /*indeterminate*/ 256) {
				set_custom_element_data(se_checkbox, "indeterminate", /*indeterminate*/ ctx[8]);
			}

			if (!current || dirty & /*selected*/ 1) {
				set_custom_element_data(se_checkbox, "selected", /*selected*/ ctx[0]);
			}

			if (!current || dirty & /*textOn*/ 512) {
				set_custom_element_data(se_checkbox, "text-on", /*textOn*/ ctx[9]);
			}

			if (!current || dirty & /*textOff*/ 1024) {
				set_custom_element_data(se_checkbox, "text-off", /*textOff*/ ctx[10]);
			}

			if (!current || dirty & /*header*/ 2048) {
				set_custom_element_data(se_checkbox, "header", /*header*/ ctx[11]);
			}

			if (!current || dirty & /*padding*/ 4096) {
				set_custom_element_data(se_checkbox, "padding", /*padding*/ ctx[12]);
			}

			if (!current || dirty & /*labelPos*/ 8192) {
				set_custom_element_data(se_checkbox, "label-pos", /*labelPos*/ ctx[13]);
			}

			if (!current || dirty & /*size*/ 16384) {
				set_custom_element_data(se_checkbox, "size", /*size*/ ctx[14]);
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
			if (detaching) detach(se_checkbox);
			if (default_slot) default_slot.d(detaching);
			/*se_checkbox_binding*/ ctx[21](null);
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
	let { value = undefined } = $$props;
	let { label = undefined } = $$props;
	let { labelSuffix = undefined } = $$props;
	let { required = undefined } = $$props;
	let { color = undefined } = $$props;
	let { disabled = undefined } = $$props;
	let { indeterminate = undefined } = $$props;
	let { selected = undefined } = $$props;
	let { textOn = undefined } = $$props;
	let { textOff = undefined } = $$props;
	let { header = undefined } = $$props;
	let { padding = undefined } = $$props;
	let { labelPos = undefined } = $$props;
	let { size = undefined } = $$props;
	const setRequired = (...args) => __ref.setRequired(...args);
	const getWebComponent = () => __ref;

	onMount(() => {
		__mounted = true;
	});

	const setProp = (prop, value) => {
		if (__ref) $$invalidate(15, __ref[prop] = value, __ref);
	};

	const onEvent = e => {
		e.stopPropagation();
		dispatch(e.type, e.detail);

		if (e.type === "didChange") {
			$$invalidate(0, selected = e.detail);
		}
	};

	function se_checkbox_binding($$value) {
		binding_callbacks[$$value ? "unshift" : "push"](() => {
			__ref = $$value;
			$$invalidate(15, __ref);
		});
	}

	$$self.$$set = $$props => {
		if ("option" in $$props) $$invalidate(1, option = $$props.option);
		if ("value" in $$props) $$invalidate(2, value = $$props.value);
		if ("label" in $$props) $$invalidate(3, label = $$props.label);
		if ("labelSuffix" in $$props) $$invalidate(4, labelSuffix = $$props.labelSuffix);
		if ("required" in $$props) $$invalidate(5, required = $$props.required);
		if ("color" in $$props) $$invalidate(6, color = $$props.color);
		if ("disabled" in $$props) $$invalidate(7, disabled = $$props.disabled);
		if ("indeterminate" in $$props) $$invalidate(8, indeterminate = $$props.indeterminate);
		if ("selected" in $$props) $$invalidate(0, selected = $$props.selected);
		if ("textOn" in $$props) $$invalidate(9, textOn = $$props.textOn);
		if ("textOff" in $$props) $$invalidate(10, textOff = $$props.textOff);
		if ("header" in $$props) $$invalidate(11, header = $$props.header);
		if ("padding" in $$props) $$invalidate(12, padding = $$props.padding);
		if ("labelPos" in $$props) $$invalidate(13, labelPos = $$props.labelPos);
		if ("size" in $$props) $$invalidate(14, size = $$props.size);
		if ("$$scope" in $$props) $$invalidate(19, $$scope = $$props.$$scope);
	};

	return [
		selected,
		option,
		value,
		label,
		labelSuffix,
		required,
		color,
		disabled,
		indeterminate,
		textOn,
		textOff,
		header,
		padding,
		labelPos,
		size,
		__ref,
		onEvent,
		setRequired,
		getWebComponent,
		$$scope,
		slots,
		se_checkbox_binding
	];
}

class SeCheckbox extends SvelteComponent {
  $$prop_def: SeCheckboxProps;
  $$events_def: SeCheckboxEvents;
  $$slot_def: SeCheckboxSlots;

  $on<K extends keyof SeCheckboxEvents>(type: K, callback: (e: SeCheckboxEvents[K]) => any): () => void {
	  return super.$on(type, callback);
	}

  $set($$props: Partial<SeCheckboxProps>): void {
	  super.$set($$props);
	}

	constructor(options) {
		super();

		init(this, options, instance, create_fragment, safe_not_equal, {
			option: 1,
			value: 2,
			label: 3,
			labelSuffix: 4,
			required: 5,
			color: 6,
			disabled: 7,
			indeterminate: 8,
			selected: 0,
			textOn: 9,
			textOff: 10,
			header: 11,
			padding: 12,
			labelPos: 13,
			size: 14,
			setRequired: 17,
			getWebComponent: 18
		});
	}

	get option() {
		return this.$$.ctx[1];
	}

	set option(option) {
		this.$set({ option });
		flush();
	}

	get value() {
		return this.$$.ctx[2];
	}

	set value(value) {
		this.$set({ value });
		flush();
	}

	get label() {
		return this.$$.ctx[3];
	}

	set label(label) {
		this.$set({ label });
		flush();
	}

	get labelSuffix() {
		return this.$$.ctx[4];
	}

	set labelSuffix(labelSuffix) {
		this.$set({ labelSuffix });
		flush();
	}

	get required() {
		return this.$$.ctx[5];
	}

	set required(required) {
		this.$set({ required });
		flush();
	}

	get color() {
		return this.$$.ctx[6];
	}

	set color(color) {
		this.$set({ color });
		flush();
	}

	get disabled() {
		return this.$$.ctx[7];
	}

	set disabled(disabled) {
		this.$set({ disabled });
		flush();
	}

	get indeterminate() {
		return this.$$.ctx[8];
	}

	set indeterminate(indeterminate) {
		this.$set({ indeterminate });
		flush();
	}

	get selected() {
		return this.$$.ctx[0];
	}

	set selected(selected) {
		this.$set({ selected });
		flush();
	}

	get textOn() {
		return this.$$.ctx[9];
	}

	set textOn(textOn) {
		this.$set({ textOn });
		flush();
	}

	get textOff() {
		return this.$$.ctx[10];
	}

	set textOff(textOff) {
		this.$set({ textOff });
		flush();
	}

	get header() {
		return this.$$.ctx[11];
	}

	set header(header) {
		this.$set({ header });
		flush();
	}

	get padding() {
		return this.$$.ctx[12];
	}

	set padding(padding) {
		this.$set({ padding });
		flush();
	}

	get labelPos() {
		return this.$$.ctx[13];
	}

	set labelPos(labelPos) {
		this.$set({ labelPos });
		flush();
	}

	get size() {
		return this.$$.ctx[14];
	}

	set size(size) {
		this.$set({ size });
		flush();
	}

	
  /** Sets the required property on the checkbox element.  Used when the checkbox is within a form field. */
 get setRequired(): Components.SeCheckbox["setRequired"] {
		return this.$$.ctx[17];
	}

	get getWebComponent(): HTMLSeCheckboxElement | undefined {
		return this.$$.ctx[18];
	}
}

export default SeCheckbox;