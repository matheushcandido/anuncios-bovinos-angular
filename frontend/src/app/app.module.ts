// app.module.ts
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { MatIconModule } from '@angular/material/icon';
import { NgxPaginationModule } from 'ngx-pagination';
import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { CookieService } from 'ngx-cookie-service';
import { AnnouncementComponent } from './announcement/announcement.component';
import { AnnouncementCreateComponent } from './announcement-create/announcement-create.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { HeaderComponent } from './header/header.component';
import { UserProfileComponent } from './user-profile/user-profile.component';
import { ReportCreateComponent } from './report-create/report-create.component';
import { ReportComponent } from './report/report.component';
import { UserComponent } from './user/user.component';
import { UserCreateComponent } from './user-create/user-create.component';
import { AnnouncementViewComponent } from './announcement-view/announcement-view.component';
import { NgbCarouselModule, NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { NgxMaskDirective } from 'ngx-mask';
import { VerifyPhoneComponent } from './verify-phone/verify-phone.component';

@NgModule({
  declarations: [
    AppComponent,
    AnnouncementComponent,
    AnnouncementCreateComponent,
    SidebarComponent,
    LoginComponent,
    RegisterComponent,
    HeaderComponent,
    UserProfileComponent,
    ReportCreateComponent,
    ReportComponent,
    UserComponent,
    UserCreateComponent,
    AnnouncementViewComponent,
    VerifyPhoneComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    NgbModule,
    NgbCarouselModule,
    FormsModule,
    AppRoutingModule,
    MatIconModule,
    NgxPaginationModule,
    NgxMaskDirective
  ],
  providers: [CookieService],
  bootstrap: [AppComponent]
})
export class AppModule { }
