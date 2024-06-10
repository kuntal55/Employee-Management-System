import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './components/login/login.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { RegistrationComponent } from './components/registration/registration.component';
import { ForgotPasswordComponent } from './components/forgot-password/forgot-password.component';
import { VerifyComponent } from './components/verify/verify.component';

const routes: Routes = [
{path: "" ,redirectTo:'login',pathMatch:'full'},
{path: "login",component:LoginComponent},
{path: "dashboard",component:DashboardComponent},
{path: "registration",component:RegistrationComponent},
{path: "forgot-password",component:ForgotPasswordComponent},
{path: "verify",component:VerifyComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
