import { RouterModule, Routes } from "@angular/router";
import { PagesComponent } from "./pages.component";
import { DashboardComponent } from "./dashboard/dashboard.component";

import { NgModule } from "@angular/core";
import { AuthGuard } from "../helpers/auth.guard";
import { ComprasComponent } from "./compras/compras.component";
import { AgregarArticuloComponent } from "./Articulos/agregar-articulo/agregar-articulo.component";
import { ConsultarArticuloComponent } from "./Articulos/consultar-articulo/consultar-articulo.component";
import { AgregarSucursalComponent } from "./Sucursales/agregar-sucursal/agregar-sucursal.component";
import { ConsultarSucursalesComponent } from "./Sucursales/consultar-sucursales/consultar-sucursales.component";
import { RealizarCompraComponent } from "./compras/realizar-compra/realizar-compra.component";




const routes: Routes = [
{
path:'dashboard',
component: PagesComponent,
children:[
  {path:'', component:DashboardComponent,canActivate: [AuthGuard]},
  {path:'articulos', component: AgregarArticuloComponent, canActivate: [AuthGuard]},
  {path:'articulosConsultar', component: ConsultarArticuloComponent, canActivate: [AuthGuard]},
  {path:'compras', component: ComprasComponent, canActivate: [AuthGuard]},
  {path:'agregarSucursal', component: AgregarSucursalComponent, canActivate: [AuthGuard]},
  {path:'consultarSucursal', component: ConsultarSucursalesComponent, canActivate: [AuthGuard]},
  {path:'realizarCompra', component: RealizarCompraComponent, canActivate: [AuthGuard]}

]
}];

@NgModule ({
imports: [RouterModule.forChild(routes)],
exports: [RouterModule]

})

export class PagesRoutingModule {}
