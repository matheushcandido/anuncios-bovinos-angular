import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from './auth-guard';
import { AnnouncementComponent } from './announcement/announcement.component';
import { AnnouncementCreateComponent } from './announcement-create/announcement-create.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { UserProfileComponent } from './user-profile/user-profile.component';
import { ReportCreateComponent } from './report-create/report-create.component';
import { ReportComponent } from './report/report.component';
import { UserComponent } from './user/user.component';
import { UserCreateComponent } from './user-create/user-create.component';
import { AnnouncementViewComponent } from './announcement-view/announcement-view.component';

const routes: Routes = [
  { path: '', component: AnnouncementComponent },
  { path: 'anuncios/criar', component: AnnouncementCreateComponent, canActivate: [AuthGuard] },
  { path: 'anuncios/editar', component: AnnouncementCreateComponent, canActivate: [AuthGuard] },
  { path: 'anuncios/visualizar/:id', component: AnnouncementViewComponent, canActivate: [AuthGuard] },
  { path: 'login', component: LoginComponent },
  { path: 'registrar', component: RegisterComponent },
  { path: 'perfil', component: UserProfileComponent, canActivate: [AuthGuard] },
  { path: 'reportar', component: ReportCreateComponent, canActivate: [AuthGuard] },
  { path: 'reportes', component: ReportComponent, canActivate: [AuthGuard] },
  { path: 'usuarios', component: UserComponent, canActivate: [AuthGuard] },
  { path: 'usuarios/criar', component: UserCreateComponent, canActivate: [AuthGuard] }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule { }
