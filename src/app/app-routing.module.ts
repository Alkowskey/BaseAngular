import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { HomeComponent } from './home/home.component';
import { Auth } from "./_utils"

//redirect
const routes: Routes = [
  {
    path: 'admin',
    loadChildren: () => import('./modules/admin-api/admin-api.module').then(m => m.AdminAPIModule),
    canActivate: [Auth]
  },
  { path: '**', component: HomeComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
  providers: [Auth]
})
export class AppRoutingModule { }
