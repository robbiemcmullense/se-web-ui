/* eslint-disable */
/* tslint:disable */
// @ts-nocheck
import { Components, JSX } from '@se/web-ui';


interface SeListGroupProps {
  
  /** Defines the title of the item. */
  item?: Components.SeListGroup["item"]
  
  /** Defines the description of the item, placed under its title. */
  description?: Components.SeListGroup["description"]
  
  /** Defines if the list group should be displayed as selected (if one of its child elements is selected when collapsed). */
  selected?: Components.SeListGroup["selected"]
  
  /** Places an icon on the left side of the item list. */
  icon?: Components.SeListGroup["icon"]
  
  /** Optional property to define the color of the icon. The default color will be inherited from it's parent. */
  iconColor?: Components.SeListGroup["iconColor"]
  
  /** Defines if the item group is collapsed/closed. The default setting is `false`. */
  collapsed?: Components.SeListGroup["collapsed"]
  
  /** Defines the group indentation to add paddings to the list item (used with multiple list groups). */
  indentation?: Components.SeListGroup["indentation"]
  
  /** Disable the item for any interaction. */
  disabled?: Components.SeListGroup["disabled"]
  
  /** define the flex behavior of the group */
  flex?: Components.SeListGroup["flex"]
  
  /** Defines if list groups can be collapsed, true by default. */
  canCollapse?: Components.SeListGroup["canCollapse"]
}

interface SeListGroupEvents {
  
  /** Emitted when the group item is clicked. */
  didGroupClick: Parameters<JSX.SeListGroup["onDidGroupClick"]>[0]
  
  /** Emitted when the group item is collapsed/uncollapsed. */
  didGroupCollapse: Parameters<JSX.SeListGroup["onDidGroupCollapse"]>[0]
}

interface SeListGroupSlots {
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
	run_all,
	safe_not_equal,
	set_custom_element_data,
	transition_in,
	transition_out,
	update_slot_base
} from "svelte/internal";

import { createEventDispatcher, onMount } from 'svelte';

