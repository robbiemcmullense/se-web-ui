/* eslint-disable */
/* tslint:disable */
// @ts-nocheck
import { Components, JSX } from '@se/web-ui';


interface SeSnackbarProps {
  
  /** Indicates the background color of your snackbar.
`success`: green
`warning`: orange
`error`: red
`information`: dark grey, default setting */
  type?: Components.SeSnackbar["type"]
  
  /** The name of the icon you wish to display.  The default icon is an information circle. */
  icon?: Components.SeSnackbar["icon"]
  
  /** The content of the message you want the snackbar to display. */
  message?: Components.SeSnackbar["message"]
  
  /** Displays a "button" to close the snackbar.
The default setting is `false`.
This will be visible if set to `true`. */
  canClose?: Components.SeSnackbar["canClose"]
  
  /** Defines the text you want your custom action button to read. */
  actionText?: Components.SeSnackbar["actionText"]
  
  /**  */
  open?: Components.SeSnackbar["open"]
  
  /** Indicates the duration (in milliseconds) that the snackbar will display on screen before auto-closing, if `canClose` is set to false.
The default setting is 5000. */
  duration?: Components.SeSnackbar["duration"]
}

interface SeSnackbarEvents {
  
  /** Sends information to the parent component when closing the snackbar. */
  didClose: Parameters<JSX.SeSnackbar["onDidClose"]>[0]
  
  /** Sends information to the parent component when clicking a custom action button. */
  actionClicked: Parameters<JSX.SeSnackbar["onActionClicked"]>[0]
}

interface SeSnackbarSlots {
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
	run_all,
	safe_not_equal,
	set_custom_element_data,
	transition_in,
	transition_out,
	update_slot
} from "svelte/internal";

import { createEventDispatcher, onMount } from "svelte";

