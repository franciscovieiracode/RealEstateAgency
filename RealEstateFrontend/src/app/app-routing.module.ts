import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './auth/login/login.component';
import { RegisterAgentComponent } from './auth/register-agent/register-agent.component';
import { RegisterComponent } from './auth/registerClient/register.component';
import { HomePageComponent } from './home-page/home-page.component';
import { EditProfileComponent } from './profile/edit-profile/edit-profile.component';
import {AuthGuardGuard} from '../app/guards/auth-guard.guard'
import { ShowProfileComponent } from './profile/show-profile/show-profile.component';
import { AddRealEstateComponent } from './real-estate/add-real-estate/add-real-estate.component';
import { AgentGuardGuard } from './guards/agent-guard.guard';
import { FileUploadComponent } from './real-estate/add-real-estate/file-upload/file-upload.component';
import { EditRealEstateComponent } from './real-estate/edit-real-estate/edit-real-estate.component';
import { AddRsToFavoriteListComponent } from './profile/add-rs-to-favorite-list/add-rs-to-favorite-list.component';


const routes: Routes = [
  {path:'', component:HomePageComponent},
  {path:'login', component:LoginComponent},
  {path:'register', component:RegisterComponent},
  {path:'registerAgent', component:RegisterAgentComponent},
  {path: 'editprofile', component: EditProfileComponent, canActivate:[AuthGuardGuard]},
  {path: 'showprofile', component: ShowProfileComponent,canActivate:[AuthGuardGuard]},
  {path: 'addrealestate', component: AddRealEstateComponent,canActivate:[AuthGuardGuard, AgentGuardGuard]},
  {path: 'editrealestate', component: EditRealEstateComponent, canActivate:[AuthGuardGuard, AgentGuardGuard]},
  {path: 'favoriteList', component: AddRsToFavoriteListComponent, canActivate:[AuthGuardGuard]},
  {path: '**', redirectTo: '/'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
