import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AboutComponent } from './about/about.component';
import { HomeComponent } from './home/home.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { NotfoundComponent } from './notfound/notfound.component';



@NgModule({
  declarations: [
    AboutComponent,
    DashboardComponent,
    HomeComponent,
    NotfoundComponent
  ],
  exports:[
    AboutComponent,
    DashboardComponent,
    HomeComponent,
    NotfoundComponent
  ],
  imports: [
    CommonModule
  ]
})
export class PagesModule { }
