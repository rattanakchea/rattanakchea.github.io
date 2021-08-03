import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { RobinhoodMessagesComponent } from './robinhood-messages.component';

describe('RobinhoodMessagesComponent', () => {
  let component: RobinhoodMessagesComponent;
  let fixture: ComponentFixture<RobinhoodMessagesComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ RobinhoodMessagesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RobinhoodMessagesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
