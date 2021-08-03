import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { RobinhoodBalanceComponent } from './robinhood-balance.component';

describe('RobinhoodBalanceComponent', () => {
  let component: RobinhoodBalanceComponent;
  let fixture: ComponentFixture<RobinhoodBalanceComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ RobinhoodBalanceComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RobinhoodBalanceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
