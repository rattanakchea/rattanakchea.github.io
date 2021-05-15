import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StocksTrackerComponent } from './stocks-tracker.component';

describe('StocksTrackerComponent', () => {
  let component: StocksTrackerComponent;
  let fixture: ComponentFixture<StocksTrackerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ StocksTrackerComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(StocksTrackerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
