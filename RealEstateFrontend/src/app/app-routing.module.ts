import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './auth/login/login.component';
import { RegisterComponent } from './auth/register/register.component';
import { HeaderComponent } from './home-page/header/header.component';
import { HomePageComponent } from './home-page/home-page.component';

const routes: Routes = [
  {path:'', component:HomePageComponent},
  {path:'login', component:LoginComponent},
  {path:'register', component:RegisterComponent},
  {path: '**', redirectTo: '/'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
