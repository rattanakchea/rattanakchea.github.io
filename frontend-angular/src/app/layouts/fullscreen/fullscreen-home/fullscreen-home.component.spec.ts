import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FullscreenHomeComponent } from './fullscreen-home.component';

describe('FullscreenHomeComponent', () => {
  let component: FullscreenHomeComponent;
  let fixture: ComponentFixture<FullscreenHomeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FullscreenHomeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FullscreenHomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
