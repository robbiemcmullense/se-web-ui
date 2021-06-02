/* eslint-disable */
/* tslint:disable */
// @ts-nocheck
import { Components, JSX } from '@se/web-ui';


interface SePaginationProps {
  
  /** Number of item per page */
  perPage?: Components.SePagination["perPage"]
  
  /** List of per page options to select from as a string separated by `;`. Default is `"15"` but does not affect the component if not used. ex: `"15;20;25;30"`. */
  perPageList?: Components.SePagination["perPageList"]
  
  /** Selected page */
  value?: Components.SePagination["value"]
  
  /** Total number of pages. Used to go to the last page and in the page selection dropdown. */
  total?: Components.SePagination["total"]
  
  /** Hide the "go to first page" and "go to last page" icons. */
  hideEdge?: Components.SePagination["hideEdge"]
  
  /** Label used when hover the "Go to first page" icon. */
  labelFirst?: Components.SePagination["labelFirst"]
  
  /** Label used when hover the "Go to previous page" icon. */
  labelPrev?: Components.SePagination["labelPrev"]
  
  /** Label used when hover the "Go to next page" icon. */
  labelNext?: Components.SePagination["labelNext"]
  
  /** Label used when hover the "Go to last page" icon. */
  labelLast?: Components.SePagination["labelLast"]
  
  /** Text before the number of item per page selection dropdown. */
  labelPerPage?: Components.SePagination["labelPerPage"]
  
  /** Text before the page selection dropdown. */
  labelValue?: Components.SePagination["labelValue"]
}

interface SePaginationEvents {
  
  /** Event emitted when the selected page or the number of item per page changed.
Return `{value: number; perPage: number;}`. */
  didChange: Parameters<JSX.SePagination["onDidChange"]>[0]
}

interface SePaginationSlots {
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
	let se_pagination;
	let current;
	let mounted;
	let dispose;
	const default_slot_template = /*#slots*/ ctx[15].default;
	const default_slot = create_slot(default_slot_template, ctx, /*$$scope*/ ctx[14], null);

