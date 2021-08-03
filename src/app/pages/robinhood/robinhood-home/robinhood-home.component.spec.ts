import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { RobinhoodHomeComponent } from './robinhood-home.component';

describe('RobinhoodHomeComponent', () => {
  let component: RobinhoodHomeComponent;
  let fixture: ComponentFixture<RobinhoodHomeComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ RobinhoodHomeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RobinhoodHomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
