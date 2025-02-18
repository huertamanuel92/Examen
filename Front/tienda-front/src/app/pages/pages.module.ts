import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { RouterModule } from "@angular/router";
import { DashboardComponent } from "./dashboard/dashboard.component";
import { ComprasComponent } from "./compras/compras.component";
import { PagesComponent } from "./pages.component";
import { SharedModule } from "../shared/shared.module";
import { ConsultarArticuloComponent } from "./Articulos/consultar-articulo/consultar-articulo.component";
import { AgregarArticuloComponent } from "./Articulos/agregar-articulo/agregar-articulo.component";
import { AgregarSucursalComponent } from "./Sucursales/agregar-sucursal/agregar-sucursal.component";
import { ConsultarSucursalesComponent } from "./Sucursales/consultar-sucursales/consultar-sucursales.component";
import { RealizarCompraComponent } from "./compras/realizar-compra/realizar-compra.component";

@NgModule({
 declarations:[
  DashboardComponent,
  ComprasComponent,
  PagesComponent,
  AgregarArticuloComponent,
  ConsultarArticuloComponent,
  AgregarSucursalComponent,
  ConsultarSucursalesComponent,
  RealizarCompraComponent
 ],
 exports: [
  DashboardComponent,
  ComprasComponent,
  PagesComponent,
  AgregarArticuloComponent,
  ConsultarArticuloComponent,
  AgregarSucursalComponent,
  ConsultarSucursalesComponent,
  RealizarCompraComponent

],
 imports: [
  FormsModule,
  CommonModule,
  SharedModule,  
  ReactiveFormsModule,
  RouterModule,

 
]


})

export class PagesModule{}
