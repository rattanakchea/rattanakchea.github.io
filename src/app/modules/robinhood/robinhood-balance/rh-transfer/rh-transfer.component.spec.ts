import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { RhTransferComponent } from './rh-transfer.component';

describe('RhTransferComponent', () => {
  let component: RhTransferComponent;
  let fixture: ComponentFixture<RhTransferComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ RhTransferComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RhTransferComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
