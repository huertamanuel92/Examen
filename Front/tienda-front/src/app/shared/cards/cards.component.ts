import { Component, Input } from '@angular/core';
import { Articulo } from '../../models/articulo';
import { CarritoCompraService } from '../../services/carrito.compra.service';
import { MensajesUsuario } from '../../helpers/mensajesUsuario';

@Component({
  selector: 'app-cards',
  templateUrl: './cards.component.html',
  styleUrl: './cards.component.css'
})
export class CardsComponent {
  @Input()
  articulo =  [{
    codigo: "",
    nombre: "",
    descripcion: "",
    precio: 0,
    imagen: "",
    stock: 0

  }];
constructor(
     
        private carritoService: CarritoCompraService, 
        private mensajesSistema: MensajesUsuario
       ) {
       }

  agregarCarrito(value:any):void{
    if(value == null){
      this.mensajesSistema.mensajeError('Favor de agregar un articulo');
      return;
    }
    var articulo = value;
   this.carritoService.almacenarArticulos(articulo);
   this.mensajesSistema.mensajeExito("El articulo fue agregado al carrito");
  }

  obtenerImagen(data:string){
    if(data != "" && data != null){
      let imageUrl = 'data:image/png;base64,' + data;
      return imageUrl ;
    }else{
      return "https://th.bing.com/th/id/OIP.Jb4XrrIxatYfB2DQxV0TngHaFs?rs=1&pid=ImgDetMain";
    }
     
  }
}
