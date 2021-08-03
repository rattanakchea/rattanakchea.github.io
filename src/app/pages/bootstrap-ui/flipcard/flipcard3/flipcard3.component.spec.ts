import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { Flipcard3Component } from './flipcard3.component';

describe('Flipcard3Component', () => {
  let component: Flipcard3Component;
  let fixture: ComponentFixture<Flipcard3Component>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ Flipcard3Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Flipcard3Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
