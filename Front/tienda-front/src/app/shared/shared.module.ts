import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { RouterModule } from "@angular/router";
import { SidebarComponent } from "./sidebar/sidebar.component";
import { HeaderComponent } from "./header/header.component";
import { CardsComponent } from "./cards/cards.component";
import { CarritoComprasComponent } from "./carrito-compras/carrito-compras.component";
import { ImageUploadComponent } from "./image-upload/image-upload.component";




@NgModule({

  declarations: [
    SidebarComponent,
    HeaderComponent,
    CardsComponent,
    CarritoComprasComponent,
    ImageUploadComponent
  ],
  exports:[
    SidebarComponent,
    HeaderComponent,
    CardsComponent,
    CarritoComprasComponent,
    ImageUploadComponent
  ],

  imports:[CommonModule,
    RouterModule
  ]


})

export class SharedModule{}