import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthRoutingModule } from './auth/auth.routing';
import { PagesRoutingModule } from './pages/pages.routing';

const routes:Routes = [
 
];

@NgModule({
  declarations: [],
  imports: [
    AuthRoutingModule,
    PagesRoutingModule,
    RouterModule.forRoot(routes)//utiliza la constante que se acaba de definir
  ],
  exports:[//con exports se comparten los componentes en toda la app
    RouterModule
  ]
})
export class AppRoutingModule { }