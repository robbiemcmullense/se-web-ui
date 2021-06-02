import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { SeWebModule } from '@se/web-ui-angular';
import { FormsModule } from '@angular/forms';
import { SharedModule } from '../shared/shared.module';
import { DocsComponent } from './docs.component';

describe('DocsComponent', () => {
  let component: DocsComponent;
  let fixture: ComponentFixture<DocsComponent>;

  beforeEach(
    waitForAsync(() => {
      TestBed.configureTestingModule({
        imports: [
          SeWebModule,
          FormsModule,
          SharedModule,
          BrowserAnimationsModule,
        ],
        declarations: [DocsComponent],
        providers: [],
      }).compileComponents();
    })
  );

  beforeEach(() => {
    fixture = TestBed.createComponent(DocsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should only receive one event when clicked on', () => {
    spyOn(component, 'didGroupClick');
    const nativeElement = fixture.nativeElement;

    const listGroup = nativeElement.querySelector('#listToClick');
    listGroup.dispatchEvent(new Event('click'));

    expect(component.didGroupClick).toHaveBeenCalledTimes(1);
  });
});
