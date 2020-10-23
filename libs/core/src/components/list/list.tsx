import {
  Component,
  Host,
  h,
  Prop,
  Watch,
  Element,
  Listen,
} from '@stencil/core';
import { isVisible } from '../../utils';

@Component({
  tag: 'se-list',
  styleUrl: 'list.scss',
  shadow: true,
})
export class ListComponent {
  @Element() el: HTMLElement;
  /**
   * Defines the style of the list.  The default setting is `classic`.
   */
  @Prop() option: 'nav' | 'classic' | 'dropdown' | 'treeview' | 'headline' =
    'classic';
  @Watch('option') optionDidChange() {
    Array.from(this.el.querySelectorAll('se-list-item, se-list-group')).forEach(
      (item: any) => {
        const closeList = item.closest('se-list');
        // Make sure we only change the style of the current list. Handy if list has a dropdown with a different list style
        if (closeList === this.el) {
          item.setOption(this.option);
        }
      }
    );
  }

  /**
   * Defines if the list element should be selected or not.
   */
  @Prop() selectedColor: 'primary' | 'standard' = 'standard';

  /**
   * Defines if list groups can be collapsed.  The default setting is `true`.
   */
  @Prop() canCollapse = true;
  @Watch('canCollapse') canCollapseDidChange() {
    Array.from(this.el.querySelectorAll('se-list-group')).forEach(
      (item: any) => {
        item.canCollapse = this.canCollapse;
      }
    );
  }

  @Listen('keydown')
  handleKeyDown(ev: KeyboardEvent) {
    switch (ev.key) {
      case 'ArrowUp': {
        this.focusElement(-1);
        break;
      }
      case 'ArrowDown': {
        this.focusElement(+1);
        break;
      }
      case 'ArrowLeft':
      case 'ArrowRight': {
        ev.preventDefault();
        const elm = document.activeElement;
        if (elm.nodeName.toUpperCase() === 'SE-LIST-GROUP') {
          (elm as HTMLSeListGroupElement).toggleCollapseTreeview();
        }
        break;
      }
    }
  }

  focusElement(step) {
    // add all elements we want to include in our selection
    const elms: HTMLSeListItemElement[] = Array.from(
      this.el.querySelectorAll('se-list-group, se-list-item')
    );
    const visibles = elms.filter(item => isVisible(item, true, true));
    const index = visibles.findIndex(el => el === document.activeElement);
    const nextStep = Math.min(Math.max(0, index + step), visibles.length);
    visibles[nextStep].focusElement();
  }

  componentWillLoad() {
    this.optionDidChange();
    this.canCollapseDidChange();
  }

  render() {
    const selectedColor =
      this.option === 'nav' ? 'primary' : this.selectedColor;
    return (
      <Host
        role="list"
        class={{
          [this.option]: true,
          [`selected-${selectedColor}`]: true,
        }}
      >
        <slot></slot>
      </Host>
    );
  }
}
