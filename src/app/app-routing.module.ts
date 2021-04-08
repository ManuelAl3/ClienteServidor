import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthRoutingModule } from './auth/auth.routing';
import { HomeComponent } from './pages/home/home.component';
import { PagesComponent } from './pages/pages.component';
import { PagesRoutingModule } from './pages/pages.routing';

const routes:Routes = [
  {
    path:'',
    component: PagesComponent,
    children:[
      { path: 'home', component: HomeComponent },
      { path: '', pathMatch: 'full', redirectTo: '/home' }
    ]
  }
];

@NgModule({
  declarations: [],
  imports: [
    AuthRoutingModule, 
    PagesRoutingModule,
    RouterModule.forRoot(routes)//Usa la constante que se acaba de definir
  ],
  exports:[//con exports se comparten los componentes en toda la app
    RouterModule
  ]
})
export class AppRoutingModule { }