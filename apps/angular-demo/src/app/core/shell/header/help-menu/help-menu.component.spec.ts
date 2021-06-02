import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { SeWebModule } from '@se/web-ui-angular';
import { HelpMenuComponent } from './help-menu.component';

describe('HelpMenuComponent', () => {
  let component: HelpMenuComponent;
  let fixture: ComponentFixture<HelpMenuComponent>;

  beforeEach(
    waitForAsync(() => {
      TestBed.configureTestingModule({
        imports: [SeWebModule],
        declarations: [HelpMenuComponent],
      }).compileComponents();
    })
  );

  beforeEach(() => {
    fixture = TestBed.createComponent(HelpMenuComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
