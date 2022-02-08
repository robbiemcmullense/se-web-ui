/* eslint-disable */
/* tslint:disable */
// @ts-nocheck
import { Components, JSX } from '@se/web-ui';


interface SeDialogHeaderProps {
  
  /** Defaulted to a small padding.
When set to `indent`, the header will have an alternative margins and paddings. */
  option?: Components.SeDialogHeader["option"]
  
  /** Defines the color of the dialog header.
`standard`: Standard color schema.
`alternative`: Alternative background with standard color for the text.
`primary`: Primary color schema.
`secondary`: Secondary color schema.
`information`: Information color schema.
By default, the primary color will be used. */
  color?: Components.SeDialogHeader["color"]
  
  /** optional property. define the padding around the button
`small` small padding: default
`large` large padding. */
  padding?: Components.SeDialogHeader["padding"]
  
  /** Display the close icon to close the dialog.
Default setting is `false`. */
  closeIcon?: Components.SeDialogHeader["closeIcon"]
}

interface SeDialogHeaderEvents {
  
  /** Send data to the parent component when clicking an element within the dialog to close it.
The modal can then be safely removed from the DOM. */
  didCloseDialog: Parameters<JSX.SeDialogHeader["onDidCloseDialog"]>[0]
}

interface SeDialogHeaderSlots {
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
	let se_dialog_header;
	let current;
	let mounted;
	let dispose;
	const default_slot_template = /*#slots*/ ctx[8].default;
	const default_slot = create_slot(default_slot_template, ctx, /*$$scope*/ ctx[7], null);

	return {
		c() {
			se_dialog_header = element("se-dialog-header");
			if (default_slot) default_slot.c();
			set_custom_element_data(se_dialog_header, "option", /*option*/ ctx[0]);
			set_custom_element_data(se_dialog_header, "color", /*color*/ ctx[1]);
			set_custom_element_data(se_dialog_header, "padding", /*padding*/ ctx[2]);
			set_custom_element_data(se_dialog_header, "close-icon", /*closeIcon*/ ctx[3]);
		},
		m(target, anchor) {
			insert(target, se_dialog_header, anchor);

			if (default_slot) {
				default_slot.m(se_dialog_header, null);
			}

			/*se_dialog_header_binding*/ ctx[9](se_dialog_header);
			current = true;

			if (!mounted) {
				dispose = listen(se_dialog_header, "didCloseDialog", /*onEvent*/ ctx[5]);
				mounted = true;
			}
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
				set_custom_element_data(se_dialog_header, "option", /*option*/ ctx[0]);
			}

			if (!current || dirty & /*color*/ 2) {
				set_custom_element_data(se_dialog_header, "color", /*color*/ ctx[1]);
			}

			if (!current || dirty & /*padding*/ 4) {
				set_custom_element_data(se_dialog_header, "padding", /*padding*/ ctx[2]);
			}

			if (!current || dirty & /*closeIcon*/ 8) {
				set_custom_element_data(se_dialog_header, "close-icon", /*closeIcon*/ ctx[3]);
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
			if (detaching) detach(se_dialog_header);
			if (default_slot) default_slot.d(detaching);
			/*se_dialog_header_binding*/ ctx[9](null);
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
	let { color = undefined } = $$props;
	let { padding = undefined } = $$props;
	let { closeIcon = undefined } = $$props;
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

	function se_dialog_header_binding($$value) {
		binding_callbacks[$$value ? 'unshift' : 'push'](() => {
			__ref = $$value;
			$$invalidate(4, __ref);
		});
	}

	$$self.$$set = $$props => {
		if ('option' in $$props) $$invalidate(0, option = $$props.option);
		if ('color' in $$props) $$invalidate(1, color = $$props.color);
		if ('padding' in $$props) $$invalidate(2, padding = $$props.padding);
		if ('closeIcon' in $$props) $$invalidate(3, closeIcon = $$props.closeIcon);
		if ('$$scope' in $$props) $$invalidate(7, $$scope = $$props.$$scope);
	};

	return [
		option,
		color,
		padding,
		closeIcon,
		__ref,
		onEvent,
		getWebComponent,
		$$scope,
		slots,
		se_dialog_header_binding
	];
}

class SeDialogHeader extends SvelteComponent {
  $$prop_def: SeDialogHeaderProps;
  $$events_def: SeDialogHeaderEvents;
  $$slot_def: SeDialogHeaderSlots;

  $on<K extends keyof SeDialogHeaderEvents>(type: K, callback: (e: SeDialogHeaderEvents[K]) => any): () => void {
	  return super.$on(type, callback);
	}

  $set($$props: Partial<SeDialogHeaderProps>): void {
	  super.$set($$props);
	}

	constructor(options) {
		super();

		init(this, options, instance, create_fragment, safe_not_equal, {
			option: 0,
			color: 1,
			padding: 2,
			closeIcon: 3,
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

	get color() {
		return this.$$.ctx[1];
	}

	set color(color) {
		this.$$set({ color });
		flush();
	}

	get padding() {
		return this.$$.ctx[2];
	}

	set padding(padding) {
		this.$$set({ padding });
		flush();
	}

	get closeIcon() {
		return this.$$.ctx[3];
	}

	set closeIcon(closeIcon) {
		this.$$set({ closeIcon });
		flush();
	}

	get getWebComponent(): HTMLSeDialogHeaderElement | undefined {
		return this.$$.ctx[6];
	}
}

export default SeDialogHeader;