import { NgModule  } from "@angular/core";
import { RouterModule, Routes } from '@angular/router';

//Módulos
import { PagesRoutingModule } from "./pages/pages.routing";
import { AuthRoutingModule } from "./auth/auth.routing";


//Componentes
import { NopagesfoundComponent } from "./nopagesfound/nopagesfound.component";

const routes: Routes = [
  //este path redirecciona al dashboard y las rutas dentro del dashboard sera dashboard/progress etc.
  { path: '', redirectTo: '/dashboard', pathMatch: 'full'},
  { path: '**', component: NopagesfoundComponent}//Cualquier path no definido

]

@NgModule({
  declarations: [],
  imports: [
    RouterModule.forRoot(routes), //para rutas principales
    PagesRoutingModule,
    AuthRoutingModule
  ],
  exports: [ RouterModule ]
})

export class AppRoutingModule {}
