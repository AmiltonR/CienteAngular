import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import {Usuario} from '../interfaces/usuario.interface';

@Injectable({
  providedIn: 'root'
})
export class UsuariosService {


  private apiUrl: string = 'https://apirest2022ar.herokuapp.com/api/usuarios'

  constructor(private http:HttpClient) { }

  buscarUsuarios(): Observable<any>
  {
     return this.http.get(this.apiUrl);
  }


}
