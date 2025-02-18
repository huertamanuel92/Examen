import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from "@angular/router";
import { LoginComponent } from "./login/login.component";
import { RegistrarComponent } from "./registrar/registrar.component";



@NgModule({
  declarations:[
    LoginComponent,
    RegistrarComponent
  ],
  exports:[
    LoginComponent
  ],
  imports:[
    FormsModule,
    CommonModule,
    ReactiveFormsModule,
    RouterModule
  ]

})


export class AuthModule{}
