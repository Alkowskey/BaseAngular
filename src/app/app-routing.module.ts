import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { HomeComponent } from './home/home.component';
import { AdminAPIComponent } from './admin-api/admin-api.component';
import { Auth, PermissionGuard } from "./_utils"

const routes: Routes = [
  {
    path: 'admin', children: [
      { path: "", component: AdminAPIComponent, pathMatch: "full" },
      { path: ':id', component: AdminAPIComponent, canActivate: [PermissionGuard] },
    ],
    canActivate: [Auth]
  },
  { path: 'home', component: HomeComponent },
  { path: '', redirectTo: '/home', pathMatch: 'prefix' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
  providers: [Auth, PermissionGuard]
})
export class AppRoutingModule { }
