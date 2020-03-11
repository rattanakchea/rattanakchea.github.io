import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { HttpClientModule } from "@angular/common/http";
import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { IntroductionComponent } from "./introduction/introduction.component";
import { HomeComponent } from "./home/home.component";
import { ProjectsComponent } from "./projects/projects.component";
import { loadingInterceptorProviders } from './interceptors/loading.interceptor';
import { LeetcodeReminderComponent } from './leetcode-reminder/leetcode-reminder.component';

@NgModule({
  declarations: [
    AppComponent,
    IntroductionComponent,
    HomeComponent,
    ProjectsComponent,
    LeetcodeReminderComponent
  ],
  imports: [BrowserModule, AppRoutingModule, HttpClientModule],
  providers: [loadingInterceptorProviders],
  bootstrap: [AppComponent]
})
export class AppModule {}
