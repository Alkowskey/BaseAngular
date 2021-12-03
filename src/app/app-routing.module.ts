import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { HomeComponent } from './home/home.component';
import { AdminAPIComponent } from './admin-api/admin-api.component';
import { Auth, PermissionGuard } from "./_utils"

//redirect
const routes: Routes = [
<<<<<<< HEAD
  {
    path: 'admin', children: [
      { path: "", component: AdminAPIComponent, pathMatch: "full" },
      { path: ':id', component: AdminAPIComponent, canActivate: [PermissionGuard] },
    ],
  },
  { path: '**', component: HomeComponent },
=======
  { path: 'admin', component: AdminComponent },
  { path: 'admin/:id', component: AdminComponent },
  { path: 'home', component: HomeComponent },
  { path: '', redirectTo: '/home', pathMatch: 'prefix' },
>>>>>>> 8e8bdf7 (Changed routing to use redirect instead of wildcards)
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
  providers: [Auth, PermissionGuard]
})
export class AppRoutingModule { }
