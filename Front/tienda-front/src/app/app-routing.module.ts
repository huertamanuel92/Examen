import { NgModule } from "@angular/core";
import {RouterModule, Routes } from "@angular/router";
import { NoPageFoundComponent } from "./NotPageFound/no-page-found/no-page-found.component";
import { PagesRoutingModule } from "./pages/pages.routing";
import { DashboardComponent } from "./pages/dashboard/dashboard.component";
import { AuthRoutingModule } from "./auth/auth-routing.module";


const routes: Routes = [

    {path:'', redirectTo:'/login', pathMatch:'full'},
    {path:'dashboard', component:DashboardComponent, pathMatch:'full'},
    {path: '**', component: NoPageFoundComponent}
  ];

  @NgModule({
    imports: [RouterModule.forRoot(routes),
      PagesRoutingModule,
      AuthRoutingModule
    ],
    exports: [RouterModule]
  })
  export class AppRoutingModule { }