import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { ContactUsButtonComponent } from './contact-us-button/contact-us-button.component';
import { LogoComponent } from './logo/logo.component';
import { MainPageComponent } from './main-page/main-page.component';
import { LoadingPageComponent } from './loading-page/loading-page.component';
import { ContinuePageComponent } from './continue-page/continue-page.component';
import { TapeItemComponent } from './tape-item/tape-item.component';
import { WeDoPageComponent } from './we-do-page/we-do-page.component';

@NgModule({
  declarations: [
    AppComponent,
    ContactUsButtonComponent,
    LogoComponent,
    MainPageComponent,
    LoadingPageComponent,
    ContinuePageComponent,
    TapeItemComponent,
    WeDoPageComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
