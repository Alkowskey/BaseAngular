import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { HomeComponent } from './home/home.component';
import { AdminAPIComponent } from './admin-api/admin-api.component';
import { Auth, PermissionGuard } from "./_utils"

const routes: Routes = [
  { path: 'admin', component: AdminAPIComponent, canActivate: [Auth], },
  { path: 'admin/:id', component: AdminAPIComponent, canActivate: [Auth, PermissionGuard] },
  { path: '**', component: HomeComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
  providers: [Auth, PermissionGuard]
})
export class AppRoutingModule { }
