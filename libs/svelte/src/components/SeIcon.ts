/* eslint-disable */
/* tslint:disable */
// @ts-nocheck
import { Components, JSX } from '@se/web-ui';


interface SeIconProps {
  
  /** Optional property to define if the icon should act as a button (clickable). */
  option?: Components.SeIcon["option"]
  
  /** Defines the size of an icon.
`nano` sets the size to 14px.
`micro` sets the size to 18px.
`small` sets the size to 24px.(default setting)
`medium` sets the size to 32px.
`large` sets the size to 52px.
`xlarge` sets the size to 62px. */
  size?: Components.SeIcon["size"]
  
  /** Optional property that defines the background color of the button.
The default color will be inherited from its parent. */
  color?: Components.SeIcon["color"]
  
  /** Optional property that defines if the button is disabled.  Set to `false` by default. */
  disabled?: Components.SeIcon["disabled"]
  
  /** Optional property that defines if the icon should animate when changing states (rotation for example). */
  animation?: Components.SeIcon["animation"]
  
  /** Optional property that defines the icon should be rotated. */
  rotate?: Components.SeIcon["rotate"]
  
  /** Optional property that defines if the icon should be mirrored. */
  mirror?: Components.SeIcon["mirror"]
  
  /** Optional property that defines the hover background color of the button.
This property is ignored if noHover is set, or if the icon option is not set to "button". */
  hoverColor?: Components.SeIcon["hoverColor"]
  
  /** Optional property that disables the hover background (only if option property is set to button).
If set, this will override the hoverColor property and ignore it. */
  noHover?: Components.SeIcon["noHover"]
}

interface SeIconEvents {
  
}

interface SeIconSlots {
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
	let se_icon;
	let current;
	const default_slot_template = /*#slots*/ ctx[12].default;
	const default_slot = create_slot(default_slot_template, ctx, /*$$scope*/ ctx[11], null);

