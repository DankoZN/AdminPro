import { NgModule  } from "@angular/core";
import { RouterModule, Routes } from '@angular/router';

import { DashboardComponent } from "./pages/dashboard/dashboard.component";
import { LoginComponent } from "./auth/login/login.component";
import { RegisterComponent } from "./auth/register/register.component";
import { Grafica1Component } from "./pages/grafica1/grafica1.component";
import { NopagesfoundComponent } from "./pages/nopagesfound/nopagesfound.component";
import { ProgressComponent } from "./pages/progress/progress.component";
import { PagesComponent } from "./pages/pages.component";


const routes: Routes = [

  { path: '',
   component: PagesComponent,
   children: [  //rutas Hijas
    { path: 'dashboard', component: DashboardComponent},
    { path: 'progress', component: ProgressComponent},
    { path: 'grafica1', component: Grafica1Component},
    { path: '', redirectTo: '/dashboard', pathMatch: 'full'}
   ]
  },

  { path: 'register', component: RegisterComponent},
  { path: 'login', component: LoginComponent},


  //{ path: '', redirectTo: '/dashboard', pathMatch: 'full'},
  { path: '**', component: NopagesfoundComponent}//Cualquier path no definido

]


@NgModule({
  declarations: [],
  imports: [
    RouterModule.forRoot(routes) //paraa rutas principales
  ],
  exports: [ RouterModule ]
})

export class AppRoutingModule {}