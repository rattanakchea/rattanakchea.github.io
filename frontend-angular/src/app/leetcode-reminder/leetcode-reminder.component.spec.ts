import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LeetcodeReminderComponent } from './leetcode-reminder.component';

describe('LeetcodeReminderComponent', () => {
  let component: LeetcodeReminderComponent;
  let fixture: ComponentFixture<LeetcodeReminderComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LeetcodeReminderComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LeetcodeReminderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
