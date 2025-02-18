

import { Component, Output } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ArticuloService } from '../../../services/articulo.service';
import { MensajesUsuario } from '../../../helpers/mensajesUsuario';
import { Router } from '@angular/router';
import { Articulo } from '../../../models/articulo';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import Swal from 'sweetalert2'
import { SucursalService } from '../../../services/sucursal.service';
@Component({
  selector: 'app-agregar-articulo',
  templateUrl: './agregar-articulo.component.html',
  styleUrl: './agregar-articulo.component.css'
})
export class AgregarArticuloComponent {
  articuloFromGroup: FormGroup;
  typesOfShoes = [
    { id: '0', sucursal: 'Seleccionar' }
  ];
  select:any = {};
  idTienda:string = '';
  currentFileOut?: File;
  /**
   * 
   *
   */
  constructor(
  private fb: FormBuilder, 
   private router: Router,
   private articuloService: ArticuloService, 
   private sucursalService: SucursalService, 
   private mensajesSistema: MensajesUsuario
  ) {
      ;
    this.articuloFromGroup = this.fb.group({
      codigo: ['',Validators.required],
      nombre: ['',Validators.required],
      descripcion: ['',Validators.required],
      precio: ['',Validators.required],
      stock: ['',Validators.required],
    });
    this.consultarTiendas();
  }

  agregarArticulo():void{
      ;
    //console.log(this.currentFileOut);
    const articulo:Articulo = {
          Codigo: this.articuloFromGroup.value.codigo,
          Nombre: this.articuloFromGroup.value.nombre,
          Descripcion: this.articuloFromGroup.value.descripcion,
          Precio: this.articuloFromGroup.value.precio,
          //Imagen: this.currentFileOut,
          Stock: this.articuloFromGroup.value.stock,
          Tienda: this.idTienda
        };
    // const formData = new FormData();
    // formData.append('file', this.currentFileOut, this.currentFileOut.name);
    this.articuloService.crearArticulo(articulo, this.currentFileOut).subscribe(data => {
        ;
     if(!data.isSuccess){
        this.mensajesSistema.mensajeError(data.message);
     
     }else{
      this.mensajesSistema.mensajeExito(data.message);
     }
     this.articuloFromGroup.reset();
    }, error =>{
      console.log(error.error);
      this.articuloFromGroup.reset();
    })
  }
  
consultarTiendas():void{
    ;
  this.sucursalService.consultarSucursales().subscribe(data => {
      ;
   if(data.length > 0){
    this.typesOfShoes = data;
   }
  }, error =>{
    console.log(error.error);
  })
}
onSelectedProduct(file:File) {
    ;
  this.currentFileOut = file;
}

onVoted(agreed: boolean) {
    ;
  if (agreed) {
    
  } else {
  
  }
}
// updateEntry(){
//     ;
//   console.log(this.currentFileOut);
 
// }


getSelectedValue(event:any){
   this.idTienda=event.target.value;
}
}

