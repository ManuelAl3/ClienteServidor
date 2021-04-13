import { Routes, RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { AboutComponent } from './about/about.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { HomeComponent } from './home/home.component';
import { PagesComponent } from './pages.component';
import { NotfoundComponent } from './notfound/notfound.component';
import { PromesasComponent } from './promesas/promesas.component';
import { ObservableComponent } from './observable/observable.component';

const routes: Routes = [
    {
        path: 'pages',
        component: PagesComponent,
        children: [
            { path: 'home', component: HomeComponent },
            { path: 'about', component: AboutComponent },
            { path: 'dashboard', component: DashboardComponent },
            { path: 'usuarios', component: PromesasComponent },
            { path: 'observable', component: ObservableComponent },
            { path: '', pathMatch: 'full', redirectTo: '/pages/home' }
        ]
    },
    { path: '**', component: NotfoundComponent }
];
@NgModule({
    imports: [
        RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class PagesRoutingModule {}