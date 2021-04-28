import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { LoadingScreenComponent } from './components/loading-screen/loading-screen.component';

// import { NavigationComponent } from "./navigation/navigation.component";
// import { Page404Component } from "./page404/page404.component";
// import { DynamicNavComponent } from "./dynamic-nav/dynamic-nav.component";
// import { IntroductionComponent } from "./introduction/introduction.component";

const commonComponents = [LoadingScreenComponent];
@NgModule({
  declarations: [...commonComponents],
  imports: [CommonModule, RouterModule],
  exports: [RouterModule, ...commonComponents],
})
export class SharedModule {}
