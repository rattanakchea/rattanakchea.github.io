import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'robinhood', //lazy load route
    loadChildren: () =>
      import('./modules/robinhood/robinhood.module').then(
        (m) => m.RobinhoodLibModule
      ),
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
