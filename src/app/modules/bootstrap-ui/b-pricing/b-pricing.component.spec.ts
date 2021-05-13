import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { BPricingComponent } from './b-pricing.component';

describe('BPricingComponent', () => {
  let component: BPricingComponent;
  let fixture: ComponentFixture<BPricingComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ BPricingComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BPricingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
