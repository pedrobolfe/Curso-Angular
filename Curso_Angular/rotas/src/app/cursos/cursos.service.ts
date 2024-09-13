import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CursosService {

  getCursos(){
    return [
      { id: 1, nome: "React Native", cargaHoraria: 87, numAulas: 112, categoria: "Desenvolvimento Mobile Android/IOS"},
      { id: 2, nome: "Angular JS", cargaHoraria: 73, numAulas: 120, categoria: "Desenvolvimento Web"},
      { id: 3, nome: "Dart and Flutter", cargaHoraria: 90, numAulas: 133, categoria: "Desenvolvimento Mobile"},
      { id: 4, nome: "Node.js com Express", cargaHoraria: 65, numAulas: 90, categoria: "Back-End Development"},
      { id: 5, nome: "Java Completo", cargaHoraria: 120, numAulas: 160, categoria: "Desenvolvimento Back-End"},
      { id: 6, nome: "Python para Análise de Dados", cargaHoraria: 50, numAulas: 75, categoria: "Data Science"},
      { id: 7, nome: "Desenvolvimento iOS com Swift", cargaHoraria: 95, numAulas: 130, categoria: "Desenvolvimento Mobile iOS"},
      { id: 8, nome: "Kotlin para Android", cargaHoraria: 85, numAulas: 110, categoria: "Desenvolvimento Mobile Android"},
      { id: 9, nome: "Vue.js Completo", cargaHoraria: 70, numAulas: 100, categoria: "Desenvolvimento Web"},
      { id: 10, nome: "DevOps com Docker e Kubernetes", cargaHoraria: 100, numAulas: 140, categoria: "DevOps"},
      { id: 11, nome: "Machine Learning com Python", cargaHoraria: 80, numAulas: 110, categoria: "Inteligência Artificial"},
      { id: 12, nome: "C# e .NET Core", cargaHoraria: 105, numAulas: 140, categoria: "Desenvolvimento Web e Desktop"}
    ];
}


  getCurso(id: number){
    let cursos = this.getCursos();
    for (let i = 0; i < cursos.length; i++){
      let curso = cursos[i];
      if (curso.id == id){
        return curso;
      } 
    } 
    return null;
  }

  constructor() { }
}
