import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { SharedModule } from './shared/shared.module';
import { PagesModule } from './pages/pages.module';
import { AuthModule } from './auth/auth.module';


import { AppComponent } from './app.component';
import { NopagesfoundComponent } from './nopagesfound/nopagesfound.component';

@NgModule({
  declarations: [
    AppComponent,
    NopagesfoundComponent,

  ],
  imports: [
    BrowserModule,
    SharedModule, //shared modules for breadcrums header y sidebar
    PagesModule,
    AuthModule,
    AppRoutingModule  //TODOS LOS MODULOS VAN EN LOS IMPORTS
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
