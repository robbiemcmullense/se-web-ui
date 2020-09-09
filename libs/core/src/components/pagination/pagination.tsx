import { Component, Event, EventEmitter, h, Host, Prop } from '@stencil/core';
import arrowStep from '@se/icons/svg/arrow5_step.svg';
import arrowEdge from '@se/icons/svg/arrow5_edge.svg';

export interface PageEvent {
  value: number;
  perPage: number;
}

@Component({
  tag: 'se-pagination',
  styleUrl: 'pagination.scss',
  shadow: true,
})
export class PaginationComponent {
  defaultPageSizeList = 15;

  @Prop({ mutable: true }) perPage = 15;
  @Prop() perPageList = '15'; // '10;15;25;50';

  @Prop({ mutable: true }) value = 1;
  @Prop() total = 1;

  @Prop() hideEdge: boolean;

  @Prop() labelFirst = 'First Page';
  @Prop() labelPrev = 'Previous Page';
  @Prop() labelNext = 'Next Page';
  @Prop() labelLast = 'Last Page';
  @Prop() labelPerPage = 'Items per page';
  @Prop() labelValue = 'Page';

  @Event({ eventName: 'didChange' }) eventEmitter: EventEmitter<PageEvent>;

  componentDidLoad() {
    if (this.total === null) {
      console.warn(
        `[se-pagination] component needs to have [total] attribute configured.`
      );
    }

    console.log('pagination mounted', this.perPage);
    if (this.perPage == null) {
      this.perPage = this.__parPageSizeList()[0];
    }
  }

  private __parPageSizeList(): number[] {
    try {
      const r = this.perPageList.split(';').map(n => parseInt(n));
      if (r.length === 0) {
        console.warn(
          `[se-pagination] pageSizeList must have at least one element. page sizes are ';' separated. ex: '10;15;20'. Assuming: [${this.defaultPageSizeList}]`
        );
        return [this.defaultPageSizeList];
      }
      return r;
    } catch (error) {
      console.warn(
        `[se-pagination] Can't parse pageSizeList in Pagination Component, expected format: '10;20;50'. Assuming: '${this.defaultPageSizeList}''`,
        error
      );
      return [this.defaultPageSizeList];
    }
  }
  private __perPageList(): number[] {
    const arrayNumber = [];
    const max = this.maxPage();
    for (let index = 1; index <= max; index++) {
      arrayNumber.push(index);
    }
    return arrayNumber;
  }

  private __pageSizeChanged(e): void {
    const target = e.target as any;
    // console.log(e, target, target.value);
    this.value = 1;
    this.perPage = Math.floor(target.value); // in case someone types a fraction
    this.eventEmitter.emit({
      value: 1,
      perPage: this.perPage,
    });
  }

  private __goToFirstPage() {
    this.value = 1;
    this.eventEmitter.emit({
      value: 1,
      perPage: this.perPage,
    });
  }

  private __goToPrevPage() {
    this.value = Math.max(1, this.value - 1);
    this.eventEmitter.emit({
      value: this.value,
      perPage: this.perPage,
    });
  }

  private __goToNextPage() {
    this.value = Math.min(this.maxPage(), this.value + 1);
    this.eventEmitter.emit({
      value: this.value,
      perPage: this.perPage,
    });
  }

  private __goToLastPage() {
    this.value = this.maxPage();
    this.eventEmitter.emit({
      value: this.value,
      perPage: this.perPage,
    });
  }

  private __goToPage(e) {
    // console.log(e, e.target);
    const target = e.target as any;
    // console.log("Goto page", e, e.target, target.value)
    this.value = Math.floor(target.value);
    this.eventEmitter.emit({
      value: this.value,
      perPage: this.perPage,
    });
  }

  private maxPage(): number {
    return Math.max(this.total, 1);
  }

  render() {
    const isFirst = this.value === 1;
    const isLast = this.value === this.maxPage();

    return (
      <Host>
        <div class="flexed">
          {this.__parPageSizeList().length > 1 ? (
            <div class="pageSize">
              <se-form-field
                type="select"
                padding="none"
                label={this.labelPerPage}
              >
                <select onChange={e => this.__pageSizeChanged(e)}>
                  {this.__parPageSizeList().map(i => (
                    <option
                      value={i}
                      selected={i == (this.perPage || this.defaultPageSizeList)}
                    >
                      {i}
                    </option>
                  ))}
                </select>
              </se-form-field>
            </div>
          ) : (
            ''
          )}

          <div class="pagination">
            {!this.hideEdge && (
              <se-icon
                slot="icon"
                class="left edge"
                option="button"
                disabled={isFirst}
                onClick={() => !isFirst && this.__goToFirstPage()}
                title={this.labelFirst}
                arial-label={this.labelFirst}
                innerHTML={arrowEdge}
              ></se-icon>
            )}
            <se-icon
              slot="icon"
              class="left"
              option="button"
              disabled={isFirst}
              onClick={() => !isFirst && this.__goToPrevPage()}
              title={this.labelPrev}
              arial-label={this.labelPrev}
              innerHTML={arrowStep}
            ></se-icon>
            <label style={{ padding: '0 12px' }}>
              <span>{this.labelValue}</span>
              <se-form-field
                type="select"
                padding="none"
                block
                option="stacked"
              >
                <select onChange={e => this.__goToPage(e)}>
                  {this.__perPageList().map(i => (
                    <option value={i} selected={i === this.value}>
                      {i}
                    </option>
                  ))}
                </select>
              </se-form-field>
              <span>/ {this.maxPage()}</span>
            </label>
            <se-icon
              slot="icon"
              option="button"
              disabled={isLast}
              onClick={() => !isLast && this.__goToNextPage()}
              title={this.labelNext}
              arial-label={this.labelNext}
              innerHTML={arrowStep}
            ></se-icon>
            {!this.hideEdge && (
              <se-icon
                slot="icon"
                class="edge"
                option="button"
                disabled={isLast}
                onClick={() => !isLast && this.__goToLastPage()}
                title={this.labelLast}
                arial-label={this.labelLast}
                innerHTML={arrowEdge}
              ></se-icon>
            )}
          </div>
        </div>
      </Host>
    );
  }
}