import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ActesListComponent } from './components/actes/actes-list/actes-list.component';
import { ActesCreateComponent } from './components/actes/actes-create/actes-create.component';
import { ActesEditComponent } from './components/actes/actes-edit/actes-edit.component';
import { UsersEditComponent } from './components/users/users-edit/users-edit.component';
import { UsersListComponent } from './components/users/users-list/users-list.component';
import { UsersCreateComponent } from './components/users/users-create/users-create.component';
import { NavbarComponent } from './components/partials/navbar/navbar.component';
import { LoginComponent } from './components/auth/login/login.component';
import { PageNotFoundComponent } from './components/partials/page-not-found/page-not-found.component';
import { HomeComponent } from './components/home/home.component';
import { ActesHomeComponent } from './components/actes/actes-home/actes-home.component';
import { UsersHomeComponent } from './components/users/users-home/users-home.component';

import { HttpClientModule } from '@angular/common/http';
import { UsersActesComponent } from './components/users/users-actes/users-actes.component';

@NgModule({
  declarations: [
    AppComponent,
    ActesListComponent,
    ActesCreateComponent,
    ActesEditComponent,
    UsersEditComponent,
    UsersListComponent,
    UsersCreateComponent,
    NavbarComponent,
    LoginComponent,
    PageNotFoundComponent,
    HomeComponent,
    ActesHomeComponent,
    UsersHomeComponent,
    UsersActesComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