	return {
		c() {
			se_pagination = element("se-pagination");
			if (default_slot) default_slot.c();
			set_custom_element_data(se_pagination, "per-page", /*perPage*/ ctx[0]);
			set_custom_element_data(se_pagination, "per-page-list", /*perPageList*/ ctx[1]);
			set_custom_element_data(se_pagination, "value", /*value*/ ctx[2]);
			set_custom_element_data(se_pagination, "total", /*total*/ ctx[3]);
			set_custom_element_data(se_pagination, "hide-edge", /*hideEdge*/ ctx[4]);
			set_custom_element_data(se_pagination, "label-first", /*labelFirst*/ ctx[5]);
			set_custom_element_data(se_pagination, "label-prev", /*labelPrev*/ ctx[6]);
			set_custom_element_data(se_pagination, "label-next", /*labelNext*/ ctx[7]);
			set_custom_element_data(se_pagination, "label-last", /*labelLast*/ ctx[8]);
			set_custom_element_data(se_pagination, "label-per-page", /*labelPerPage*/ ctx[9]);
			set_custom_element_data(se_pagination, "label-value", /*labelValue*/ ctx[10]);
		},
		m(target, anchor) {
			insert(target, se_pagination, anchor);

			if (default_slot) {
				default_slot.m(se_pagination, null);
			}

			/*se_pagination_binding*/ ctx[16](se_pagination);
			current = true;

			if (!mounted) {
				dispose = listen(se_pagination, "didChange", /*onEvent*/ ctx[12]);
				mounted = true;
			}
		},
		p(ctx, [dirty]) {
			if (default_slot) {
				if (default_slot.p && (!current || dirty & /*$$scope*/ 16384)) {
					update_slot(default_slot, default_slot_template, ctx, /*$$scope*/ ctx[14], dirty, null, null);
				}
			}

			if (!current || dirty & /*perPage*/ 1) {
				set_custom_element_data(se_pagination, "per-page", /*perPage*/ ctx[0]);
			}

			if (!current || dirty & /*perPageList*/ 2) {
				set_custom_element_data(se_pagination, "per-page-list", /*perPageList*/ ctx[1]);
			}

			if (!current || dirty & /*value*/ 4) {
				set_custom_element_data(se_pagination, "value", /*value*/ ctx[2]);
			}

			if (!current || dirty & /*total*/ 8) {
				set_custom_element_data(se_pagination, "total", /*total*/ ctx[3]);
			}

			if (!current || dirty & /*hideEdge*/ 16) {
				set_custom_element_data(se_pagination, "hide-edge", /*hideEdge*/ ctx[4]);
			}

			if (!current || dirty & /*labelFirst*/ 32) {
				set_custom_element_data(se_pagination, "label-first", /*labelFirst*/ ctx[5]);
			}

			if (!current || dirty & /*labelPrev*/ 64) {
				set_custom_element_data(se_pagination, "label-prev", /*labelPrev*/ ctx[6]);
			}

			if (!current || dirty & /*labelNext*/ 128) {
				set_custom_element_data(se_pagination, "label-next", /*labelNext*/ ctx[7]);
			}

			if (!current || dirty & /*labelLast*/ 256) {
				set_custom_element_data(se_pagination, "label-last", /*labelLast*/ ctx[8]);
			}

			if (!current || dirty & /*labelPerPage*/ 512) {
				set_custom_element_data(se_pagination, "label-per-page", /*labelPerPage*/ ctx[9]);
			}

			if (!current || dirty & /*labelValue*/ 1024) {
				set_custom_element_data(se_pagination, "label-value", /*labelValue*/ ctx[10]);
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
			if (detaching) detach(se_pagination);
			if (default_slot) default_slot.d(detaching);
			/*se_pagination_binding*/ ctx[16](null);
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
	let { perPage = undefined } = $$props;
	let { perPageList = undefined } = $$props;
	let { value = undefined } = $$props;
	let { total = undefined } = $$props;
	let { hideEdge = undefined } = $$props;
	let { labelFirst = undefined } = $$props;
	let { labelPrev = undefined } = $$props;
	let { labelNext = undefined } = $$props;
	let { labelLast = undefined } = $$props;
	let { labelPerPage = undefined } = $$props;
	let { labelValue = undefined } = $$props;
	const getWebComponent = () => __ref;

	onMount(() => {
		__mounted = true;
	});

	const setProp = (prop, value) => {
		if (__ref) $$invalidate(11, __ref[prop] = value, __ref);
	};

	const onEvent = e => {
		e.stopPropagation();
		dispatch(e.type, e.detail);
	};

	function se_pagination_binding($$value) {
		binding_callbacks[$$value ? "unshift" : "push"](() => {
			__ref = $$value;
			$$invalidate(11, __ref);
		});
	}

	$$self.$$set = $$props => {
		if ("perPage" in $$props) $$invalidate(0, perPage = $$props.perPage);
		if ("perPageList" in $$props) $$invalidate(1, perPageList = $$props.perPageList);
		if ("value" in $$props) $$invalidate(2, value = $$props.value);
		if ("total" in $$props) $$invalidate(3, total = $$props.total);
		if ("hideEdge" in $$props) $$invalidate(4, hideEdge = $$props.hideEdge);
		if ("labelFirst" in $$props) $$invalidate(5, labelFirst = $$props.labelFirst);
		if ("labelPrev" in $$props) $$invalidate(6, labelPrev = $$props.labelPrev);
		if ("labelNext" in $$props) $$invalidate(7, labelNext = $$props.labelNext);
		if ("labelLast" in $$props) $$invalidate(8, labelLast = $$props.labelLast);
		if ("labelPerPage" in $$props) $$invalidate(9, labelPerPage = $$props.labelPerPage);
		if ("labelValue" in $$props) $$invalidate(10, labelValue = $$props.labelValue);
		if ("$$scope" in $$props) $$invalidate(14, $$scope = $$props.$$scope);
	};

	return [
		perPage,
		perPageList,
		value,
		total,
		hideEdge,
		labelFirst,
		labelPrev,
		labelNext,
		labelLast,
		labelPerPage,
		labelValue,
		__ref,
		onEvent,
		getWebComponent,
		$$scope,
		slots,
		se_pagination_binding
	];
}

class SePagination extends SvelteComponent {
  $$prop_def: SePaginationProps;
  $$events_def: SePaginationEvents;
  $$slot_def: SePaginationSlots;

  $on<K extends keyof SePaginationEvents>(type: K, callback: (e: SePaginationEvents[K]) => any): () => void {
	  return super.$on(type, callback);
	}

  $set($$props: Partial<SePaginationProps>): void {
	  super.$set($$props);
	}

	constructor(options) {
		super();

		init(this, options, instance, create_fragment, safe_not_equal, {
			perPage: 0,
			perPageList: 1,
			value: 2,
			total: 3,
			hideEdge: 4,
			labelFirst: 5,
			labelPrev: 6,
			labelNext: 7,
			labelLast: 8,
			labelPerPage: 9,
			labelValue: 10,
			getWebComponent: 13
		});
	}

	get perPage() {
		return this.$$.ctx[0];
	}

	set perPage(perPage) {
		this.$set({ perPage });
		flush();
	}

	get perPageList() {
		return this.$$.ctx[1];
	}

	set perPageList(perPageList) {
		this.$set({ perPageList });
		flush();
	}

	get value() {
		return this.$$.ctx[2];
	}

	set value(value) {
		this.$set({ value });
		flush();
	}

	get total() {
		return this.$$.ctx[3];
	}

	set total(total) {
		this.$set({ total });
		flush();
	}

	get hideEdge() {
		return this.$$.ctx[4];
	}

	set hideEdge(hideEdge) {
		this.$set({ hideEdge });
		flush();
	}

	get labelFirst() {
		return this.$$.ctx[5];
	}

	set labelFirst(labelFirst) {
		this.$set({ labelFirst });
		flush();
	}

	get labelPrev() {
		return this.$$.ctx[6];
	}

	set labelPrev(labelPrev) {
		this.$set({ labelPrev });
		flush();
	}

	get labelNext() {
		return this.$$.ctx[7];
	}

	set labelNext(labelNext) {
		this.$set({ labelNext });
		flush();
	}

	get labelLast() {
		return this.$$.ctx[8];
	}

	set labelLast(labelLast) {
		this.$set({ labelLast });
		flush();
	}

	get labelPerPage() {
		return this.$$.ctx[9];
	}

	set labelPerPage(labelPerPage) {
		this.$set({ labelPerPage });
		flush();
	}

	get labelValue() {
		return this.$$.ctx[10];
	}

	set labelValue(labelValue) {
		this.$set({ labelValue });
		flush();
	}

	get getWebComponent(): HTMLSePaginationElement | undefined {
		return this.$$.ctx[13];
	}
}

export default SePagination;