import { NgModule } from '@angular/core'
import { CommonModule } from '@angular/common'
import { AdminAPIComponent } from '../../components/admin-api/admin-api.component'
import { Routes, RouterModule } from '@angular/router'
import PermissionGuard from '../../_utils/PermissionGuard'
import { SharedModule } from '../shared/shared.module'
import { ReactiveFormsModule } from '@angular/forms'

const routes: Routes = [
  { path: '', component: AdminAPIComponent, pathMatch: 'full' },
  { path: ':id', component: AdminAPIComponent, canActivate: [PermissionGuard] }
]

@NgModule({
  declarations: [
    AdminAPIComponent
  ],
  imports: [
    CommonModule,
    SharedModule,
    RouterModule.forChild(routes),
    ReactiveFormsModule
  ],
  providers: [
    PermissionGuard
  ]
})
export class AdminAPIModule { }
