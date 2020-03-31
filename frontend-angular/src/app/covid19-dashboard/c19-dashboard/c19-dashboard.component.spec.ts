import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { C19DashboardComponent } from './c19-dashboard.component';

describe('C19DashboardComponent', () => {
  let component: C19DashboardComponent;
  let fixture: ComponentFixture<C19DashboardComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ C19DashboardComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(C19DashboardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
