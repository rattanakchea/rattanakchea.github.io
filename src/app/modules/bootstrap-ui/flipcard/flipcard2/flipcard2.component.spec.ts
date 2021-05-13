import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { Flipcard2Component } from './flipcard2.component';

describe('Flipcard2Component', () => {
  let component: Flipcard2Component;
  let fixture: ComponentFixture<Flipcard2Component>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ Flipcard2Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Flipcard2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
