import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { BootstrapHomeComponent } from './bootstrap-home/bootstrap-home.component';
import { BootstrapParentComponent } from './bootstrap-parent.component';
import { BSidenavComponent } from './b-sidenav/b-sidenav.component';
import { BLoginComponent } from './b-login/b-login.component';
import { BPricingComponent } from './b-pricing/b-pricing.component';
import { BNavbarComponent } from './b-navbar/b-navbar.component';
import { FlipcardComponent } from './flipcard/flipcard.component';
import { EqualHeightColumnsComponent } from './equal-height-columns/equal-height-columns.component';
import { StarbuckComponent } from './starbuck/starbuck.component';
import { Flipcard2Component } from './flipcard/flipcard2/flipcard2.component';
import { Flipcard1Component } from './flipcard/flipcard1/flipcard1.component';
import { Flipcard3Component } from './flipcard/flipcard3/flipcard3.component';
import { MaterialModule } from 'src/app/shared/material/material.module';

const routes: Routes = [
  {
    path: '',
    component: BootstrapParentComponent,
    children: [
      {
        path: '',
        component: BootstrapHomeComponent,
      },
      {
        path: 'login',
        component: BLoginComponent,
      },
      {
        path: 'pricing',
        component: BPricingComponent,
      },
      {
        path: 'navbar',
        component: BNavbarComponent,
      },
      {
        path: 'flip-card',
        component: FlipcardComponent,
      },
      {
        path: 'equal-height-columns',
        component: EqualHeightColumnsComponent,
      },
      {
        path: 'starbuck',
        component: StarbuckComponent,
      },
    ],
  },
];
@NgModule({
  declarations: [
    BootstrapHomeComponent,
    BootstrapParentComponent,
    BLoginComponent,
    BPricingComponent,
    BSidenavComponent,
    BNavbarComponent,
    FlipcardComponent,
    EqualHeightColumnsComponent,
    StarbuckComponent,
    Flipcard2Component,
    Flipcard1Component,
    Flipcard3Component,
  ],
  imports: [CommonModule, RouterModule.forChild(routes), MaterialModule],
})
export class BootstrapUIModule {}
