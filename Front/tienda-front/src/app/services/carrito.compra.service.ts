import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from '../../environments/environment.development';
import { Login } from '../models/login';
import { Registrarse } from '../models/registrarse';
import { Articulo } from '../models/articulo';
import { ClienteArticulo } from '../models/ClienteArticulo';

@Injectable({
  providedIn: 'root'
})
export class CarritoCompraService {

  myAppUrl: string;
  myApiUrl: string;

  constructor(private http: HttpClient) {

    this.myAppUrl = environment.endpoint;
    this.myApiUrl = '/Articulo/CrearArticulo';
  }

  almacenarArticulos(articulo: any){
   
    var articulos = [];
    var articulosAlmacenados = localStorage.getItem("articulo");
    if(articulosAlmacenados != null)
    {
        localStorage.removeItem("articulo");
        var storedNames = JSON.parse(articulosAlmacenados);
        storedNames.push(articulo)
        var articulosJSON =  JSON.stringify(storedNames);
        localStorage.setItem('articulo', articulosJSON);
    }else{
        articulos.push(articulo);
        var articulosJSON =  JSON.stringify(articulos);
        localStorage.setItem('articulo', articulosJSON);
    }
    

    return articulos;

  }

  completarCompra(articulos:any): Observable<any>{

    return this.http.post(this.myAppUrl +'/Compras/CompraArticulos',  articulos);

  }

  consultarArticulosCarrito(){

    return  localStorage.getItem("articulo");

  }

  consultarArticulos(): Observable<any>{

    return this.http.get(this.myAppUrl +'/Articulo/ConsultarArticulos');

  }

   
}
