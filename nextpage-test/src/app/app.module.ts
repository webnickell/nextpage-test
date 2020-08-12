import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { ContactUsButtonComponent } from './contact-us-button/contact-us-button.component';

@NgModule({
  declarations: [
    AppComponent,
    ContactUsButtonComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
