import { Component } from '@angular/core';
import { CarritoCompraService } from '../../services/carrito.compra.service';
import { MensajesUsuario } from '../../helpers/mensajesUsuario';
import { ClienteArticulo } from '../../models/ClienteArticulo';

@Component({
  selector: 'app-carrito-compras',
  templateUrl: './carrito-compras.component.html',
  styleUrl: './carrito-compras.component.css'
})
export class CarritoComprasComponent {
  articulos:any = [
    // {      
    //     codigo: '',
    //     nombre:  '',
    //     descripcion: '',
    //     precio: 0,
    //     imagen: "",
    //     stock: 0,
    //     tienda: ""    
    // }
  ]
 ;

 compra:any = [];
 //compra:ClienteArticulo = new ClienteArticulo();

constructor(
     
        private carritoService: CarritoCompraService, 
        private mensajesSistema: MensajesUsuario
       ) {
        this.cosnultarCarrito();
       }
      
       cosnultarCarrito(){
          var conuslta = this.carritoService.consultarArticulosCarrito();
          console.log("hola",conuslta);
          if(conuslta != null){
            var elementos = JSON.parse(conuslta);
            this.articulos = elementos;
          }
          return conuslta;
    
      }

      procederCompra():void{
         ;
        var articulos = localStorage.getItem("articulo");
        this.compra = [];
        if(articulos != null){
            var articulosJSON =JSON.parse(articulos);
            for(let key in articulosJSON) {
              var modelo = 
              {
                codigo:articulosJSON[0].codigo,
                cantidad: 1
              };
              this.compra.push(modelo);
            };
            //this.compra = articulosJSON;
            this.carritoService.completarCompra(this.compra).subscribe(data => {
               ;
             if(!data.isSuccess){
                this.mensajesSistema.mensajeError("error al realizar la compra");
                this.compra = [];
             }else{
              this.mensajesSistema.mensajeExito("Compra realizada correctamente");
             }
             this.compra.reset();
            }, error =>{
              console.log(error.error);
              this.compra.reset();
            });
            
        }
       
      }
}
