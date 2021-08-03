import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GithubRepoHomeComponent } from './github-repo-home.component';

describe('GithubRepoHomeComponent', () => {
  let component: GithubRepoHomeComponent;
  let fixture: ComponentFixture<GithubRepoHomeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GithubRepoHomeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GithubRepoHomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
