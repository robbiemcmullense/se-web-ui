import { Component, h, Prop, Host } from '@stencil/core';

@Component({
  tag: 'se-skeleton',
  styleUrl: 'skeleton.scss',
  shadow: true,
})
export class Skeleton {
  @Prop() count: 1;
  @Prop() width;
  @Prop() height;
  @Prop() circle: boolean;

  private nbToArray(count): number[] {
    const arrayNumber = [];
    const max = count;
    for (let index = 1; index <= max; index++) {
      arrayNumber.push(index);
    }
    return arrayNumber;
  }

  render() {
    const countArray = this.nbToArray(this.count || 1);
    const style: any = {};
    if (this.width !== null) {
      style.width = this.width;
    }

    if (this.height !== null) {
      style.height = this.height;
    }

    return (
      <Host>
        {countArray.map(() => (
          <div class={{ skeleton: true, rounded: this.circle }} style={style}>
            &zwnj;
          </div>
        ))}
      </Host>
    );
  }
}
