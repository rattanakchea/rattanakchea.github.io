import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavigationComponent } from './components/common/navigation/navigation.component';
import { RouterModule, Routes } from '@angular/router';
import { IntroductionComponent } from './components/introduction/introduction.component';
import { HomepageComponent } from './components/homepage/homepage.component';
import { ProjectsComponent } from './components/projects/projects.component';
import { Page404Component } from './components/page404/page404.component';
import { SharedModule } from '../shared/shared.module';
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
  {
    path: 'projects',
    component: ProjectsComponent,
  },
 
];

const commonComponents = [
  NavigationComponent,
  IntroductionComponent,
  HomepageComponent,
  ProjectsComponent,
  Page404Component,
];
@NgModule({
  declarations: [...commonComponents],
  imports: [CommonModule, RouterModule.forChild(routes), SharedModule],
  exports: [RouterModule, ...commonComponents],
})
export class CoreModule {}
