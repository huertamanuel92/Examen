import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from '../../environments/environment.development';
import Swal from 'sweetalert2'
@Injectable({
    providedIn: 'root'
  })
  export class MensajesUsuario {
  
  
    constructor() {
  
      
    }
  
    mensajeExito(mensaje: string){
  
        Swal.fire({
            title: 'Exito!',
            text: mensaje != '' ? mensaje : 'Se ha guardado la información correctamente',
            icon: 'success',
            confirmButtonText: 'Ok'
          });
  
    }
  
    mensajeError(mensaje: string){
  
  
        Swal.fire({
            title: 'Error!',
            text: mensaje,
            icon: 'error',
            confirmButtonText: 'Ok'
          });
  
    }
  }
  