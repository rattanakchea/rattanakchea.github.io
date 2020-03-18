import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { HttpClientModule } from "@angular/common/http";
import { AppRoutingModule } from "./app-routing.module";
import { FormsModule } from "@angular/forms";
import { AppComponent } from "./app.component";
import { ProjectsComponent } from "./projects/projects.component";
import { loadingInterceptorProviders } from "./interceptors/loading.interceptor";
import { LeetcodeReminderComponent } from "./leetcode-reminder/leetcode-reminder.component";
import { SharedModule } from "./shared/shared.module";
import { FullscreenModule } from "./layouts/fullscreen/fullscreen.module";
import { Covid19HomeComponent } from './covid19Dashboard/covid19-home/covid19-home.component';
import { C19DashboardComponent } from './covid19-dashboard/c19-dashboard/c19-dashboard.component';

@NgModule({
  declarations: [AppComponent, ProjectsComponent, LeetcodeReminderComponent, Covid19HomeComponent, C19DashboardComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    SharedModule,
    FullscreenModule
  ],
  exports: [SharedModule],
  providers: [loadingInterceptorProviders],
  bootstrap: [AppComponent]
})
export class AppModule {}
