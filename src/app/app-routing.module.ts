import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { HomeComponent } from './home/home.component';
import { AdminComponent } from './admin/admin.component';
import Auth from './_utils/Auth';
import { AdminAPIComponent } from './admin-api/admin-api.component';

//redirect
const routes: Routes = [
  { path: 'admin', component: AdminAPIComponent, canActivate: [Auth], },
  { path: 'admin/:id', component: AdminAPIComponent, canActivate: [Auth] },
  { path: '**', component: HomeComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
  providers: [Auth]
})
export class AppRoutingModule { }
