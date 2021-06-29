/* eslint-disable */
/* tslint:disable */
// @ts-nocheck
import { Components, JSX } from '@se/web-ui';


interface SeDropdownProps {
  
  /**  */
  alignment?: Components.SeDropdown["alignment"]
  
  /** Defines the preferred vertically align of the dropdown. It will automatically re-position if the there is not enough space.
`top`: Position the container with respect to the top side of the trigger element.
`bottom`: Position the container with respect to the bottom side of the trigger element. */
  verticalAlignment?: Components.SeDropdown["verticalAlignment"]
  
  /** Sets the maximum width of the dropdown.  Default setting is "200px". */
  maxWidth?: Components.SeDropdown["maxWidth"]
  
  /** Sets the maximum height of the dropdown.  Default setting is "400px". */
  maxHeight?: Components.SeDropdown["maxHeight"]
  
  /** Define the type of even needed to open the modal. By default it's on click. If `hover` is selected, then the dropdown will close when the mouse goes away as well. */
  action?: Components.SeDropdown["action"]
}

interface SeDropdownEvents {
  
  /** Event emitted when the dropdown has been opened. */
  didOpen: Parameters<JSX.SeDropdown["onDidOpen"]>[0]
  
  /** Event emitted when the dropdown has been closed. */
  didClose: Parameters<JSX.SeDropdown["onDidClose"]>[0]
  
  /** Event emitted when the dropdown has been touched. Every dropdown listen to this event to avoid avoid multiple dropdown open at the same time. */
  cancelAllDropdown: Parameters<JSX.SeDropdown["onCancelAllDropdown"]>[0]
}

interface SeDropdownSlots {
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
	let se_dropdown;
	let current;
	let mounted;
	let dispose;
	const default_slot_template = /*#slots*/ ctx[11].default;
	const default_slot = create_slot(default_slot_template, ctx, /*$$scope*/ ctx[10], null);

