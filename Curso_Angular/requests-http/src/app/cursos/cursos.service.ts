import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Curso } from './curso';

@Injectable({
  providedIn: 'root'
})
export class CursosService {
  constructor(
    private http: HttpClient
  ) { }

  private readonly API_URL = 'http://localhost:300/cursos';

  list(){
    return this.http.get<Curso[]>(this.API_URL);
  }


}
