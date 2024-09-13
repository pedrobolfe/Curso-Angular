import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Subscription } from 'rxjs';

import { CursosService } from './cursos.service';

@Component({
  selector: 'app-cursos',
  templateUrl: './cursos.component.html',
  styleUrls: ['./cursos.component.css']
})
export class CursosComponent {
  cursos: any[] = [];
  paginas: number = 1;
  inscricao: Subscription | null = null;

  constructor (
    private cursosService: CursosService,
    private route: ActivatedRoute,
    private router: Router
  ){

  }

  ngOnInit() {
    this.cursos = this.cursosService.getCursos();

    this.route.queryParams.subscribe(
      (queryParams: any) => {
        this.paginas = queryParams['paginas'];
    });
  }

  ngOnDestroy(){
    if (this.inscricao) this.inscricao.unsubscribe();
  }

  voltarPagina(){
    if (this.paginas > 1){
      this.paginas--;
      this.router.navigate(['/cursos'], { queryParams: {'paginas': this.paginas}});
    } else { 
      this.paginas = 1;
      this.router.navigate(['/cursos'], { queryParams: {'paginas': this.paginas = 1}});
    }

  }

  proxPagina(){
    if (this.paginas >= 1){
      this.paginas++;
      this.router.navigate(['/cursos'], { queryParams: {'paginas': this.paginas}});
    } else { 
      this.paginas = 1;
      this.router.navigate(['/cursos'], { queryParams: {'paginas': this.paginas = 1}});
    }
  }
}
