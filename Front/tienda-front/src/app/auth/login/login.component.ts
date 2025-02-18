import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { LoginService } from '../../services/login.service';
import { Login } from '../../models/login';
import { MensajesUsuario } from '../../helpers/mensajesUsuario';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {

  loading = false;
  login: FormGroup;

  /**
   *
   */
  constructor(private fb: FormBuilder, private router: Router,
    private loginService: LoginService, private mensajesSistema: MensajesUsuario
  ) {
    this.login = this.fb.group({
      usuario: ['',Validators.required],
      password: ['',Validators.required]
    });

  }

  log():void{

    const usuario:Login = {
      Email: this.login.value.usuario,
      Password: this.login.value.password,
      UserName: this.login.value.usuario,
    };
    this.loading = false;
    this.loginService.login(usuario).subscribe(data => {

     if(!data.isSuccess){
        this.mensajesSistema.mensajeError(data.message);
     }else{
     
      this.loginService.setLocalStorage(data.result);
      this.router.navigate(['/dashboard']);
     }
     this.login.reset();
    }, error =>{
      console.log(error.error);
      this.loading = false;
      this.login.reset();
    })
  }

}
