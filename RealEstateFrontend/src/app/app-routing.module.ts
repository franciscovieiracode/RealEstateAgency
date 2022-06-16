import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './auth/login/login.component';
import { RegisterAgentComponent } from './auth/register-agent/register-agent.component';
import { RegisterComponent } from './auth/registerClient/register.component';
import { HomePageComponent } from './home-page/home-page.component';
import { EditProfileComponent } from './profile/edit-profile/edit-profile.component';
import {AuthGuardGuard} from '../app/guards/auth-guard.guard'
import { ShowProfileComponent } from './profile/show-profile/show-profile.component';


const routes: Routes = [
  {path:'', component:HomePageComponent},
  {path:'login', component:LoginComponent},
  {path:'register', component:RegisterComponent},
  {path:'registerAgent', component:RegisterAgentComponent},
  {path: 'editprofile', component: EditProfileComponent, canActivate:[AuthGuardGuard]},
  {path: 'showprofile', component: ShowProfileComponent,canActivate:[AuthGuardGuard]},
  {path: '**', redirectTo: '/'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