	return {
		c() {
			se_dropdown = element("se-dropdown");
			if (default_slot) default_slot.c();
			set_custom_element_data(se_dropdown, "alignment", /*alignment*/ ctx[0]);
			set_custom_element_data(se_dropdown, "vertical-alignment", /*verticalAlignment*/ ctx[1]);
			set_custom_element_data(se_dropdown, "max-width", /*maxWidth*/ ctx[2]);
			set_custom_element_data(se_dropdown, "max-height", /*maxHeight*/ ctx[3]);
			set_custom_element_data(se_dropdown, "action", /*action*/ ctx[4]);
		},
		m(target, anchor) {
			insert(target, se_dropdown, anchor);

			if (default_slot) {
				default_slot.m(se_dropdown, null);
			}

			/*se_dropdown_binding*/ ctx[12](se_dropdown);
			current = true;

			if (!mounted) {
				dispose = [
					listen(se_dropdown, "didOpen", /*onEvent*/ ctx[6]),
					listen(se_dropdown, "didClose", /*onEvent*/ ctx[6]),
					listen(se_dropdown, "cancelAllDropdown", /*onEvent*/ ctx[6])
				];

				mounted = true;
			}
		},
		p(ctx, [dirty]) {
			if (default_slot) {
				if (default_slot.p && (!current || dirty & /*$$scope*/ 1024)) {
					update_slot(default_slot, default_slot_template, ctx, /*$$scope*/ ctx[10], !current ? -1 : dirty, null, null);
				}
			}

			if (!current || dirty & /*alignment*/ 1) {
				set_custom_element_data(se_dropdown, "alignment", /*alignment*/ ctx[0]);
			}

			if (!current || dirty & /*verticalAlignment*/ 2) {
				set_custom_element_data(se_dropdown, "vertical-alignment", /*verticalAlignment*/ ctx[1]);
			}

			if (!current || dirty & /*maxWidth*/ 4) {
				set_custom_element_data(se_dropdown, "max-width", /*maxWidth*/ ctx[2]);
			}

			if (!current || dirty & /*maxHeight*/ 8) {
				set_custom_element_data(se_dropdown, "max-height", /*maxHeight*/ ctx[3]);
			}

			if (!current || dirty & /*action*/ 16) {
				set_custom_element_data(se_dropdown, "action", /*action*/ ctx[4]);
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
			if (detaching) detach(se_dropdown);
			if (default_slot) default_slot.d(detaching);
			/*se_dropdown_binding*/ ctx[12](null);
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
	let { alignment = undefined } = $$props;
	let { verticalAlignment = undefined } = $$props;
	let { maxWidth = undefined } = $$props;
	let { maxHeight = undefined } = $$props;
	let { action = undefined } = $$props;
	const open = (...args) => __ref.open(...args);
	const close = (...args) => __ref.close(...args);
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

	function se_dropdown_binding($$value) {
		binding_callbacks[$$value ? "unshift" : "push"](() => {
			__ref = $$value;
			$$invalidate(5, __ref);
		});
	}

	$$self.$$set = $$props => {
		if ("alignment" in $$props) $$invalidate(0, alignment = $$props.alignment);
		if ("verticalAlignment" in $$props) $$invalidate(1, verticalAlignment = $$props.verticalAlignment);
		if ("maxWidth" in $$props) $$invalidate(2, maxWidth = $$props.maxWidth);
		if ("maxHeight" in $$props) $$invalidate(3, maxHeight = $$props.maxHeight);
		if ("action" in $$props) $$invalidate(4, action = $$props.action);
		if ("$$scope" in $$props) $$invalidate(10, $$scope = $$props.$$scope);
	};

	return [
		alignment,
		verticalAlignment,
		maxWidth,
		maxHeight,
		action,
		__ref,
		onEvent,
		open,
		close,
		getWebComponent,
		$$scope,
		slots,
		se_dropdown_binding
	];
}

class SeDropdown extends SvelteComponent {
  $$prop_def: SeDropdownProps;
  $$events_def: SeDropdownEvents;
  $$slot_def: SeDropdownSlots;

  $on<K extends keyof SeDropdownEvents>(type: K, callback: (e: SeDropdownEvents[K]) => any): () => void {
	  return super.$on(type, callback);
	}

  $set($$props: Partial<SeDropdownProps>): void {
	  super.$set($$props);
	}

	constructor(options) {
		super();

		init(this, options, instance, create_fragment, safe_not_equal, {
			alignment: 0,
			verticalAlignment: 1,
			maxWidth: 2,
			maxHeight: 3,
			action: 4,
			open: 7,
			close: 8,
			getWebComponent: 9
		});
	}

	get alignment() {
		return this.$$.ctx[0];
	}

	set alignment(alignment) {
		this.$set({ alignment });
		flush();
	}

	get verticalAlignment() {
		return this.$$.ctx[1];
	}

	set verticalAlignment(verticalAlignment) {
		this.$set({ verticalAlignment });
		flush();
	}

	get maxWidth() {
		return this.$$.ctx[2];
	}

	set maxWidth(maxWidth) {
		this.$set({ maxWidth });
		flush();
	}

	get maxHeight() {
		return this.$$.ctx[3];
	}

	set maxHeight(maxHeight) {
		this.$set({ maxHeight });
		flush();
	}

	get action() {
		return this.$$.ctx[4];
	}

	set action(action) {
		this.$set({ action });
		flush();
	}

	
  /** Method to open the dropdown from outside its parent element. */
 get open(): Components.SeDropdown["open"] {
		return this.$$.ctx[7];
	}

	
  /** Method to close the dropdown from outside its parent element. */
 get close(): Components.SeDropdown["close"] {
		return this.$$.ctx[8];
	}

	get getWebComponent(): HTMLSeDropdownElement | undefined {
		return this.$$.ctx[9];
	}
}

export default SeDropdown;