function create_fragment(ctx) {
	let se_list_group;
	let current;
	let mounted;
	let dispose;
	const default_slot_template = /*#slots*/ ctx[17].default;
	const default_slot = create_slot(default_slot_template, ctx, /*$$scope*/ ctx[16], null);

	return {
		c() {
			se_list_group = element("se-list-group");
			if (default_slot) default_slot.c();
			set_custom_element_data(se_list_group, "item", /*item*/ ctx[0]);
			set_custom_element_data(se_list_group, "description", /*description*/ ctx[1]);
			set_custom_element_data(se_list_group, "selected", /*selected*/ ctx[2]);
			set_custom_element_data(se_list_group, "icon", /*icon*/ ctx[3]);
			set_custom_element_data(se_list_group, "icon-color", /*iconColor*/ ctx[4]);
			set_custom_element_data(se_list_group, "collapsed", /*collapsed*/ ctx[5]);
			set_custom_element_data(se_list_group, "indentation", /*indentation*/ ctx[6]);
			set_custom_element_data(se_list_group, "disabled", /*disabled*/ ctx[7]);
			set_custom_element_data(se_list_group, "flex", /*flex*/ ctx[8]);
			set_custom_element_data(se_list_group, "can-collapse", /*canCollapse*/ ctx[9]);
		},
		m(target, anchor) {
			insert(target, se_list_group, anchor);

			if (default_slot) {
				default_slot.m(se_list_group, null);
			}

			/*se_list_group_binding*/ ctx[18](se_list_group);
			current = true;

			if (!mounted) {
				dispose = [
					listen(se_list_group, "didGroupClick", /*onEvent*/ ctx[11]),
					listen(se_list_group, "didGroupCollapse", /*onEvent*/ ctx[11])
				];

				mounted = true;
			}
		},
		p(ctx, [dirty]) {
			if (default_slot) {
				if (default_slot.p && (!current || dirty & /*$$scope*/ 65536)) {
					update_slot_base(
						default_slot,
						default_slot_template,
						ctx,
						/*$$scope*/ ctx[16],
						!current
						? get_all_dirty_from_scope(/*$$scope*/ ctx[16])
						: get_slot_changes(default_slot_template, /*$$scope*/ ctx[16], dirty, null),
						null
					);
				}
			}

			if (!current || dirty & /*item*/ 1) {
				set_custom_element_data(se_list_group, "item", /*item*/ ctx[0]);
			}

			if (!current || dirty & /*description*/ 2) {
				set_custom_element_data(se_list_group, "description", /*description*/ ctx[1]);
			}

			if (!current || dirty & /*selected*/ 4) {
				set_custom_element_data(se_list_group, "selected", /*selected*/ ctx[2]);
			}

			if (!current || dirty & /*icon*/ 8) {
				set_custom_element_data(se_list_group, "icon", /*icon*/ ctx[3]);
			}

			if (!current || dirty & /*iconColor*/ 16) {
				set_custom_element_data(se_list_group, "icon-color", /*iconColor*/ ctx[4]);
			}

			if (!current || dirty & /*collapsed*/ 32) {
				set_custom_element_data(se_list_group, "collapsed", /*collapsed*/ ctx[5]);
			}

			if (!current || dirty & /*indentation*/ 64) {
				set_custom_element_data(se_list_group, "indentation", /*indentation*/ ctx[6]);
			}

			if (!current || dirty & /*disabled*/ 128) {
				set_custom_element_data(se_list_group, "disabled", /*disabled*/ ctx[7]);
			}

			if (!current || dirty & /*flex*/ 256) {
				set_custom_element_data(se_list_group, "flex", /*flex*/ ctx[8]);
			}

			if (!current || dirty & /*canCollapse*/ 512) {
				set_custom_element_data(se_list_group, "can-collapse", /*canCollapse*/ ctx[9]);
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
			if (detaching) detach(se_list_group);
			if (default_slot) default_slot.d(detaching);
			/*se_list_group_binding*/ ctx[18](null);
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
	let { item = undefined } = $$props;
	let { description = undefined } = $$props;
	let { selected = undefined } = $$props;
	let { icon = undefined } = $$props;
	let { iconColor = undefined } = $$props;
	let { collapsed = undefined } = $$props;
	let { indentation = undefined } = $$props;
	let { disabled = undefined } = $$props;
	let { flex = undefined } = $$props;
	let { canCollapse = undefined } = $$props;
	const toggleCollapseTreeview = (...args) => __ref.toggleCollapseTreeview(...args);
	const focusElement = (...args) => __ref.focusElement(...args);
	const setOption = (...args) => __ref.setOption(...args);
	const getWebComponent = () => __ref;

	onMount(() => {
		__mounted = true;
	});

	const setProp = (prop, value) => {
		if (__ref) $$invalidate(10, __ref[prop] = value, __ref);
	};

	const onEvent = e => {
		e.stopPropagation();
		dispatch(e.type, e.detail);
	};

	function se_list_group_binding($$value) {
		binding_callbacks[$$value ? 'unshift' : 'push'](() => {
			__ref = $$value;
			$$invalidate(10, __ref);
		});
	}

	$$self.$$set = $$props => {
		if ('item' in $$props) $$invalidate(0, item = $$props.item);
		if ('description' in $$props) $$invalidate(1, description = $$props.description);
		if ('selected' in $$props) $$invalidate(2, selected = $$props.selected);
		if ('icon' in $$props) $$invalidate(3, icon = $$props.icon);
		if ('iconColor' in $$props) $$invalidate(4, iconColor = $$props.iconColor);
		if ('collapsed' in $$props) $$invalidate(5, collapsed = $$props.collapsed);
		if ('indentation' in $$props) $$invalidate(6, indentation = $$props.indentation);
		if ('disabled' in $$props) $$invalidate(7, disabled = $$props.disabled);
		if ('flex' in $$props) $$invalidate(8, flex = $$props.flex);
		if ('canCollapse' in $$props) $$invalidate(9, canCollapse = $$props.canCollapse);
		if ('$$scope' in $$props) $$invalidate(16, $$scope = $$props.$$scope);
	};

	return [
		item,
		description,
		selected,
		icon,
		iconColor,
		collapsed,
		indentation,
		disabled,
		flex,
		canCollapse,
		__ref,
		onEvent,
		toggleCollapseTreeview,
		focusElement,
		setOption,
		getWebComponent,
		$$scope,
		slots,
		se_list_group_binding
	];
}

class SeListGroup extends SvelteComponent {
  $$prop_def: SeListGroupProps;
  $$events_def: SeListGroupEvents;
  $$slot_def: SeListGroupSlots;

  $on<K extends keyof SeListGroupEvents>(type: K, callback: (e: SeListGroupEvents[K]) => any): () => void {
	  return super.$on(type, callback);
	}

  $set($$props: Partial<SeListGroupProps>): void {
	  super.$set($$props);
	}

	constructor(options) {
		super();

		init(this, options, instance, create_fragment, safe_not_equal, {
			item: 0,
			description: 1,
			selected: 2,
			icon: 3,
			iconColor: 4,
			collapsed: 5,
			indentation: 6,
			disabled: 7,
			flex: 8,
			canCollapse: 9,
			toggleCollapseTreeview: 12,
			focusElement: 13,
			setOption: 14,
			getWebComponent: 15
		});
	}

	get item() {
		return this.$$.ctx[0];
	}

	set item(item) {
		this.$$set({ item });
		flush();
	}

	get description() {
		return this.$$.ctx[1];
	}

	set description(description) {
		this.$$set({ description });
		flush();
	}

	get selected() {
		return this.$$.ctx[2];
	}

	set selected(selected) {
		this.$$set({ selected });
		flush();
	}

	get icon() {
		return this.$$.ctx[3];
	}

	set icon(icon) {
		this.$$set({ icon });
		flush();
	}

	get iconColor() {
		return this.$$.ctx[4];
	}

	set iconColor(iconColor) {
		this.$$set({ iconColor });
		flush();
	}

	get collapsed() {
		return this.$$.ctx[5];
	}

	set collapsed(collapsed) {
		this.$$set({ collapsed });
		flush();
	}

	get indentation() {
		return this.$$.ctx[6];
	}

	set indentation(indentation) {
		this.$$set({ indentation });
		flush();
	}

	get disabled() {
		return this.$$.ctx[7];
	}

	set disabled(disabled) {
		this.$$set({ disabled });
		flush();
	}

	get flex() {
		return this.$$.ctx[8];
	}

	set flex(flex) {
		this.$$set({ flex });
		flush();
	}

	get canCollapse() {
		return this.$$.ctx[9];
	}

	set canCollapse(canCollapse) {
		this.$$set({ canCollapse });
		flush();
	}

	
  /**  */
 get toggleCollapseTreeview(): Components.SeListGroup["toggleCollapseTreeview"] {
		return this.$$.ctx[12];
	}

	
  /**  */
 get focusElement(): Components.SeListGroup["focusElement"] {
		return this.$$.ctx[13];
	}

	
  /**  */
 get setOption(): Components.SeListGroup["setOption"] {
		return this.$$.ctx[14];
	}

	get getWebComponent(): HTMLSeListGroupElement | undefined {
		return this.$$.ctx[15];
	}
}

export default SeListGroup;