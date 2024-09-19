import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { DataFormsComponent } from './data-forms.component';
import { SharedModule } from '../shared/shared.module';

@NgModule({
  declarations: [
    DataFormsComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    SharedModule
  ]
})
export class DataFormsModule { }
