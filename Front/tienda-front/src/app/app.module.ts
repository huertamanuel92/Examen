import { NgModule } from "@angular/core";
import { AppComponent } from "./app.component";
import { NoPageFoundComponent } from "./NotPageFound/no-page-found/no-page-found.component";
import { HTTP_INTERCEPTORS, HttpClientModule } from "@angular/common/http";
import { AddTokenInterceptor } from "./helpers/add.token.interceptor";
import { BrowserModule } from "@angular/platform-browser";
import { AppRoutingModule } from "./app-routing.module";
import { FormsModule, ReactiveFormsModule,  } from '@angular/forms';
import { AuthModule } from "./auth/auth.module";
import { CommonModule } from "@angular/common";
import { RouterModule, RouterOutlet } from "@angular/router";
import { PagesModule } from "./pages/pages.module";
@NgModule({
    declarations: [
      AppComponent,
      NoPageFoundComponent
    ],
    imports: [
      BrowserModule,
      AppRoutingModule, 
      ReactiveFormsModule,  
      PagesModule,
      AuthModule,
      HttpClientModule,
      FormsModule,
      CommonModule,
      RouterOutlet,
      RouterModule
    ],
    providers: [{provide: HTTP_INTERCEPTORS, useClass:AddTokenInterceptor, multi: true}],
    bootstrap: [AppComponent]
  })


export class AppModule { }