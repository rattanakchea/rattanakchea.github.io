import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WebResourcesTableComponent } from './web-resources-table.component';

describe('WebResourcesTableComponent', () => {
  let component: WebResourcesTableComponent;
  let fixture: ComponentFixture<WebResourcesTableComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ WebResourcesTableComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(WebResourcesTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
