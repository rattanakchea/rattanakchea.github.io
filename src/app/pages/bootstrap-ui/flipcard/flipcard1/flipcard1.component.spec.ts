import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { Flipcard1Component } from './flipcard1.component';

describe('Flipcard1Component', () => {
  let component: Flipcard1Component;
  let fixture: ComponentFixture<Flipcard1Component>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ Flipcard1Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Flipcard1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
