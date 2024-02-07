import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from './auth-guard';
import { AnnouncementComponent } from './announcement/announcement.component';
import { AnnouncementCreateComponent } from './announcement-create/announcement-create.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { UserProfileComponent } from './user-profile/user-profile.component';
import { ReportAnnouncementComponent } from './report-announcement/report-announcement.component';

const routes: Routes = [
  { path: '', component: AnnouncementComponent },
  { path: 'anuncios', component: AnnouncementComponent },
  { path: 'anuncios/criar', component: AnnouncementCreateComponent, canActivate: [AuthGuard] },
  { path: 'anuncios/editar', component: AnnouncementCreateComponent, canActivate: [AuthGuard] },
  { path: 'login', component: LoginComponent },
  { path: 'registrar', component: RegisterComponent },
  { path: 'perfil', component: UserProfileComponent, canActivate: [AuthGuard] },
  { path: 'reportar', component: ReportAnnouncementComponent, canActivate: [AuthGuard] },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule { }
