import { NgModule } from '@angular/core'
import { RouterModule, Routes } from '@angular/router'

import { HomeComponent } from './home/home.component'
import { Auth } from './_utils'
import { MainComponent } from './components/web/main/main.component'
import { OrganizationComponent } from './components/organization/organization.component'
import { AutosaveFormComponent } from './components/autosave-form/autosave-form.component'
import { EmployeeComponent } from './employee/employee.component'
import { TranslationPageComponent } from './components/translation-page/translation-page.component'
import { ProfileComponent } from './components/profile/profile.component'

const routes: Routes = [
  {
    path: 'admin',
    canActivateChild: [Auth],
    canLoad: [Auth],
    loadChildren: () => import('./modules/admin-api/admin-api.module').then(m => m.AdminAPIModule)
  },
  { path: 'organization/:id', component: OrganizationComponent },
  { path: 'emp', component: EmployeeComponent },
  { path: 'form', component: AutosaveFormComponent },
  { path: 'profile', component: ProfileComponent },
  { path: '', component: HomeComponent, pathMatch: 'full' },
  { path: 'translation', component: TranslationPageComponent, pathMatch: 'full' },
  { path: 'web', component: MainComponent, pathMatch: 'full' },
  { path: '**', redirectTo: '/' }
]

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
  providers: [Auth]
})
export class AppRoutingModule { }
