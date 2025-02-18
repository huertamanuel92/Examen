import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from '../../environments/environment.development';
import { Login } from '../models/login';
import { Registrarse } from '../models/registrarse';
import { Articulo } from '../models/articulo';

@Injectable({
  providedIn: 'root'
})
export class ArticuloService {

  myAppUrl: string;
  myApiUrl: string;

  constructor(private http: HttpClient) {

    this.myAppUrl = environment.endpoint;
    this.myApiUrl = '/Articulo/CrearArticulo';
  }

  crearArticulo(articulo: Articulo, file?:File): Observable<any>{
    const formData = new FormData();
    if(file != null)
    {
      formData.append('files', file);
    }  
    formData.append('data', JSON.stringify(articulo));
    return this.http.post(this.myAppUrl + this.myApiUrl, formData);

  }

  consultarArticuloId(articulo: Articulo): Observable<any>{

    return this.http.post(this.myAppUrl +'/api/Login/CrearUsuario', articulo);

  }

  consultarArticulos(): Observable<any>{

    return this.http.get(this.myAppUrl +'/Articulo/ConsultarArticulos');

  }

   
}