function create_fragment(ctx) {
	let se_snackbar;
	let current;
	let mounted;
	let dispose;
	const default_slot_template = /*#slots*/ ctx[11].default;
	const default_slot = create_slot(default_slot_template, ctx, /*$$scope*/ ctx[10], null);

	return {
		c() {
			se_snackbar = element("se-snackbar");
			if (default_slot) default_slot.c();
			set_custom_element_data(se_snackbar, "type", /*type*/ ctx[0]);
			set_custom_element_data(se_snackbar, "icon", /*icon*/ ctx[1]);
			set_custom_element_data(se_snackbar, "message", /*message*/ ctx[2]);
			set_custom_element_data(se_snackbar, "can-close", /*canClose*/ ctx[3]);
			set_custom_element_data(se_snackbar, "action-text", /*actionText*/ ctx[4]);
			set_custom_element_data(se_snackbar, "open", /*open*/ ctx[5]);
			set_custom_element_data(se_snackbar, "duration", /*duration*/ ctx[6]);
		},
		m(target, anchor) {
			insert(target, se_snackbar, anchor);

			if (default_slot) {
				default_slot.m(se_snackbar, null);
			}

			/*se_snackbar_binding*/ ctx[12](se_snackbar);
			current = true;

			if (!mounted) {
				dispose = [
					listen(se_snackbar, "didClose", /*onEvent*/ ctx[8]),
					listen(se_snackbar, "actionClicked", /*onEvent*/ ctx[8])
				];

				mounted = true;
			}
		},
		p(ctx, [dirty]) {
			if (default_slot) {
				if (default_slot.p && (!current || dirty & /*$$scope*/ 1024)) {
					update_slot(default_slot, default_slot_template, ctx, /*$$scope*/ ctx[10], dirty, null, null);
				}
			}

			if (!current || dirty & /*type*/ 1) {
				set_custom_element_data(se_snackbar, "type", /*type*/ ctx[0]);
			}

			if (!current || dirty & /*icon*/ 2) {
				set_custom_element_data(se_snackbar, "icon", /*icon*/ ctx[1]);
			}

			if (!current || dirty & /*message*/ 4) {
				set_custom_element_data(se_snackbar, "message", /*message*/ ctx[2]);
			}

			if (!current || dirty & /*canClose*/ 8) {
				set_custom_element_data(se_snackbar, "can-close", /*canClose*/ ctx[3]);
			}

			if (!current || dirty & /*actionText*/ 16) {
				set_custom_element_data(se_snackbar, "action-text", /*actionText*/ ctx[4]);
			}

			if (!current || dirty & /*open*/ 32) {
				set_custom_element_data(se_snackbar, "open", /*open*/ ctx[5]);
			}

			if (!current || dirty & /*duration*/ 64) {
				set_custom_element_data(se_snackbar, "duration", /*duration*/ ctx[6]);
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
			if (detaching) detach(se_snackbar);
			if (default_slot) default_slot.d(detaching);
			/*se_snackbar_binding*/ ctx[12](null);
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
	let { type = undefined } = $$props;
	let { icon = undefined } = $$props;
	let { message = undefined } = $$props;
	let { canClose = undefined } = $$props;
	let { actionText = undefined } = $$props;
	let { open = undefined } = $$props;
	let { duration = undefined } = $$props;
	const getWebComponent = () => __ref;

	onMount(() => {
		__mounted = true;
	});

	const setProp = (prop, value) => {
		if (__ref) $$invalidate(7, __ref[prop] = value, __ref);
	};

	const onEvent = e => {
		e.stopPropagation();
		dispatch(e.type, e.detail);
	};

	function se_snackbar_binding($$value) {
		binding_callbacks[$$value ? "unshift" : "push"](() => {
			__ref = $$value;
			$$invalidate(7, __ref);
		});
	}

	$$self.$$set = $$props => {
		if ("type" in $$props) $$invalidate(0, type = $$props.type);
		if ("icon" in $$props) $$invalidate(1, icon = $$props.icon);
		if ("message" in $$props) $$invalidate(2, message = $$props.message);
		if ("canClose" in $$props) $$invalidate(3, canClose = $$props.canClose);
		if ("actionText" in $$props) $$invalidate(4, actionText = $$props.actionText);
		if ("open" in $$props) $$invalidate(5, open = $$props.open);
		if ("duration" in $$props) $$invalidate(6, duration = $$props.duration);
		if ("$$scope" in $$props) $$invalidate(10, $$scope = $$props.$$scope);
	};

	return [
		type,
		icon,
		message,
		canClose,
		actionText,
		open,
		duration,
		__ref,
		onEvent,
		getWebComponent,
		$$scope,
		slots,
		se_snackbar_binding
	];
}

class SeSnackbar extends SvelteComponent {
  $$prop_def: SeSnackbarProps;
  $$events_def: SeSnackbarEvents;
  $$slot_def: SeSnackbarSlots;

  $on<K extends keyof SeSnackbarEvents>(type: K, callback: (e: SeSnackbarEvents[K]) => any): () => void {
	  return super.$on(type, callback);
	}

  $set($$props: Partial<SeSnackbarProps>): void {
	  super.$set($$props);
	}

	constructor(options) {
		super();

		init(this, options, instance, create_fragment, safe_not_equal, {
			type: 0,
			icon: 1,
			message: 2,
			canClose: 3,
			actionText: 4,
			open: 5,
			duration: 6,
			getWebComponent: 9
		});
	}

	get type() {
		return this.$$.ctx[0];
	}

	set type(type) {
		this.$set({ type });
		flush();
	}

	get icon() {
		return this.$$.ctx[1];
	}

	set icon(icon) {
		this.$set({ icon });
		flush();
	}

	get message() {
		return this.$$.ctx[2];
	}

	set message(message) {
		this.$set({ message });
		flush();
	}

	get canClose() {
		return this.$$.ctx[3];
	}

	set canClose(canClose) {
		this.$set({ canClose });
		flush();
	}

	get actionText() {
		return this.$$.ctx[4];
	}

	set actionText(actionText) {
		this.$set({ actionText });
		flush();
	}

	get open() {
		return this.$$.ctx[5];
	}

	set open(open) {
		this.$set({ open });
		flush();
	}

	get duration() {
		return this.$$.ctx[6];
	}

	set duration(duration) {
		this.$set({ duration });
		flush();
	}

	get getWebComponent(): HTMLSeSnackbarElement | undefined {
		return this.$$.ctx[9];
	}
}

export default SeSnackbar;