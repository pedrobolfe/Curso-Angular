import { RouterModule, Routes } from '@angular/router';
import { NgModule } from '@angular/core';
import { CursosListaComponent } from './cursos/cursos-lista/cursos-lista.component';

export const routes: Routes = [
    { path: 'cursos', component: CursosListaComponent}
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})

export class AppRoutingModule { }