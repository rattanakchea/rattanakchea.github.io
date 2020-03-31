import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AvHomeComponent } from './av-home.component';

describe('AvHomeComponent', () => {
  let component: AvHomeComponent;
  let fixture: ComponentFixture<AvHomeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AvHomeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AvHomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
