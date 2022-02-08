/* eslint-disable */
/* tslint:disable */
// @ts-nocheck
import { Components, JSX } from '@se/web-ui';


interface SeAppProps {
  
  /** Define the type of application. updating the option will impact the font used.
- `technical`: For technical application (i.e. EcoStuxure), the font used will be `Nunito`.
- `website` or `dcx`: For `se.com` application, the font used will be `Arial Rounded`. */
  option?: Components.SeApp["option"]
  
  /** Define if the content of the page should scroll with the header (useful on website context).
The header can then have the style sticky to stay in the top of the page if needed. */
  pageScroll?: Components.SeApp["pageScroll"]
  
  /** Define the them of application. Update the `--se-` css variables of the application.
- `light`: light mode of the design.
- `dark`: dark mode of the application.
- `auto`: Will match the OS configuration */
  theme?: Components.SeApp["theme"]
}

interface SeAppEvents {
  
  /**  */
  themeChanged: Parameters<JSX.SeApp["onThemeChanged"]>[0]
}

interface SeAppSlots {
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
	let se_app;
	let current;
	let mounted;
	let dispose;
	const default_slot_template = /*#slots*/ ctx[7].default;
	const default_slot = create_slot(default_slot_template, ctx, /*$$scope*/ ctx[6], null);

	return {
		c() {
			se_app = element("se-app");
			if (default_slot) default_slot.c();
			set_custom_element_data(se_app, "option", /*option*/ ctx[0]);
			set_custom_element_data(se_app, "page-scroll", /*pageScroll*/ ctx[1]);
			set_custom_element_data(se_app, "theme", /*theme*/ ctx[2]);
		},
		m(target, anchor) {
			insert(target, se_app, anchor);

			if (default_slot) {
				default_slot.m(se_app, null);
			}

			/*se_app_binding*/ ctx[8](se_app);
			current = true;

			if (!mounted) {
				dispose = listen(se_app, "themeChanged", /*onEvent*/ ctx[4]);
				mounted = true;
			}
		},
		p(ctx, [dirty]) {
			if (default_slot) {
				if (default_slot.p && (!current || dirty & /*$$scope*/ 64)) {
					update_slot_base(
						default_slot,
						default_slot_template,
						ctx,
						/*$$scope*/ ctx[6],
						!current
						? get_all_dirty_from_scope(/*$$scope*/ ctx[6])
						: get_slot_changes(default_slot_template, /*$$scope*/ ctx[6], dirty, null),
						null
					);
				}
			}

			if (!current || dirty & /*option*/ 1) {
				set_custom_element_data(se_app, "option", /*option*/ ctx[0]);
			}

			if (!current || dirty & /*pageScroll*/ 2) {
				set_custom_element_data(se_app, "page-scroll", /*pageScroll*/ ctx[1]);
			}

			if (!current || dirty & /*theme*/ 4) {
				set_custom_element_data(se_app, "theme", /*theme*/ ctx[2]);
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
			if (detaching) detach(se_app);
			if (default_slot) default_slot.d(detaching);
			/*se_app_binding*/ ctx[8](null);
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
	let { pageScroll = undefined } = $$props;
	let { theme = undefined } = $$props;
	const getWebComponent = () => __ref;

	onMount(() => {
		__mounted = true;
	});

	const setProp = (prop, value) => {
		if (__ref) $$invalidate(3, __ref[prop] = value, __ref);
	};

	const onEvent = e => {
		e.stopPropagation();
		dispatch(e.type, e.detail);
	};

	function se_app_binding($$value) {
		binding_callbacks[$$value ? 'unshift' : 'push'](() => {
			__ref = $$value;
			$$invalidate(3, __ref);
		});
	}

	$$self.$$set = $$props => {
		if ('option' in $$props) $$invalidate(0, option = $$props.option);
		if ('pageScroll' in $$props) $$invalidate(1, pageScroll = $$props.pageScroll);
		if ('theme' in $$props) $$invalidate(2, theme = $$props.theme);
		if ('$$scope' in $$props) $$invalidate(6, $$scope = $$props.$$scope);
	};

	return [
		option,
		pageScroll,
		theme,
		__ref,
		onEvent,
		getWebComponent,
		$$scope,
		slots,
		se_app_binding
	];
}

class SeApp extends SvelteComponent {
  $$prop_def: SeAppProps;
  $$events_def: SeAppEvents;
  $$slot_def: SeAppSlots;

  $on<K extends keyof SeAppEvents>(type: K, callback: (e: SeAppEvents[K]) => any): () => void {
	  return super.$on(type, callback);
	}

  $set($$props: Partial<SeAppProps>): void {
	  super.$set($$props);
	}

	constructor(options) {
		super();

		init(this, options, instance, create_fragment, safe_not_equal, {
			option: 0,
			pageScroll: 1,
			theme: 2,
			getWebComponent: 5
		});
	}

	get option() {
		return this.$$.ctx[0];
	}

	set option(option) {
		this.$$set({ option });
		flush();
	}

	get pageScroll() {
		return this.$$.ctx[1];
	}

	set pageScroll(pageScroll) {
		this.$$set({ pageScroll });
		flush();
	}

	get theme() {
		return this.$$.ctx[2];
	}

	set theme(theme) {
		this.$$set({ theme });
		flush();
	}

	get getWebComponent(): HTMLSeAppElement | undefined {
		return this.$$.ctx[5];
	}
}

export default SeApp;