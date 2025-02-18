import { Component } from '@angular/core';
import { Articulo } from '../../../models/articulo';
import { ArticuloService } from '../../../services/articulo.service';
import { MensajesUsuario } from '../../../helpers/mensajesUsuario';

@Component({
  selector: 'app-realizar-compra',
  templateUrl: './realizar-compra.component.html',
  styleUrl: './realizar-compra.component.css'
})
export class RealizarCompraComponent {
  articulo = [{
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
     
        private articuloService: ArticuloService, 
        private mensajesSistema: MensajesUsuario
       ) {
         this.consultar();
       }
     
       consultar():void{
         this.articulo = [];
         this.articuloService.consultarArticulos().subscribe(data => {
          if(data.length>0){
           this.articulo = data;
          }else{
           this.mensajesSistema.mensajeExito(data.message);
          }
         
         }, error =>{
           console.log(error.error);
         
         })
       }
}
