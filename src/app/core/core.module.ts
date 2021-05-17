import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavigationComponent } from './components/common/navigation/navigation.component';
import { RouterModule, Routes } from '@angular/router';
import { IntroductionComponent } from './components/introduction/introduction.component';
import { HomepageComponent } from './components/homepage/homepage.component';
import { Page404Component } from './components/page404/page404.component';
import { SharedModule } from '../shared/shared.module';
import { ResumeComponent } from './components/resume/resume.component';
// import { LoadingScreenComponent } from "./loading-screen/loading-screen.component";

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
    path: 'resume',
    component: ResumeComponent,
  },
];

const commonComponents = [
  NavigationComponent,
  IntroductionComponent,
  HomepageComponent,
  Page404Component,
  ResumeComponent,
];
@NgModule({
  declarations: [...commonComponents],
  imports: [CommonModule, RouterModule.forChild(routes), SharedModule],
  exports: [RouterModule, ...commonComponents],
})
export class CoreModule {}
