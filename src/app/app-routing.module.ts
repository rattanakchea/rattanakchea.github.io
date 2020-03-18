import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { Page404Component } from "./shared/page404/page404.component";

const routes: Routes = [
  {
    path: "",
    loadChildren: () =>
      import("./layouts/default/default.module").then(m => m.DefaultModule)
  },
  // {
  //   path: "song-lyrics",
  //   loadChildren: () =>
  //     import("./song-lyrics/song-lyrics.module").then(m => m.SongLyricsModule)
  // },
  // {
  //   path: "algorithm-visualizer",
  //   loadChildren: () =>
  //     import("./algorithm-visualizer/algorithm-visualizer.module").then(
  //       m => m.AlgorithmVisualizerModule
  //     )
  // },
  {
    path: "apps",
    loadChildren: () =>
      import("./layouts/default/default.module").then(m => m.DefaultModule)
  },
  {
    path: "**",
    component: Page404Component
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
