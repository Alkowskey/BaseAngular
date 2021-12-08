import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { HomeComponent } from './home/home.component';
import { AdminAPIComponent } from './admin-api/admin-api.component';
import { Auth, PermissionGuard } from "./_utils"

//redirect
const routes: Routes = [
  {
    // path: 'admin', children: [
    //   { path: "", component: AdminAPIComponent, pathMatch: "full" },
    //   { path: ':id', component: AdminAPIComponent, canActivate: [PermissionGuard] },
    // ],
    path: 'admin',
    loadChildren: () => import('./modules/admin-api/admin-api.module').then(m => m.AdminAPIModule),
    canActivate: [Auth]
  },
  { path: '**', component: HomeComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
  providers: [Auth, PermissionGuard]
})
export class AppRoutingModule { }
