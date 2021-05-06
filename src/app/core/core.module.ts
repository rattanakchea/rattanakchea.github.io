import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavigationComponent } from './components/navigation/navigation.component';
import { RouterModule } from '@angular/router';
// import { Page404Component } from "./page404/page404.component";
// import { LoadingScreenComponent } from "./loading-screen/loading-screen.component";
// import { DynamicNavComponent } from "./dynamic-nav/dynamic-nav.component";
// import { IntroductionComponent } from "./introduction/introduction.component";

const commonComponents = [NavigationComponent];
@NgModule({
  declarations: [...commonComponents],
  imports: [CommonModule, RouterModule],
  exports: [RouterModule, ...commonComponents],
})
export class CoreModule {}
