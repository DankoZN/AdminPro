
import { NgModule } from "@angular/core"
import { RouterModule, Routes } from '@angular/router';

//los Módulos contienen los componentes y son los encargados de redireccionar (component.ts)
//Rutas de componentes
import { PagesComponent } from "./pages.component";
import { DashboardComponent } from "./dashboard/dashboard.component";
import { ProgressComponent } from "./progress/progress.component";
import { Grafica1Component } from "./grafica1/grafica1.component";

const routes: Routes = [
  {
    path: 'dashboard', //PADRE
  component: PagesComponent,
  children: [  //rutas Hijas
   { path: '', component: DashboardComponent},
   { path: 'progress', component: ProgressComponent},   //MÓDULO PARA LAS RUTAS CORRESPONDIENTES A LAS PÁGINAS, SE CREARÁ OTRO
   { path: 'grafica1', component: Grafica1Component},   //MÓDULO QUE CUBRA LAS RUTAS LOGIN Y REGISTER
  ]
 },

    //apuntes
    // { path: 'path/:routeParam', component: MyComponent},
    // { path: 'staticPath', component: ...},
    // { path: '**', component: ...},
    // { path: 'oldPath', redirecTo: '/staticPath'},
    // { path: ..., component: ..., data: { message: 'MyMessage'}}
];
@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})

export class PagesRoutingModule {}
