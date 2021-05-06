import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavigationComponent } from './components/navigation/navigation.component';
import { RouterModule } from '@angular/router';
import { IntroductionComponent } from './components/introduction/introduction.component';
// import { Page404Component } from "./page404/page404.component";
// import { LoadingScreenComponent } from "./loading-screen/loading-screen.component";
// import { DynamicNavComponent } from "./dynamic-nav/dynamic-nav.component";

const commonComponents = [NavigationComponent, IntroductionComponent];
@NgModule({
  declarations: [...commonComponents],
  imports: [CommonModule, RouterModule],
  exports: [RouterModule, ...commonComponents],
})
export class CoreModule {}
