import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { StarbuckComponent } from './starbuck.component';

describe('StarbuckComponent', () => {
  let component: StarbuckComponent;
  let fixture: ComponentFixture<StarbuckComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ StarbuckComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StarbuckComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
