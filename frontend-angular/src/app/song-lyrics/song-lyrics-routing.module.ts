import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { SongLyricsHomeComponent } from "./home/home.component";

const routes: Routes = [{ path: "", component: SongLyricsHomeComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SongLyricsRoutingModule {}
