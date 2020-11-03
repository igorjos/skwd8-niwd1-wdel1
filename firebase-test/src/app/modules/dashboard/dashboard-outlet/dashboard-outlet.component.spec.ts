import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DashboardOutletComponent } from './dashboard-outlet.component';

describe('DashboardOutletComponent', () => {
  let component: DashboardOutletComponent;
  let fixture: ComponentFixture<DashboardOutletComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DashboardOutletComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DashboardOutletComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
