/* eslint-disable */
/* tslint:disable */
// @ts-nocheck
import { Components, JSX } from '@se/web-ui';


interface SeSkeletonProps {
  
  /**  */
  count?: Components.SeSkeleton["count"]
  
  /**  */
  width?: Components.SeSkeleton["width"]
  
  /**  */
  height?: Components.SeSkeleton["height"]
  
  /**  */
  circle?: Components.SeSkeleton["circle"]
}

interface SeSkeletonEvents {
  
}

interface SeSkeletonSlots {
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
	let se_skeleton;
	let current;
	const default_slot_template = /*#slots*/ ctx[7].default;
	const default_slot = create_slot(default_slot_template, ctx, /*$$scope*/ ctx[6], null);

	return {
		c() {
			se_skeleton = element("se-skeleton");
			if (default_slot) default_slot.c();
			set_custom_element_data(se_skeleton, "count", /*count*/ ctx[0]);
			set_custom_element_data(se_skeleton, "width", /*width*/ ctx[1]);
			set_custom_element_data(se_skeleton, "height", /*height*/ ctx[2]);
			set_custom_element_data(se_skeleton, "circle", /*circle*/ ctx[3]);
		},
		m(target, anchor) {
			insert(target, se_skeleton, anchor);

			if (default_slot) {
				default_slot.m(se_skeleton, null);
			}

			/*se_skeleton_binding*/ ctx[8](se_skeleton);
			current = true;
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

			if (!current || dirty & /*count*/ 1) {
				set_custom_element_data(se_skeleton, "count", /*count*/ ctx[0]);
			}

			if (!current || dirty & /*width*/ 2) {
				set_custom_element_data(se_skeleton, "width", /*width*/ ctx[1]);
			}

			if (!current || dirty & /*height*/ 4) {
				set_custom_element_data(se_skeleton, "height", /*height*/ ctx[2]);
			}

			if (!current || dirty & /*circle*/ 8) {
				set_custom_element_data(se_skeleton, "circle", /*circle*/ ctx[3]);
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
			if (detaching) detach(se_skeleton);
			if (default_slot) default_slot.d(detaching);
			/*se_skeleton_binding*/ ctx[8](null);
		}
	};
}

function instance($$self, $$props, $$invalidate) {
	let { $$slots: slots = {}, $$scope } = $$props;
	let __ref;
	let __mounted = false;
	const dispatch = createEventDispatcher();
	let { count = undefined } = $$props;
	let { width = undefined } = $$props;
	let { height = undefined } = $$props;
	let { circle = undefined } = $$props;
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

	function se_skeleton_binding($$value) {
		binding_callbacks[$$value ? 'unshift' : 'push'](() => {
			__ref = $$value;
			$$invalidate(4, __ref);
		});
	}

	$$self.$$set = $$props => {
		if ('count' in $$props) $$invalidate(0, count = $$props.count);
		if ('width' in $$props) $$invalidate(1, width = $$props.width);
		if ('height' in $$props) $$invalidate(2, height = $$props.height);
		if ('circle' in $$props) $$invalidate(3, circle = $$props.circle);
		if ('$$scope' in $$props) $$invalidate(6, $$scope = $$props.$$scope);
	};

	return [
		count,
		width,
		height,
		circle,
		__ref,
		getWebComponent,
		$$scope,
		slots,
		se_skeleton_binding
	];
}

class SeSkeleton extends SvelteComponent {
  $$prop_def: SeSkeletonProps;
  $$events_def: SeSkeletonEvents;
  $$slot_def: SeSkeletonSlots;

  $on<K extends keyof SeSkeletonEvents>(type: K, callback: (e: SeSkeletonEvents[K]) => any): () => void {
	  return super.$on(type, callback);
	}

  $set($$props: Partial<SeSkeletonProps>): void {
	  super.$set($$props);
	}

	constructor(options) {
		super();

		init(this, options, instance, create_fragment, safe_not_equal, {
			count: 0,
			width: 1,
			height: 2,
			circle: 3,
			getWebComponent: 5
		});
	}

	get count() {
		return this.$$.ctx[0];
	}

	set count(count) {
		this.$$set({ count });
		flush();
	}

	get width() {
		return this.$$.ctx[1];
	}

	set width(width) {
		this.$$set({ width });
		flush();
	}

	get height() {
		return this.$$.ctx[2];
	}

	set height(height) {
		this.$$set({ height });
		flush();
	}

	get circle() {
		return this.$$.ctx[3];
	}

	set circle(circle) {
		this.$$set({ circle });
		flush();
	}

	get getWebComponent(): HTMLSeSkeletonElement | undefined {
		return this.$$.ctx[5];
	}
}

export default SeSkeleton;