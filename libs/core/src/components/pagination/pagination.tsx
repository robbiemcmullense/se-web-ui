import {Component, Event, EventEmitter, h, Host, Prop} from '@stencil/core';

@Component({
  tag: 'se-pagination',
  shadow: true,
  styleUrl: 'pagination.scss'
})
export class PaginationComponent {
  @Prop({mutable: true}) total: number;
  @Prop({mutable: true, reflect: true, attribute: 'initial-page'}) page: number = 1;
  @Prop({mutable: true, reflect: true}) perPage: number = null;

  @Prop({mutable: true}) showFirstAndLast: boolean = true;

  @Prop() perPageList: string = '10';//'10;15;25;50';

  @Prop() readonly labelFirstPage = 'Jump to First Page';
  @Prop() readonly labelPrevPage = 'Jump to Previous Page';
  @Prop() readonly labelNextPage = 'Jump to Next Page';
  @Prop() readonly labelLastPage = 'Jump to Last Page';

  @Prop() readonly perPageLabel = 'Show rows:';
  @Prop() readonly pageLabel = 'Page';

  @Prop() color: 'standard'|'primary' | 'alternative' | 'secondary' = 'secondary';

  /**
   * Message for the right hand box
   * Placeholders:
   * %page% - Page number
   * %maxPage - Last page number
   * %perPage - Items per page
   */
  @Prop() message: string = "You're viewing page %page% of %maxPage% for term: Altivar in batch %perPage%"
  @Prop() showMessage: boolean = false
  @Prop() messageSetDangerouslyInnerHtml: boolean= false

  @Event({eventName: 'pagination:changed'}) eventEmitter: EventEmitter;

  public componentDidLoad() {

    if(this.total===null){
      console.error("Pagination needs to have 'total-items' attribute configured!")
    }

    console.log("pagination mounted",this.perPage);
    if(this.perPage == null) {
      this.perPage = this.__perPageList()[0]
    }
  }

  private __perPageList(): Array<number>{
    try {
      console.log(this.perPageList);
      const r = this.perPageList.split(";").map(n => parseInt(n))
      if(r.length === 0) {
        console.warn("Pagination perPageList must have at least one element! Assuming: [10]")
        return [10];
      }
      return r;
    }catch(e){
      console.log("Can't parse perPageList in Pagination Component, expected format: 10;20;50. Assuming: [10]",e);
      return [10];
    }
  }

  private __perPageChanged(e): void {
    const target = e.target as any;
    //console.log(e, target, target.value);
    this.page = 1;
    this.perPage = Math.floor(target.value); // in case someone types a fraction
    this.eventEmitter.emit({
      page: 1,
      perPage: this.perPage,
      target: this,
    });
  }


  private __goToFirstPage() {
    this.page = 1;
    this.eventEmitter.emit({
      page: 1,
      perPage: this.perPage,
      target: this,
    });
  }

  private __goToPrevPage() {
    this.page = Math.max(1, this.page - 1);
    this.eventEmitter.emit({
      page: this.page,
      perPage: this.perPage,
      target: this,
    });
  }

  private __goToNextPage() {
    // console.log("dupa");
    this.page = Math.min(this.maxPage(), this.page + 1);
    this.eventEmitter.emit({
      page: this.page,
      perPage: this.perPage,
      target: this,
    });
  }

  private __goToLastPage() {
    this.page = this.maxPage();
    this.eventEmitter.emit({
      page: this.page,
      perPage: this.perPage,
      target: this,
    });
  }

  private __goToPage(e) {
    // console.log(e, e.target);
    const target = e.target as any;
    // console.log("Goto page", e, e.target, target.value)
    this.page = Math.floor(target.value);
    this.eventEmitter.emit({
      page: this.page,
      perPage: this.perPage,
      target: this,
    });
  }


  private maxPage(): number {
    // console.log("max page call", this.total, this.page, this.perPage);
    const v= Math.ceil(this.total / this.perPage);
    // console.log(this.total , this.perPage);
    return v;
  }

  private renderMessage(){
    if(!this.showMessage)
      return;

    const msg = this.message
      .replace("%page%",this.page.toString())
      .replace("%maxPage%",this.maxPage().toString())
      .replace("%perPage%",(this.perPage ?? 10).toString())

    if(!this.messageSetDangerouslyInnerHtml)
      return msg
    else
      return <span innerHTML={msg} />
  }

  render() {
    return <Host>
      <div class="slot">
        <slot/>
      </div>
      <div class={['se-pagination','se-pagination-' + this.color, 'flexed'].join(' ')}>
        <div class="pages">
          {this.__perPageList().length>1 ?
            <div class="per-page">
              <se-form-field type="select" padding="small" label={this.perPageLabel}>
                <select onChange={(e) => this.__perPageChanged(e)}>
                  {this.__perPageList().map((i) => <option
                    value={i}
                    selected={i == (this.perPage ?? 10)}
                  >
                    {i}
                  </option>)}
                </select>
              </se-form-field>
            </div> : ''}

          <div class="pagination">
            {this.page > 1 ? [
              <se-button  color={this.color} onClick={() => this.__goToFirstPage()} title={this.labelFirstPage} icon="arrow2_left"
                         icon-only="true"/>,
              <se-button  color={this.color} onClick={() => this.__goToPrevPage()} title={this.labelPrevPage} icon="arrow2_left"
                         icon-only="true"/>
            ] : [
              <se-button disabled={true} title={this.labelFirstPage} icon="arrow2_left" icon-only="true"/>,
              <se-button disabled={true} title={this.labelPrevPage} icon="arrow2_left" icon-only="true"/>
            ]}
            <label>
              <span>{this.pageLabel}</span>
              <input
                type="number"
                min="1"
                max={this.maxPage()}
                onChange={(e) => this.__goToPage(e)}
                value={this.page}
              />
            </label>
            {this.page == this.maxPage() ? [
              <se-button disabled={true} title={this.labelNextPage} icon="arrow2_right" icon-only="true"/>,
              <se-button disabled={true} title={this.labelLastPage} icon="arrow2_right" icon-only="true"/>
            ] : [
              <se-button color={this.color} onClick={() => this.__goToNextPage()} title={this.labelNextPage} icon="arrow2_right"
                         icon-only="true"/>,
              <se-button color={this.color} onClick={() => this.__goToLastPage()} title={this.labelLastPage} icon="arrow2_right"
                         icon-only="true"/>
            ]}
          </div>
        </div>
        <div class="message">
          {this.renderMessage()}
        </div>
      </div>
    </Host>;
  }
}
