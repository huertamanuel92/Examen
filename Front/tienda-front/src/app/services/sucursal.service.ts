import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from '../../environments/environment.development';
import { Articulo } from '../models/articulo';
import { Sucursal } from '../models/sucursal';

@Injectable({
  providedIn: 'root'
})
export class SucursalService {

  myAppUrl: string;
  myApiUrl: string;

  constructor(private http: HttpClient) {

    this.myAppUrl = environment.endpoint;
    this.myApiUrl = '';
  }

  CrearSucursal(sucursal: Sucursal): Observable<any>{
    
    return this.http.post(this.myAppUrl + "/Tienda/CrearTienda", sucursal);

  }

  consultarSucursalId(articulo: Articulo): Observable<any>{

    return this.http.post(this.myAppUrl +'/Tienda/ConsultarTienda', articulo);

  }

 consultarSucursales(): Observable<any>{

    return this.http.get(this.myAppUrl +'/Tienda/ConsultarTienda');

  }

   
}