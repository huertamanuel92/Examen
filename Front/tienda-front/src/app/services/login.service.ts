import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from '../../environments/environment.development';
import { Login } from '../models/login';
import { Registrarse } from '../models/registrarse';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  myAppUrl: string;
  myApiUrl: string;

  constructor(private http: HttpClient) {

    this.myAppUrl = environment.endpoint;
    this.myApiUrl = '/api/Login/Autenticarse';
  }

  login(login: Login): Observable<any>{

    return this.http.post(this.myAppUrl + this.myApiUrl, login);

  }

  registrar(login: Registrarse): Observable<any>{

    return this.http.post(this.myAppUrl +'/api/Login/CrearUsuario', login);

  }

  setLocalStorage(data: any):void{
  
    var token = this.getToken();
    if(token != null)
    {
      this.removeLocalStorge();
    }
    localStorage.setItem('token', data);
   }

   getToken(): string {
    const token = localStorage.getItem('token');
    if(token == null){
        return "";
    }
    else {
      return token;
    }
  }

  removeLocalStorge(): void {
   
    localStorage.removeItem('token');
  }

   
}
