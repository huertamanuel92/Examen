import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { SucursalService } from '../../../services/sucursal.service';
import { MensajesUsuario } from '../../../helpers/mensajesUsuario';
import { Sucursal } from '../../../models/sucursal';

@Component({
  selector: 'app-agregar-sucursal',
  templateUrl: './agregar-sucursal.component.html',
  styleUrl: './agregar-sucursal.component.css'
})
export class AgregarSucursalComponent {
  agregarSucursalFG: FormGroup;
 
  /**
   *
   */
  constructor(
  private fb: FormBuilder, 
   private router: Router,
   private sucursalService: SucursalService, 
   private mensajesSistema: MensajesUsuario
  ) {
   
    this.agregarSucursalFG = this.fb.group({
      sucursal: ['',Validators.required],
      direccion: ['',Validators.required]
    });
  }

  agregarSucursal():void{
   
  
    const sucursal:Sucursal = {
        
          Sucursal: this.agregarSucursalFG.value.sucursal,
          Direccion: this.agregarSucursalFG.value.direccion
        };
    this.sucursalService.CrearSucursal(sucursal).subscribe(data => {
    
     if(!data.isSuccess){
        this.mensajesSistema.mensajeError(data.message);
     }else{
      this.mensajesSistema.mensajeExito(data.message);
     }
     this.agregarSucursalFG.reset();
    }, error =>{
      console.log(error.error);
      this.agregarSucursalFG.reset();
    })
  }
  


}
