import { Component, OnInit, OnDestroy, ElementRef, ViewChild } from '@angular/core';
import { Logger } from '@core/logger.service';

const log = new Logger('DocsComponent');

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

  @ViewChild('stepper', {read: ElementRef, static: false}) stepper: ElementRef<HTMLSeStepperElement>;
  
  items: any = [
    {name: 'item 1'},
    {name: 'item 2'},
    {name: 'item 3'},
    {name: 'item 4'}
  ];

  constructor() {}

  ngOnInit() {
    log.debug('component has been initiated');
  }

  ngOnDestroy() {
    log.debug('component has been destroyed');
  }
  
  removeLastListItem = () => {
    this.items.pop();
    // console.log(this.items)
  }
  
  addNewListItem = () => {
    this.items.push({name: `New Item - Test ${Math.floor((Math.random() * 100) + 1)}`});
    // console.log(this.items)
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
