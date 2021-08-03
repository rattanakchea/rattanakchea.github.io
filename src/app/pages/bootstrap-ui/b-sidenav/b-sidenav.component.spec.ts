import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { BSidenavComponent } from './b-sidenav.component';

describe('BSidenavComponent', () => {
  let component: BSidenavComponent;
  let fixture: ComponentFixture<BSidenavComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ BSidenavComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BSidenavComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
