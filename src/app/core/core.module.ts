import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavigationComponent } from './components/navigation/navigation.component';
import { RouterModule, Routes } from '@angular/router';
import { IntroductionComponent } from './components/introduction/introduction.component';
import { HomepageComponent } from './components/homepage/homepage.component';
// import { Page404Component } from "./page404/page404.component";
// import { LoadingScreenComponent } from "./loading-screen/loading-screen.component";
// import { DynamicNavComponent } from "./dynamic-nav/dynamic-nav.component";

const routes: Routes = [
  {
    path: '',
    component: HomepageComponent,
    // children: [
    //   {
    //     path: '',
    //     component: IntroductionComponent,
    //   },
    //   {
    //     path: "projects",
    //     component: ProjectsComponent,
    //   },
    // ],
  },
];

const commonComponents = [NavigationComponent, IntroductionComponent];
@NgModule({
  declarations: [...commonComponents, HomepageComponent],
  imports: [CommonModule, RouterModule.forChild(routes)],
  exports: [RouterModule, ...commonComponents],
})
export class CoreModule {}
