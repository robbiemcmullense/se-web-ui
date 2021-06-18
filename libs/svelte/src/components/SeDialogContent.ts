/* eslint-disable */
/* tslint:disable */
// @ts-nocheck
import { Components, JSX } from '@se/web-ui';


interface SeDialogContentProps {
  
  /** Defaulted to a small padding.
When set to `fill`, the content will fill the whole space of the dialog.
When set to `indent`, the content will alternative margins and paddings. */
  option?: Components.SeDialogContent["option"]
  
  /** optional property. define the padding around the button
`none` no padding.
`small` small padding: default
`large` large padding. */
  padding?: Components.SeDialogContent["padding"]
  
  /** Indicates an icon you want to display in your dialog. */
  icon?: Components.SeDialogContent["icon"]
  
  /** Indicates what icon color schema you want to render in your dialog. */
  iconColor?: Components.SeDialogContent["iconColor"]
  
  /** Indicates if se-dialog-content is the last child of the dialog component. */
  isLastChild?: Components.SeDialogContent["isLastChild"]
}

interface SeDialogContentEvents {
  
}

interface SeDialogContentSlots {
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
	let se_dialog_content;
	let current;
	const default_slot_template = /*#slots*/ ctx[8].default;
	const default_slot = create_slot(default_slot_template, ctx, /*$$scope*/ ctx[7], null);

	return {
		c() {
			se_dialog_content = element("se-dialog-content");
			if (default_slot) default_slot.c();
			set_custom_element_data(se_dialog_content, "option", /*option*/ ctx[0]);
			set_custom_element_data(se_dialog_content, "padding", /*padding*/ ctx[1]);
			set_custom_element_data(se_dialog_content, "icon", /*icon*/ ctx[2]);
			set_custom_element_data(se_dialog_content, "icon-color", /*iconColor*/ ctx[3]);
			set_custom_element_data(se_dialog_content, "is-last-child", /*isLastChild*/ ctx[4]);
		},
		m(target, anchor) {
			insert(target, se_dialog_content, anchor);

			if (default_slot) {
				default_slot.m(se_dialog_content, null);
			}

			/*se_dialog_content_binding*/ ctx[9](se_dialog_content);
			current = true;
		},
		p(ctx, [dirty]) {
			if (default_slot) {
				if (default_slot.p && (!current || dirty & /*$$scope*/ 128)) {
					update_slot(default_slot, default_slot_template, ctx, /*$$scope*/ ctx[7], dirty, null, null);
				}
			}

			if (!current || dirty & /*option*/ 1) {
				set_custom_element_data(se_dialog_content, "option", /*option*/ ctx[0]);
			}

			if (!current || dirty & /*padding*/ 2) {
				set_custom_element_data(se_dialog_content, "padding", /*padding*/ ctx[1]);
			}

			if (!current || dirty & /*icon*/ 4) {
				set_custom_element_data(se_dialog_content, "icon", /*icon*/ ctx[2]);
			}

			if (!current || dirty & /*iconColor*/ 8) {
				set_custom_element_data(se_dialog_content, "icon-color", /*iconColor*/ ctx[3]);
			}

			if (!current || dirty & /*isLastChild*/ 16) {
				set_custom_element_data(se_dialog_content, "is-last-child", /*isLastChild*/ ctx[4]);
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
			if (detaching) detach(se_dialog_content);
			if (default_slot) default_slot.d(detaching);
			/*se_dialog_content_binding*/ ctx[9](null);
		}
	};
}

function instance($$self, $$props, $$invalidate) {
	let { $$slots: slots = {}, $$scope } = $$props;
	let __ref;
	let __mounted = false;
	const dispatch = createEventDispatcher();
	let { option = undefined } = $$props;
	let { padding = undefined } = $$props;
	let { icon = undefined } = $$props;
	let { iconColor = undefined } = $$props;
	let { isLastChild = undefined } = $$props;
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

	function se_dialog_content_binding($$value) {
		binding_callbacks[$$value ? "unshift" : "push"](() => {
			__ref = $$value;
			$$invalidate(5, __ref);
		});
	}

	$$self.$$set = $$props => {
		if ("option" in $$props) $$invalidate(0, option = $$props.option);
		if ("padding" in $$props) $$invalidate(1, padding = $$props.padding);
		if ("icon" in $$props) $$invalidate(2, icon = $$props.icon);
		if ("iconColor" in $$props) $$invalidate(3, iconColor = $$props.iconColor);
		if ("isLastChild" in $$props) $$invalidate(4, isLastChild = $$props.isLastChild);
		if ("$$scope" in $$props) $$invalidate(7, $$scope = $$props.$$scope);
	};

	return [
		option,
		padding,
		icon,
		iconColor,
		isLastChild,
		__ref,
		getWebComponent,
		$$scope,
		slots,
		se_dialog_content_binding
	];
}

class SeDialogContent extends SvelteComponent {
  $$prop_def: SeDialogContentProps;
  $$events_def: SeDialogContentEvents;
  $$slot_def: SeDialogContentSlots;

  $on<K extends keyof SeDialogContentEvents>(type: K, callback: (e: SeDialogContentEvents[K]) => any): () => void {
	  return super.$on(type, callback);
	}

  $set($$props: Partial<SeDialogContentProps>): void {
	  super.$set($$props);
	}

	constructor(options) {
		super();

		init(this, options, instance, create_fragment, safe_not_equal, {
			option: 0,
			padding: 1,
			icon: 2,
			iconColor: 3,
			isLastChild: 4,
			getWebComponent: 6
		});
	}

	get option() {
		return this.$$.ctx[0];
	}

	set option(option) {
		this.$set({ option });
		flush();
	}

	get padding() {
		return this.$$.ctx[1];
	}

	set padding(padding) {
		this.$set({ padding });
		flush();
	}

	get icon() {
		return this.$$.ctx[2];
	}

	set icon(icon) {
		this.$set({ icon });
		flush();
	}

	get iconColor() {
		return this.$$.ctx[3];
	}

	set iconColor(iconColor) {
		this.$set({ iconColor });
		flush();
	}

	get isLastChild() {
		return this.$$.ctx[4];
	}

	set isLastChild(isLastChild) {
		this.$set({ isLastChild });
		flush();
	}

	get getWebComponent(): HTMLSeDialogContentElement | undefined {
		return this.$$.ctx[6];
	}
}

export default SeDialogContent;