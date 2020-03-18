import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { ProjectsComponent } from "./projects/projects.component";
import { Page404Component } from "./shared/page404/page404.component";
import { HomeComponent } from "./home/home.component";
import { FullscreenComponent } from "./layouts/fullscreen/fullscreen.component";
import { LeetcodeReminderComponent } from "./leetcode-reminder/leetcode-reminder.component";
import { DefaultComponent } from "./layouts/default/default.component";

const routes: Routes = [
  {
    path: "",
    loadChildren: () =>
      import("./layouts/default/default.module").then(m => m.DefaultModule)
  },
  // {
  //   path: "",
  //   component: DefaultComponent,
  //   children: [
  //     {
  //       path: "",
  //       component: DefaultComponent
  //     },
  //     {
  //       path: "projects",
  //       component: ProjectsComponent
  //     }
  //   ]
  // },
  // {
  //   path: "projects",
  //   component: ProjectsComponent
  // },
  // {
  //   path: "leetcode-reminder",
  //   component: LeetcodeReminderComponent
  // },
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
  // {
  //   path: "",
  //   component: FullscreenComponent,
  //   children: [
  //     {
  //       path: "covid19-dashboard",
  //       component: FullscreenComponent
  //     }
  //   ]
  // },
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
