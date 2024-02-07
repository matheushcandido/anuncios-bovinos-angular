// app.module.ts
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { CookieService } from 'ngx-cookie-service';
import { AnnouncementComponent } from './announcement/announcement.component';
import { AnnouncementCreateComponent } from './announcement-create/announcement-create.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { FooterComponent } from './footer/footer.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { HeaderComponent } from './header/header.component';
import { UserProfileComponent } from './user-profile/user-profile.component';
import { ReportAnnouncementComponent } from './report-announcement/report-announcement.component';
import { ReportComponent } from './report/report.component';

@NgModule({
  declarations: [
    AppComponent,
    AnnouncementComponent,
    AnnouncementCreateComponent,
    SidebarComponent,
    FooterComponent,
    LoginComponent,
    RegisterComponent,
    HeaderComponent,
    UserProfileComponent,
    ReportAnnouncementComponent,
    ReportComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    AppRoutingModule
  ],
  providers: [CookieService],
  bootstrap: [AppComponent]
})
export class AppModule { }
