import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WebResourcesComponent } from './web-resources.component';

describe('WebResourcesComponent', () => {
  let component: WebResourcesComponent;
  let fixture: ComponentFixture<WebResourcesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ WebResourcesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(WebResourcesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
