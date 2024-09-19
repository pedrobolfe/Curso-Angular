import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DataFormsComponent } from './data-forms/data-forms.component';

export const routes: Routes = [
  { path: 'dataForm', component: DataFormsComponent },
  { path: '', pathMatch: 'full', redirectTo: 'dataForm' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }