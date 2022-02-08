/* eslint-disable */
/* tslint:disable */
// @ts-nocheck
import { Components, JSX } from '@se/web-ui';


interface SeAboutProps {
  
  /** The title of your about screen. */
  appTitle?: Components.SeAbout["appTitle"]
  
  /** The version number you want to display. */
  version?: Components.SeAbout["version"]
  
  /** The domain you want to display.  If set to `ecostruxure`, it renders an EcoStruxure icon. */
  domain?: Components.SeAbout["domain"]
  
  /** The copyright you would like to display. */
  copyright?: Components.SeAbout["copyright"]
  
  /** Sets the background image for your about page. */
  imageUrl?: Components.SeAbout["imageUrl"]
}

interface SeAboutEvents {
  
}

interface SeAboutSlots {
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
	let se_about;
	let current;
	const default_slot_template = /*#slots*/ ctx[8].default;
	const default_slot = create_slot(default_slot_template, ctx, /*$$scope*/ ctx[7], null);

	return {
		c() {
			se_about = element("se-about");
			if (default_slot) default_slot.c();
			set_custom_element_data(se_about, "app-title", /*appTitle*/ ctx[0]);
			set_custom_element_data(se_about, "version", /*version*/ ctx[1]);
			set_custom_element_data(se_about, "domain", /*domain*/ ctx[2]);
			set_custom_element_data(se_about, "copyright", /*copyright*/ ctx[3]);
			set_custom_element_data(se_about, "image-url", /*imageUrl*/ ctx[4]);
		},
		m(target, anchor) {
			insert(target, se_about, anchor);

			if (default_slot) {
				default_slot.m(se_about, null);
			}

			/*se_about_binding*/ ctx[9](se_about);
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
				set_custom_element_data(se_about, "app-title", /*appTitle*/ ctx[0]);
			}

			if (!current || dirty & /*version*/ 2) {
				set_custom_element_data(se_about, "version", /*version*/ ctx[1]);
			}

			if (!current || dirty & /*domain*/ 4) {
				set_custom_element_data(se_about, "domain", /*domain*/ ctx[2]);
			}

			if (!current || dirty & /*copyright*/ 8) {
				set_custom_element_data(se_about, "copyright", /*copyright*/ ctx[3]);
			}

			if (!current || dirty & /*imageUrl*/ 16) {
				set_custom_element_data(se_about, "image-url", /*imageUrl*/ ctx[4]);
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
			if (detaching) detach(se_about);
			if (default_slot) default_slot.d(detaching);
			/*se_about_binding*/ ctx[9](null);
		}
	};
}

function instance($$self, $$props, $$invalidate) {
	let { $$slots: slots = {}, $$scope } = $$props;
	let __ref;
	let __mounted = false;
	const dispatch = createEventDispatcher();
	let { appTitle = undefined } = $$props;
	let { version = undefined } = $$props;
	let { domain = undefined } = $$props;
	let { copyright = undefined } = $$props;
	let { imageUrl = undefined } = $$props;
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

	function se_about_binding($$value) {
		binding_callbacks[$$value ? 'unshift' : 'push'](() => {
			__ref = $$value;
			$$invalidate(5, __ref);
		});
	}

	$$self.$$set = $$props => {
		if ('appTitle' in $$props) $$invalidate(0, appTitle = $$props.appTitle);
		if ('version' in $$props) $$invalidate(1, version = $$props.version);
		if ('domain' in $$props) $$invalidate(2, domain = $$props.domain);
		if ('copyright' in $$props) $$invalidate(3, copyright = $$props.copyright);
		if ('imageUrl' in $$props) $$invalidate(4, imageUrl = $$props.imageUrl);
		if ('$$scope' in $$props) $$invalidate(7, $$scope = $$props.$$scope);
	};

	return [
		appTitle,
		version,
		domain,
		copyright,
		imageUrl,
		__ref,
		getWebComponent,
		$$scope,
		slots,
		se_about_binding
	];
}

class SeAbout extends SvelteComponent {
  $$prop_def: SeAboutProps;
  $$events_def: SeAboutEvents;
  $$slot_def: SeAboutSlots;

  $on<K extends keyof SeAboutEvents>(type: K, callback: (e: SeAboutEvents[K]) => any): () => void {
	  return super.$on(type, callback);
	}

  $set($$props: Partial<SeAboutProps>): void {
	  super.$set($$props);
	}

	constructor(options) {
		super();

		init(this, options, instance, create_fragment, safe_not_equal, {
			appTitle: 0,
			version: 1,
			domain: 2,
			copyright: 3,
			imageUrl: 4,
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

	get version() {
		return this.$$.ctx[1];
	}

	set version(version) {
		this.$$set({ version });
		flush();
	}

	get domain() {
		return this.$$.ctx[2];
	}

	set domain(domain) {
		this.$$set({ domain });
		flush();
	}

	get copyright() {
		return this.$$.ctx[3];
	}

	set copyright(copyright) {
		this.$$set({ copyright });
		flush();
	}

	get imageUrl() {
		return this.$$.ctx[4];
	}

	set imageUrl(imageUrl) {
		this.$$set({ imageUrl });
		flush();
	}

	get getWebComponent(): HTMLSeAboutElement | undefined {
		return this.$$.ctx[6];
	}
}

export default SeAbout;