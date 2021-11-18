/* eslint-disable */
/* tslint:disable */
// @ts-nocheck
import { Components, JSX } from '@se/web-ui';


interface SeHeaderProps {
  
  /** Sets the title of your application. */
  appTitle?: Components.SeHeader["appTitle"]
  
  /** Defines the domain of the application. By default, the domain is `ecostruxure`. If `none`, then no domain will be displayed. */
  domain?: Components.SeHeader["domain"]
  
  /** Defines the project name (useful for small projects) that can be used for versioning as well. It will be placed at the right side of the title. */
  project?: Components.SeHeader["project"]
  
  /** to remove the "Schneider electric" logo at the end of the header. */
  hideSeLogo?: Components.SeHeader["hideSeLogo"]
  
  /**  */
  disabled?: Components.SeHeader["disabled"]
}

interface SeHeaderEvents {
  
}

interface SeHeaderSlots {
  default: any
}
  
/* generated by Svelte v3.44.1 */
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
	let se_header;
	let current;
	const default_slot_template = /*#slots*/ ctx[8].default;
	const default_slot = create_slot(default_slot_template, ctx, /*$$scope*/ ctx[7], null);

	return {
		c() {
			se_header = element("se-header");
			if (default_slot) default_slot.c();
			set_custom_element_data(se_header, "app-title", /*appTitle*/ ctx[0]);
			set_custom_element_data(se_header, "domain", /*domain*/ ctx[1]);
			set_custom_element_data(se_header, "project", /*project*/ ctx[2]);
			set_custom_element_data(se_header, "hide-se-logo", /*hideSeLogo*/ ctx[3]);
			set_custom_element_data(se_header, "disabled", /*disabled*/ ctx[4]);
		},
		m(target, anchor) {
			insert(target, se_header, anchor);

			if (default_slot) {
				default_slot.m(se_header, null);
			}

			/*se_header_binding*/ ctx[9](se_header);
			current = true;
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

			if (!current || dirty & /*appTitle*/ 1) {
				set_custom_element_data(se_header, "app-title", /*appTitle*/ ctx[0]);
			}

			if (!current || dirty & /*domain*/ 2) {
				set_custom_element_data(se_header, "domain", /*domain*/ ctx[1]);
			}

			if (!current || dirty & /*project*/ 4) {
				set_custom_element_data(se_header, "project", /*project*/ ctx[2]);
			}

			if (!current || dirty & /*hideSeLogo*/ 8) {
				set_custom_element_data(se_header, "hide-se-logo", /*hideSeLogo*/ ctx[3]);
			}

			if (!current || dirty & /*disabled*/ 16) {
				set_custom_element_data(se_header, "disabled", /*disabled*/ ctx[4]);
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
			if (detaching) detach(se_header);
			if (default_slot) default_slot.d(detaching);
			/*se_header_binding*/ ctx[9](null);
		}
	};
}

function instance($$self, $$props, $$invalidate) {
	let { $$slots: slots = {}, $$scope } = $$props;
	let __ref;
	let __mounted = false;
	const dispatch = createEventDispatcher();
	let { appTitle = undefined } = $$props;
	let { domain = undefined } = $$props;
	let { project = undefined } = $$props;
	let { hideSeLogo = undefined } = $$props;
	let { disabled = undefined } = $$props;
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

	function se_header_binding($$value) {
		binding_callbacks[$$value ? 'unshift' : 'push'](() => {
			__ref = $$value;
			$$invalidate(5, __ref);
		});
	}

	$$self.$$set = $$props => {
		if ('appTitle' in $$props) $$invalidate(0, appTitle = $$props.appTitle);
		if ('domain' in $$props) $$invalidate(1, domain = $$props.domain);
		if ('project' in $$props) $$invalidate(2, project = $$props.project);
		if ('hideSeLogo' in $$props) $$invalidate(3, hideSeLogo = $$props.hideSeLogo);
		if ('disabled' in $$props) $$invalidate(4, disabled = $$props.disabled);
		if ('$$scope' in $$props) $$invalidate(7, $$scope = $$props.$$scope);
	};

	return [
		appTitle,
		domain,
		project,
		hideSeLogo,
		disabled,
		__ref,
		getWebComponent,
		$$scope,
		slots,
		se_header_binding
	];
}

class SeHeader extends SvelteComponent {
  $$prop_def: SeHeaderProps;
  $$events_def: SeHeaderEvents;
  $$slot_def: SeHeaderSlots;

  $on<K extends keyof SeHeaderEvents>(type: K, callback: (e: SeHeaderEvents[K]) => any): () => void {
	  return super.$on(type, callback);
	}

  $set($$props: Partial<SeHeaderProps>): void {
	  super.$set($$props);
	}

	constructor(options) {
		super();

		init(this, options, instance, create_fragment, safe_not_equal, {
			appTitle: 0,
			domain: 1,
			project: 2,
			hideSeLogo: 3,
			disabled: 4,
			getWebComponent: 6
		});
	}

	get appTitle() {
		return this.$$.ctx[0];
	}

	set appTitle(appTitle) {
		this.$$set({ appTitle });
		flush();
	}

	get domain() {
		return this.$$.ctx[1];
	}

	set domain(domain) {
		this.$$set({ domain });
		flush();
	}

	get project() {
		return this.$$.ctx[2];
	}

	set project(project) {
		this.$$set({ project });
		flush();
	}

	get hideSeLogo() {
		return this.$$.ctx[3];
	}

	set hideSeLogo(hideSeLogo) {
		this.$$set({ hideSeLogo });
		flush();
	}

	get disabled() {
		return this.$$.ctx[4];
	}

	set disabled(disabled) {
		this.$$set({ disabled });
		flush();
	}

	get getWebComponent(): HTMLSeHeaderElement | undefined {
		return this.$$.ctx[6];
	}
}

export default SeHeader;