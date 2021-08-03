import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { RouterModule, Routes } from "@angular/router";
import { RobinhoodHomeComponent } from "./robinhood-home/robinhood-home.component";
import { RobinhoodInvestingComponent } from "./robinhood-investing/robinhood-investing.component";
import { RobinhoodBalanceComponent } from "./robinhood-balance/robinhood-balance.component";
import { RobinhoodMessagesComponent } from "./robinhood-messages/robinhood-messages.component";
import { FormsModule } from "@angular/forms";
import { ChartComponent } from "./chart/chart.component";
import { RobinhoodAccountComponent } from "./robinhood-account/robinhood-account.component";
import { RobinhoodSearchComponent } from "./robinhood-search/robinhood-search.component";
import { RobinhoodMessageDetailComponent } from "./robinhood-message-detail/robinhood-message-detail.component";
import { RhTransferComponent } from "./robinhood-balance/rh-transfer/rh-transfer.component";
import { MaterialModule } from 'src/app/shared/material/material.module';
const routes: Routes = [
  {
    path: "",
    component: RobinhoodHomeComponent,
    children: [
      {
        path: "",
        component: RobinhoodInvestingComponent,
      },
      {
        path: "home",
        component: RobinhoodInvestingComponent,
      },
      {
        path: "balance",
        component: RobinhoodBalanceComponent,
      },
      {
        path: "balance/transfer",
        component: RhTransferComponent,
      },
      {
        path: "search",
        component: RobinhoodSearchComponent,
      },
      {
        path: "messages",
        component: RobinhoodMessagesComponent,
      },
      {
        path: "messages/:id",
        component: RobinhoodMessageDetailComponent,
      },
      {
        path: "account",
        component: RobinhoodAccountComponent,
      },
    ],
  },
];

@NgModule({
  declarations: [
    RobinhoodHomeComponent,
    RobinhoodInvestingComponent,
    RobinhoodBalanceComponent,
    RobinhoodMessagesComponent,
    ChartComponent,
    RobinhoodAccountComponent,
    RobinhoodSearchComponent,
    RobinhoodMessageDetailComponent,
    RhTransferComponent,
  ],
  imports: [
    CommonModule,
    FormsModule,
    RouterModule.forChild(routes),
    MaterialModule,
  ],
})
export class RobinhoodLibModule {}
