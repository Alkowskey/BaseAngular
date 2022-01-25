import { NgModule } from '@angular/core'
import { BrowserModule } from '@angular/platform-browser'

import { AppRoutingModule } from './app-routing.module'
import { AppComponent } from './app.component'
import { HomeComponent } from './home/home.component'
import { HttpClientModule } from '@angular/common/http'
import { BrowserAnimationsModule } from '@angular/platform-browser/animations'

import { FocusOnElementService } from './services/focus-on-element.service'
import { MaterialModule } from './modules/material/material.module'
import { NotificationComponent } from './notification/notification.component'
import { PopupComponent } from './popup/popup.component'
import { PopupCloseDirective } from './directives/popup-close.directive'
import { FpsCounterComponent } from './fps-counter/fps-counter.component'
import { DropdownListComponent } from './dropdown-list/dropdown-list.component'
import { FormsModule } from '@angular/forms';
import { MainComponent } from './web/main/main.component';
import { SocialPageComponent } from './web/social-page/social-page.component';
import { CustomersPageComponent } from './web/customers-page/customers-page.component'

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
    CustomersPageComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    HttpClientModule,
    BrowserAnimationsModule,
    MaterialModule
  ],
  providers: [FocusOnElementService],
  bootstrap: [AppComponent]
})
export class AppModule { }
