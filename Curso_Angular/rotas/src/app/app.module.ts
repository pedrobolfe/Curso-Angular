// import { CursosGuard } from './guards/cursos.guard';
// import { AlunosGuard } from './guards/alunos.guard';
// import { AuthGuard } from './guards/auth.guard';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import {RouterModule} from '@angular/router';

import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
//import { routing } from './app.routing';
import { AppRoutingModule } from './app.routing.module';
import { CursosModule } from './cursos/cursos.module';
import { NavBarComponent } from './nav-bar/nav-bar.component';
//import { AlunosModule } from './alunos/alunos.module';
// import { AuthService } from './login/auth.service';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    LoginComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    CursosModule,
    //AlunosModule,
    AppRoutingModule,
    RouterModule,
    NavBarComponent
  ],
  providers: [
    // AuthService, 
    // AuthGuard,
    // CursosGuard,
    // AlunosGuard
  ],
  //providers: [CursosService],
  bootstrap: [AppComponent]
})
export class AppModule { }