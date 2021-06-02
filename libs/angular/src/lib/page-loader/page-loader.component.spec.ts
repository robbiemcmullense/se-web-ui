import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { PageLoaderComponent } from './page-loader.component';
import { ProxiesModule } from '../directives/proxies.module';

describe('PageLoaderComponent', () => {
  let component: PageLoaderComponent;
  let fixture: ComponentFixture<PageLoaderComponent>;

  beforeEach(
    waitForAsync(() => {
      TestBed.configureTestingModule({
        imports: [ProxiesModule],
        declarations: [PageLoaderComponent],
      }).compileComponents();
    })
  );

  beforeEach(() => {
    fixture = TestBed.createComponent(PageLoaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
