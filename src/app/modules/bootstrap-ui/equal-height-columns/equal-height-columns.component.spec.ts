import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { EqualHeightColumnsComponent } from './equal-height-columns.component';

describe('EqualHeightColumnsComponent', () => {
  let component: EqualHeightColumnsComponent;
  let fixture: ComponentFixture<EqualHeightColumnsComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ EqualHeightColumnsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EqualHeightColumnsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
