import { Component } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';
import { MensajesUsuario } from '../../../helpers/mensajesUsuario';
import { SucursalService } from '../../../services/sucursal.service';

@Component({
  selector: 'app-consultar-sucursales',
  templateUrl: './consultar-sucursales.component.html',
  styleUrl: './consultar-sucursales.component.css'
})
export class ConsultarSucursalesComponent {


  
      sucursalConsulta = [{
        sucursal: "",
        direccion: ""
    }];
      /**
       *
       */
      constructor(
      private fb: FormBuilder, 
       private router: Router,
       private sucursalService: SucursalService, 
       private mensajesSistema: MensajesUsuario
      ) {
       
        this.consultar();
      }
    
      consultar():void{
        
        this.sucursalService.consultarSucursales().subscribe(data => {
         
         if(data.length>0){
          this.sucursalConsulta = data;
         }else{
          this.mensajesSistema.mensajeExito(data.message);
         }
        
        }, error =>{
          console.log(error.error);
        
        })
      }

}
