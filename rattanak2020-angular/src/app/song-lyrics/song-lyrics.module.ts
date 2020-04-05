import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SongLyricsRoutingModule } from './song-lyrics-routing.module';
import { SongLyricsHomeComponent } from './home/home.component';


@NgModule({
  declarations: [SongLyricsHomeComponent],
  imports: [
    CommonModule,
    SongLyricsRoutingModule
  ]
})
export class SongLyricsModule { }
