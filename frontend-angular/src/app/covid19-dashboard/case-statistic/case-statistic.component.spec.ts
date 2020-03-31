import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CaseStatisticComponent } from './case-statistic.component';

describe('CaseStatisticComponent', () => {
  let component: CaseStatisticComponent;
  let fixture: ComponentFixture<CaseStatisticComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CaseStatisticComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CaseStatisticComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
