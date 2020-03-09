import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SongLyricsRoutingModule } from './song-lyrics-routing.module';
import { HomeComponent } from './home/home.component';


@NgModule({
  declarations: [HomeComponent],
  imports: [
    CommonModule,
    SongLyricsRoutingModule
  ]
})
export class SongLyricsModule { }
