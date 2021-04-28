import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { RobinhoodMessageDetailComponent } from './robinhood-message-detail.component';

describe('RobinhoodMessageDetailComponent', () => {
  let component: RobinhoodMessageDetailComponent;
  let fixture: ComponentFixture<RobinhoodMessageDetailComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ RobinhoodMessageDetailComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RobinhoodMessageDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
