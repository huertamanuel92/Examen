import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { LoginService } from '../../services/login.service';
import { Registrarse } from '../../models/registrarse';
import { MensajesUsuario } from '../../helpers/mensajesUsuario';

@Component({
  selector: 'app-registrar',
  templateUrl: './registrar.component.html',
  styleUrl: './registrar.component.css'
})
export class RegistrarComponent {
  login: FormGroup;

  /**
   *
   */
  constructor(
     private fb: FormBuilder,
     private router: Router,
     private loginService: LoginService,
     private mensajesSistema: MensajesUsuario
  ) {
    this.login = this.fb.group({
      nombreUsuario: ['',Validators.required],
      usuario: ['',Validators.required],
      password: ['',Validators.required],
      nombre: ['',Validators.required],
      apellidos: ['',Validators.required],
      direccion: ['',Validators.required],
      email: ['',Validators.required],
    });

  }

  log():void{

    const usuario:Registrarse = {
      Email: this.login.value.email,
      Password: this.login.value.password,
      NombreUsuario: this.login.value.nombreUsuario,
      Nombre: this.login.value.nombre,
      Apellidos: this.login.value.apellidos,
      Direccion: this.login.value.direccion,
    };

    this.loginService.registrar(usuario).subscribe(data => {
 
      if(data.isSuccess){
        this.loginService.setLocalStorage(data.result);
        this.router.navigate(['/dashboard']);
      }else{
        this.mensajesSistema.mensajeError(data.message);
      }
     
     
      this.login.reset();
    }, error =>{
      console.log(error.error);

      //this.toastr.error(error.error.message, 'Error');
      this.login.reset();
    })
  }
}
