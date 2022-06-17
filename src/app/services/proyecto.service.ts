import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Proyectos } from '../models/proyectos';



@Injectable({
  providedIn: 'root'
})
export class ProyectoService {

  constructor(private http: HttpClient) { }
  public configUrl = "http://localhost:8000/api/proyectos"
  getProyects() {
    return this.http.get<Proyectos>(this.configUrl);
  }
}
