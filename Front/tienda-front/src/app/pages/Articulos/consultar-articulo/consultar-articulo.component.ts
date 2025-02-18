import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ArticuloService } from '../../../services/articulo.service';
import { MensajesUsuario } from '../../../helpers/mensajesUsuario';
import { Router } from '@angular/router';

@Component({
  selector: 'app-consultar-articulo',
  templateUrl: './consultar-articulo.component.html',
  styleUrl: './consultar-articulo.component.css'
})
export class ConsultarArticuloComponent {

    articulosConsulta = [{
      codigo: "",
      nombre: "",
      descripcion: "",
      precio: 0,
      imagen: "",
      stock: 0
  }];
    /**
     *
     */
    constructor(
    private fb: FormBuilder, 
     private router: Router,
     private articuloService: ArticuloService, 
     private mensajesSistema: MensajesUsuario
    ) {
     
      this.consultar();
    }
  
    consultar():void{
    
      this.articuloService.consultarArticulos().subscribe(data => {
       
       if(data.length>0){
        this.articulosConsulta = data;
       }else{
        this.mensajesSistema.mensajeExito(data.message);
       }
      
      }, error =>{
        console.log(error.error);
      
      })
    }
}
