import { Component, h, Prop, State, Watch } from '@stencil/core';
import { classNames } from '../../utils';

const MAX_BULLETS_SIZE = 5;
const TRANSLATE_COEFFICIENT = 11;

@Component({
  tag: 'se-carousel-pagination',
  styleUrl: 'carousel-pagination.scss',
  shadow: true,
})
export class CarouselPagination {
  /**
   * Number of pagination bullets
   */
  @Prop() size: number;

  /**
   *  Index of active/selected pagination bullet
   */
  @Prop() activeIndex: number;

  @Watch('activeIndex')
  activeIndexChange(newIndex, oldIndex) {
    if (newIndex > oldIndex) {
      if (newIndex < MAX_BULLETS_SIZE - 1) {
        return;
      }
    } else {
      if (newIndex + this.offsetLeftIndex > 0) {
        return;
      }
    }

    const delta = oldIndex - newIndex;
    this.offsetLeftIndex = Math.min(
      0,
      Math.max(this.offsetLeftIndex + delta, MAX_BULLETS_SIZE - this.size)
    );
    if (this.getVisualPosition(newIndex) === 0 && newIndex !== 0) {
      this.offsetLeftIndex += 1;
    }
  }

  @State() offsetLeftIndex = 0;

  getVisualPosition(index) {
    return index + this.offsetLeftIndex;
  }

  classNames(i) {
    return classNames({
      'pagination-bullet': true,
      'pagination-bullet--active': this.activeIndex === i,
      'pagination-bullet--prev-hidden':
        this.getVisualPosition(i) === 0 && this.offsetLeftIndex < 0,
      'pagination-bullet--next-hidden':
        this.getVisualPosition(i) === MAX_BULLETS_SIZE - 1 && i < this.size - 1,
      'pagination-bullet--hidden':
        this.getVisualPosition(i) < 0 ||
        this.getVisualPosition(i) >= MAX_BULLETS_SIZE,
    });
  }

  render() {
    if (
      this.size <= 1 ||
      this.activeIndex < 0 ||
      this.activeIndex >= this.size
    ) {
      return null;
    }

    return (
      <div class="pagination-container">
        <div class="pagination-block">
          <div
            style={{
              transform: `translateX(${
                TRANSLATE_COEFFICIENT * this.offsetLeftIndex
              }px)`,
            }}
          >
            {[...Array(this.size)].map((_, i) => {
              return <span class={this.classNames(i)}></span>;
            })}
          </div>
        </div>
      </div>
    );
  }
}
