import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { NgtDatePickerModule } from 'projects/ngt-date-picker/src/public-api';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgtDatePickerModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
