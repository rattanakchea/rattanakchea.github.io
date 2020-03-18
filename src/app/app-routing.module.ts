import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { HomeComponent } from "./home/home.component";
import { ProjectsComponent } from "./projects/projects.component";
import { LeetcodeReminderComponent } from "./leetcode-reminder/leetcode-reminder.component";
import { Page404Component } from "./shared/page404/page404.component";
import { FullscreenComponent } from "./layouts/fullscreen/fullscreen.component";

const routes: Routes = [
  {
    path: "",
    component: HomeComponent
  },
  {
    path: "projects",
    component: ProjectsComponent
  },
  {
    path: "leetcode-reminder",
    component: LeetcodeReminderComponent
  },
  {
    path: "song-lyrics",
    loadChildren: () =>
      import("./song-lyrics/song-lyrics.module").then(m => m.SongLyricsModule)
  },
  {
    path: "algorithm-visualizer",
    loadChildren: () =>
      import("./algorithm-visualizer/algorithm-visualizer.module").then(
        m => m.AlgorithmVisualizerModule
      )
  },
  {
    path: "",
    component: FullscreenComponent,
    children: [
      {
        path: "covid19-dashboard",
        component: FullscreenComponent
      }
    ]
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
