import { Component, OnInit, OnDestroy, ElementRef, ViewChild } from '@angular/core';

@Component({
  selector: 'app-docs',
  templateUrl: './docs.component.html',
  styleUrls: ['./docs.component.scss']
})

export class DocsComponent implements OnInit, OnDestroy {

  public loader = false;
  name: string = '';
  address: string = '';
  nameValidated: boolean = false;
  addressValidated: boolean = false;
  bisStep = false;

  @ViewChild('stepper', {read: ElementRef, static: false}) stepper: ElementRef<any>;

  items: any = [
    {name: 'item 1'},
    {name: 'item 2'},
    {name: 'item 3'},
    {name: 'item 4'}
  ];

  constructor() {}

  ngOnInit() {

  }

  ngOnDestroy() {

  }

  removeLastListItem = () => {
    this.items.pop();
  }

  addNewListItem = () => {
    this.items.push({name: `New Item - Test ${Math.floor((Math.random() * 100) + 1)}`});
  }

  handleNameInput = ($event: any) => {
    this.nameValidated = $event.detail ? true : false;
  }

  handleAddressInput = ($event: any) => {
    this.addressValidated = $event.detail ? true : false;
  }

  nextStep = async(validated: boolean) => {
    await this.stepper.nativeElement.next(validated);
  }

  prevStep = async() => {
    await this.stepper.nativeElement.previous();
  }

  resetStepper = async() => {
    this.name = '';
    this.address = '';
    this.nameValidated = false;
    this.addressValidated = false;
    await this.stepper.nativeElement.reset();
  }
}
