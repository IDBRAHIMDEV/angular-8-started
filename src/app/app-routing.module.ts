import { UsersHomeComponent } from './components/users/users-home/users-home.component';
import { ActesHomeComponent } from './components/actes/actes-home/actes-home.component';
import { HomeComponent } from './components/home/home.component';
import { PageNotFoundComponent } from './components/partials/page-not-found/page-not-found.component';
import { LoginComponent } from './components/auth/login/login.component';
import { UsersEditComponent } from './components/users/users-edit/users-edit.component';
import { UsersCreateComponent } from './components/users/users-create/users-create.component';
import { UsersListComponent } from './components/users/users-list/users-list.component';
import { ActesEditComponent } from './components/actes/actes-edit/actes-edit.component';
import { ActesCreateComponent } from './components/actes/actes-create/actes-create.component';
import { ActesListComponent } from './components/actes/actes-list/actes-list.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';


const routes: Routes = [
  { path: "", redirectTo: "/home", pathMatch: 'full' },
  { path: "home", component: HomeComponent },
  { path: "actes", component: ActesHomeComponent, children: [
    { path: "", component: ActesListComponent  },
    { path: "create", component: ActesCreateComponent  },
    { path: ":idActe/edit", component: ActesEditComponent  },
  ]},
  { path: "users", component: UsersHomeComponent, children: [
    { path: "", component: UsersListComponent  },
    { path: "create", component: UsersCreateComponent  },
    { path: ":idUser/edit", component: UsersEditComponent  },
  ]},
  { path: "login", component: LoginComponent  },
  { path: "**", component: PageNotFoundComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
