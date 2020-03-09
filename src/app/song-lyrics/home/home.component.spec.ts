import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SongLyricsHomeComponent } from './home.component';

describe('HomeComponent', () => {
  let component: SongLyricsHomeComponent;
  let fixture: ComponentFixture<SongLyricsHomeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SongLyricsHomeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SongLyricsHomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
