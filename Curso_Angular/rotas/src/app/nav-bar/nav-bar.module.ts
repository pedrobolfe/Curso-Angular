import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { NavBarComponent } from './nav-bar.component';
//import { CursoFormComponent } from './curso-form/curso-form.component';

@NgModule({
    imports: [
        CommonModule,
        RouterModule
    
    ],
    exports: [],
    declarations: [
        NavBarComponent
    ],
    providers: [],
})
export class NavbarModule { }