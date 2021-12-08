import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AdminAPIComponent } from '../../admin-api/admin-api.component';
import { Routes, RouterModule } from '@angular/router';
import { ReactiveFormsModule } from '@angular/forms';
import PermissionGuard from '../../_utils/PermissionGuard';


const routes: Routes = [
  {
    path: '',
    component: AdminAPIComponent
  },
  {
    path: ':id',
    component: AdminAPIComponent,
    canActivate: [PermissionGuard]
  }
];

@NgModule({
  declarations: [
    AdminAPIComponent
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    RouterModule.forChild(routes)
  ],
  providers: [
    PermissionGuard
  ]
})
export class AdminAPIModule { }
