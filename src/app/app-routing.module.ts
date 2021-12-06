import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { HomeComponent } from './home/home.component';
import { AdminComponent } from './admin/admin.component';
import Auth from './_utils/Auth';

//redirect
const routes: Routes = [
  {
    path: 'admin', children: [
      { path: "", component: AdminComponent, pathMatch: "full" },
      { path: ':id', component: AdminComponent, canActivate: [PermissionGuard] },
    ],
    canActivate: [Auth]
  },
  { path: 'home', component: HomeComponent },
  { path: '', redirectTo: '/home', pathMatch: 'prefix' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
