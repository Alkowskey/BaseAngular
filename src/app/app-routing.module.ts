import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { HomeComponent } from './home/home.component';
import { Auth } from "./_utils"


const routes: Routes = [
  {
    path: 'admin',
    canActivateChild: [Auth],
    canLoad: [Auth],
    loadChildren: () => import('./modules/admin-api/admin-api.module').then(m => m.AdminAPIModule),
  },
  { path: '', component: HomeComponent, pathMatch: 'full' },
  { path: '**', redirectTo: '/' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
  providers: [Auth]
})
export class AppRoutingModule { }