	return {
		c() {
			se_icon = element("se-icon");
			if (default_slot) default_slot.c();
			set_custom_element_data(se_icon, "option", /*option*/ ctx[0]);
			set_custom_element_data(se_icon, "size", /*size*/ ctx[1]);
			set_custom_element_data(se_icon, "color", /*color*/ ctx[2]);
			set_custom_element_data(se_icon, "disabled", /*disabled*/ ctx[3]);
			set_custom_element_data(se_icon, "animation", /*animation*/ ctx[4]);
			set_custom_element_data(se_icon, "rotate", /*rotate*/ ctx[5]);
			set_custom_element_data(se_icon, "mirror", /*mirror*/ ctx[6]);
			set_custom_element_data(se_icon, "hover-color", /*hoverColor*/ ctx[7]);
			set_custom_element_data(se_icon, "no-hover", /*noHover*/ ctx[8]);
		},
		m(target, anchor) {
			insert(target, se_icon, anchor);

			if (default_slot) {
				default_slot.m(se_icon, null);
			}

			/*se_icon_binding*/ ctx[13](se_icon);
			current = true;
		},
		p(ctx, [dirty]) {
			if (default_slot) {
				if (default_slot.p && (!current || dirty & /*$$scope*/ 2048)) {
					update_slot_base(
						default_slot,
						default_slot_template,
						ctx,
						/*$$scope*/ ctx[11],
						!current
						? get_all_dirty_from_scope(/*$$scope*/ ctx[11])
						: get_slot_changes(default_slot_template, /*$$scope*/ ctx[11], dirty, null),
						null
					);
				}
			}

			if (!current || dirty & /*option*/ 1) {
				set_custom_element_data(se_icon, "option", /*option*/ ctx[0]);
			}

			if (!current || dirty & /*size*/ 2) {
				set_custom_element_data(se_icon, "size", /*size*/ ctx[1]);
			}

			if (!current || dirty & /*color*/ 4) {
				set_custom_element_data(se_icon, "color", /*color*/ ctx[2]);
			}

			if (!current || dirty & /*disabled*/ 8) {
				set_custom_element_data(se_icon, "disabled", /*disabled*/ ctx[3]);
			}

			if (!current || dirty & /*animation*/ 16) {
				set_custom_element_data(se_icon, "animation", /*animation*/ ctx[4]);
			}

			if (!current || dirty & /*rotate*/ 32) {
				set_custom_element_data(se_icon, "rotate", /*rotate*/ ctx[5]);
			}

			if (!current || dirty & /*mirror*/ 64) {
				set_custom_element_data(se_icon, "mirror", /*mirror*/ ctx[6]);
			}

			if (!current || dirty & /*hoverColor*/ 128) {
				set_custom_element_data(se_icon, "hover-color", /*hoverColor*/ ctx[7]);
			}

			if (!current || dirty & /*noHover*/ 256) {
				set_custom_element_data(se_icon, "no-hover", /*noHover*/ ctx[8]);
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
			if (detaching) detach(se_icon);
			if (default_slot) default_slot.d(detaching);
			/*se_icon_binding*/ ctx[13](null);
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
	let { disabled = undefined } = $$props;
	let { animation = undefined } = $$props;
	let { rotate = undefined } = $$props;
	let { mirror = undefined } = $$props;
	let { hoverColor = undefined } = $$props;
	let { noHover = undefined } = $$props;
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

	function se_icon_binding($$value) {
		binding_callbacks[$$value ? 'unshift' : 'push'](() => {
			__ref = $$value;
			$$invalidate(9, __ref);
		});
	}

	$$self.$$set = $$props => {
		if ('option' in $$props) $$invalidate(0, option = $$props.option);
		if ('size' in $$props) $$invalidate(1, size = $$props.size);
		if ('color' in $$props) $$invalidate(2, color = $$props.color);
		if ('disabled' in $$props) $$invalidate(3, disabled = $$props.disabled);
		if ('animation' in $$props) $$invalidate(4, animation = $$props.animation);
		if ('rotate' in $$props) $$invalidate(5, rotate = $$props.rotate);
		if ('mirror' in $$props) $$invalidate(6, mirror = $$props.mirror);
		if ('hoverColor' in $$props) $$invalidate(7, hoverColor = $$props.hoverColor);
		if ('noHover' in $$props) $$invalidate(8, noHover = $$props.noHover);
		if ('$$scope' in $$props) $$invalidate(11, $$scope = $$props.$$scope);
	};

	return [
		option,
		size,
		color,
		disabled,
		animation,
		rotate,
		mirror,
		hoverColor,
		noHover,
		__ref,
		getWebComponent,
		$$scope,
		slots,
		se_icon_binding
	];
}

class SeIcon extends SvelteComponent {
  $$prop_def: SeIconProps;
  $$events_def: SeIconEvents;
  $$slot_def: SeIconSlots;

  $on<K extends keyof SeIconEvents>(type: K, callback: (e: SeIconEvents[K]) => any): () => void {
	  return super.$on(type, callback);
	}

  $set($$props: Partial<SeIconProps>): void {
	  super.$set($$props);
	}

	constructor(options) {
		super();

		init(this, options, instance, create_fragment, safe_not_equal, {
			option: 0,
			size: 1,
			color: 2,
			disabled: 3,
			animation: 4,
			rotate: 5,
			mirror: 6,
			hoverColor: 7,
			noHover: 8,
			getWebComponent: 10
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

	get disabled() {
		return this.$$.ctx[3];
	}

	set disabled(disabled) {
		this.$$set({ disabled });
		flush();
	}

	get animation() {
		return this.$$.ctx[4];
	}

	set animation(animation) {
		this.$$set({ animation });
		flush();
	}

	get rotate() {
		return this.$$.ctx[5];
	}

	set rotate(rotate) {
		this.$$set({ rotate });
		flush();
	}

	get mirror() {
		return this.$$.ctx[6];
	}

	set mirror(mirror) {
		this.$$set({ mirror });
		flush();
	}

	get hoverColor() {
		return this.$$.ctx[7];
	}

	set hoverColor(hoverColor) {
		this.$$set({ hoverColor });
		flush();
	}

	get noHover() {
		return this.$$.ctx[8];
	}

	set noHover(noHover) {
		this.$$set({ noHover });
		flush();
	}

	get getWebComponent(): HTMLSeIconElement | undefined {
		return this.$$.ctx[10];
	}
}

export default SeIcon;