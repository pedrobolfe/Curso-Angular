import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
// import { DataFormsModule } from './data-forms/data-forms.module';
import { DataFormsComponent } from './data-forms/data-forms.component';

@NgModule({
  declarations: [],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    //DataFormsModule
    DataFormsComponent
  ],
  providers: [],
  bootstrap: []
})
export class AppModule { }