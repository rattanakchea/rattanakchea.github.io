import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavigationComponent } from './components/common/navigation/navigation.component';
import { RouterModule, Routes } from '@angular/router';
import { IntroductionComponent } from './components/introduction/introduction.component';
import { HomepageComponent } from './components/homepage/homepage.component';
import { Page404Component } from './components/page404/page404.component';
import { SharedModule } from '../shared/shared.module';
import { ResumeComponent } from './components/resume/resume.component';
import { WebResourcesComponent } from './components/web-resources/web-resources.component';
import { WebResourcesTableComponent } from './components/web-resources/web-resources-table/web-resources-table.component';
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
  {
    path: 'web-resources',
    component: WebResourcesComponent,
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
  declarations: [...commonComponents, WebResourcesComponent, WebResourcesTableComponent],
  imports: [CommonModule, RouterModule.forChild(routes), SharedModule],
  exports: [RouterModule, ...commonComponents],
})
export class CoreModule {}
