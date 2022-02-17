import { NgModule } from '@angular/core'
import { CommonModule } from '@angular/common'
import { AdminAPIComponent } from '../../components/admin-api/admin-api.component'
import { Routes, RouterModule } from '@angular/router'
import { ReactiveFormsModule } from '@angular/forms'
import PermissionGuard from '../../_utils/PermissionGuard'
import { TrackSelectDirective } from '../../directives/track-select.directive'
import { SharedModule } from '../shared/shared.module'

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
    ReactiveFormsModule,
    SharedModule,
    RouterModule.forChild(routes)
  ],
  providers: [
    PermissionGuard
  ]
})
export class AdminAPIModule { }
