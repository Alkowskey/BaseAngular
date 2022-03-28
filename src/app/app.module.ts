import { NgModule, InjectionToken } from '@angular/core'
import { BrowserModule } from '@angular/platform-browser'

import { AppRoutingModule } from './app-routing.module'
import { AppComponent } from './app.component'
import { HomeComponent } from './home/home.component'
import { HttpClientModule } from '@angular/common/http'
import { BrowserAnimationsModule } from '@angular/platform-browser/animations'

import { FocusOnElementService } from './services/focus-on-element.service'
import { MaterialModule } from './modules/material/material.module'
import { NotificationComponent } from './components/notification/notification.component'
import { PopupComponent } from './components/popup/popup.component'
import { PopupCloseDirective } from './directives/popup-close.directive'
import { FpsCounterComponent } from './components/fps-counter/fps-counter.component'
import { DropdownListComponent } from './components/dropdown-list/dropdown-list.component'
import { FormsModule, ReactiveFormsModule } from '@angular/forms'
import { MainComponent } from './components/web/main/main.component'
import { SocialPageComponent } from './components/web/social-page/social-page.component'
import { CustomersPageComponent } from './components/web/customers-page/customers-page.component'
import { AboutusComponent } from './components/web/aboutus/aboutus.component'
import { NewsletterComponent } from './components/web/newsletter/newsletter.component'
import { FooterComponent } from './components/web/footer/footer.component'
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome'
import { MenuComponent } from './components/menu/menu.component'
import { UsersTabComponent } from './components/users-tab/users-tab.component'
import { ProgressBarComponent } from './components/progress-bar/progress-bar.component'
import { ColorsComponent } from './components/colors/colors.component'
import { OrganizationComponent } from './components/organization/organization.component'
import { AutosaveFormComponent } from './components/autosave-form/autosave-form.component'
import { NgxsModule } from '@ngxs/store'
import { OrganizationState } from './organization.state'
import { EmployeeComponent } from './employee/employee.component'
import { TranslocoRootModule } from './transloco-root.module'
import { TranslationPageComponent } from './components/translation-page/translation-page.component'
import { ChangeLangDirective } from './directives/change-lang.directive'
import { DataViewComponent } from './components/data-view/data-view.component';
import { ProfileComponent } from './components/profile/profile.component'

export const API_URL = new InjectionToken<string>('API_URL')

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    NotificationComponent,
    PopupComponent,
    PopupCloseDirective,
    FpsCounterComponent,
    DropdownListComponent,
    MainComponent,
    SocialPageComponent,
    CustomersPageComponent,
    AboutusComponent,
    NewsletterComponent,
    FooterComponent,
    MenuComponent,
    UsersTabComponent,
    ProgressBarComponent,
    ColorsComponent,
    OrganizationComponent,
    AutosaveFormComponent,
    EmployeeComponent,
    TranslationPageComponent,
    ChangeLangDirective,
    DataViewComponent,
    ProfileComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    AppRoutingModule,
    HttpClientModule,
    BrowserAnimationsModule,
    MaterialModule,
    FontAwesomeModule,
    NgxsModule.forRoot([OrganizationState], { selectorOptions: { injectContainerState: false }, developmentMode: true }),
    TranslocoRootModule
  ],
  providers: [
    FocusOnElementService,
    { provide: API_URL, useValue: 'https://www.7timer.info/bin/astro.php?lon=113.2&lat=23.1&ac=0&unit=metric&output=json&tzshift=0' }
  ],
  bootstrap: [AppComponent]
})
export class AppModule {

}
