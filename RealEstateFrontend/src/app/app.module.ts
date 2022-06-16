import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HomePageComponent } from './home-page/home-page.component';
import { LoginComponent } from './auth/login/login.component';
import { RegisterComponent } from './auth/registerClient/register.component';
import {MatCardModule} from '@angular/material/card';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatInputModule} from '@angular/material/input';
import { FlexLayoutModule } from '@angular/flex-layout';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { FormsModule } from '@angular/forms';
import { HeaderComponent } from './home-page/header/header.component';
import { FooterComponent } from './home-page/footer/footer.component';
import { HomeListComponent } from './home-page/home-list/home-list.component';
import { SidebarComponent } from './home-page/sidebar/sidebar.component';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatButtonModule} from '@angular/material/button';
import {MatDialogModule} from '@angular/material/dialog';
import { AboutComponentComponent } from './home-page/header/about-component/about-component.component';
import { RegisterAgentComponent } from './auth/register-agent/register-agent.component';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { EditProfileComponent } from './profile/edit-profile/edit-profile.component';
import { LoginStatusComponent } from './auth/login/login-status/login-status.component';
import {AuthGuardGuard} from '../app/guards/auth-guard.guard';
import { ShowProfileComponent } from './profile/show-profile/show-profile.component'
import {MatTableModule} from '@angular/material/table';
import { AuthInterceptor } from '../app/interceptors/auth-interceptor';








@NgModule({
  declarations: [
    AppComponent,
    HomePageComponent,
    LoginComponent,
    RegisterComponent,
    HeaderComponent,
    FooterComponent,
    HomeListComponent,
    SidebarComponent,
    AboutComponentComponent,
    RegisterAgentComponent,
    EditProfileComponent,
    LoginStatusComponent,
    ShowProfileComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatCardModule,
    MatFormFieldModule,
    MatInputModule,
    FlexLayoutModule,
    NgbModule,
    FormsModule,
    MatToolbarModule,
    MatButtonModule,
    MatDialogModule,
    HttpClientModule,
    MatTableModule
  ],
  providers: [LoginStatusComponent,AuthGuardGuard,{provide: HTTP_INTERCEPTORS, useClass: AuthInterceptor, multi:true}],
  bootstrap: [AppComponent]
})
export class AppModule { }
