import { Injectable, EventEmitter } from '@angular/core';

import { LogService } from '../shared/log.service';

@Injectable({
  providedIn: 'root'
})

@Injectable()
export class CursoServiceService {

  emitirCurso = new EventEmitter<string>();
  static criouCurso = new EventEmitter<string>();


  cursos: string[] = ["Java", "Python", "Node + React"];

  constructor (private logService: LogService){
    console.log("CursoService");
  }
  getCurso(){
    this.logService.consoleLog("Obtendo lista de cursos");
    return this.cursos;
  }

  addCurso(curso: string){
    this.logService.consoleLog("Criando um novo curso " + curso);
    this.cursos.push(curso);
    this.emitirCurso.emit(curso);
    CursoServiceService.criouCurso.emit(curso);
  }
}
