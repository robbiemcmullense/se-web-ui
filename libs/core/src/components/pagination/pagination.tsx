import { Component, Event, EventEmitter, h, Host, Prop } from '@stencil/core';
import arrowStep from '@se/icons/svg/arrow5_step.svg';
import arrowEdge from '@se/icons/svg/arrow5_edge.svg';
@Component({
  tag: 'se-pagination',
  styleUrl: 'pagination.scss',
  shadow: true
})
export class PaginationComponent {
  defaultPageSizeList = 15;

  @Prop({ mutable: true }) pageSize = 15;
  @Prop() pageSizeList = '15'; //'10;15;25;50';

  @Prop({ mutable: true}) page = 1;
  @Prop() nbPage = 1;

  @Prop() hideEdge: boolean;

  @Prop() labelFirstPage = 'First Page';
  @Prop() labelPrevPage = 'Previous Page';
  @Prop() labelNextPage = 'Next Page';
  @Prop() labelLastPage = 'Last Page';
  @Prop() labelPageSize = 'Show rows:';
  @Prop() labelPage = 'Page';


  @Event({ eventName: 'didChange' }) eventEmitter: EventEmitter;

  public componentDidLoad() {
    if (this.nbPage === null) {
      console.warn(
        "[se-pagination] component needs to have 'total-items' attribute configured."
      );
    }

    console.log('pagination mounted', this.pageSize);
    if (this.pageSize == null) {
      this.pageSize = this.__pageSizeList()[0];
    }
  }

  private __pageSizeList(): Array<number> {
    try {
      const r = this.pageSizeList.split(';').map(n => parseInt(n));
      if (r.length === 0) {
        console.warn(
          `[se-pagination] pageSizeList must have at least one element. Assuming: [${this.defaultPageSizeList}]`
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
  private __pageList(): Array<number> {
    const arrayNumber = [];
    const max = this.maxPage();
    for (let index = 1; index <= max; index++) {
      arrayNumber.push(index);
    }
    return arrayNumber;
  }

  private __pageSizeChanged(e): void {
    const target = e.target as any;
    //console.log(e, target, target.value);
    this.page = 1;
    this.pageSize = Math.floor(target.value); // in case someone types a fraction
    this.eventEmitter.emit({
      page: 1,
      pageSize: this.pageSize
    });
  }

  private __goToFirstPage() {
    this.page = 1;
    this.eventEmitter.emit({
      page: 1,
      pageSize: this.pageSize
    });
  }

  private __goToPrevPage() {
    this.page = Math.max(1, this.page - 1);
    this.eventEmitter.emit({
      page: this.page,
      pageSize: this.pageSize
    });
  }

  private __goToNextPage() {
    this.page = Math.min(this.maxPage(), this.page + 1);
    this.eventEmitter.emit({
      page: this.page,
      pageSize: this.pageSize
    });
  }

  private __goToLastPage() {
    this.page = this.maxPage();
    this.eventEmitter.emit({
      page: this.page,
      pageSize: this.pageSize
    });
  }

  private __goToPage(e) {
    // console.log(e, e.target);
    const target = e.target as any;
    // console.log("Goto page", e, e.target, target.value)
    this.page = Math.floor(target.value);
    this.eventEmitter.emit({
      page: this.page,
      pageSize: this.pageSize
    });
  }

  private maxPage(): number {
    return Math.max(this.nbPage, 1);
  }

  render() {

    const isFirst = this.page === 1;
    const isLast = this.page === this.maxPage();

    return (
      <Host>
        <div class="flexed">
          {this.__pageSizeList().length > 1 ? (
            <div class="pageSize">
              <se-form-field
                type="select"
                padding="none"
                label={this.labelPageSize}
              >
                <select onChange={e => this.__pageSizeChanged(e)}>
                  {this.__pageSizeList().map(i => (
                    <option
                      value={i}
                      selected={i == (this.pageSize || this.defaultPageSizeList)}
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
                title={this.labelFirstPage}
                innerHTML={arrowEdge}
              ></se-icon>
            )}
            <se-icon
              slot="icon"
              class="left"
              option="button"
              disabled={isFirst}
              onClick={() => !isFirst && this.__goToPrevPage()}
              title={this.labelPrevPage}
              innerHTML={arrowStep}
            ></se-icon>
            <label style={{padding: "0 12px"}}>
              <span>{this.labelPage}</span>
              <se-form-field
                type="select"
                padding="none"
                block
                option="stacked"
              >
                <select onChange={e => this.__goToPage(e)}>
                  {this.__pageList().map(i => (
                    <option value={i} selected={i === this.page}>
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
              title={this.labelNextPage}
              innerHTML={arrowStep}
            ></se-icon>
            {!this.hideEdge && (
              <se-icon
                slot="icon"
                class="edge"
                option="button"
                disabled={isLast}
                onClick={() => !isLast && this.__goToLastPage()}
                title={this.labelLastPage}
                innerHTML={arrowEdge}
              ></se-icon>
            )}
          </div>
        </div>
      </Host>
    );
  }
}
