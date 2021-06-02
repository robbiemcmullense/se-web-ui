import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { SnackbarComponent } from './snackbar.component';
import { SnackbarConfig } from './snackbar-config';
import { SnackbarModule } from './snackbar.module';
import { ProxiesModule } from '../directives/proxies.module';

describe('SnackbarComponent', () => {
  let component: SnackbarComponent;
  let fixture: ComponentFixture<SnackbarComponent>;

  beforeEach(
    waitForAsync(() => {
      TestBed.configureTestingModule({
        imports: [SnackbarModule, ProxiesModule],
        providers: [SnackbarConfig],
      }).compileComponents();
    })
  );

  beforeEach(() => {
    fixture = TestBed.createComponent(SnackbarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should emit the didClose Event when closeEvent is called', () => {
    spyOn(component.didClose, 'emit');
    component.closeEvent();
    expect(component.didClose.emit).toHaveBeenCalled();
  });

  it('should emit the actionClicked event when actionClickedEvent is called', () => {
    spyOn(component.actionClicked, 'emit');
    component.actionClickedEvent();
    expect(component.actionClicked.emit).toHaveBeenCalled();
  });
});
