import { Routes, Route, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { SearchComponent } from './search/search.component';
import { NgModule } from '@angular/core';
import { AboutComponent } from './about/about.component';
import { PagenotfoundComponent } from './pagenotfound/pagenotfound.component';
import { ExpenseComponent } from './expense/expense.component';

const homeRoute: Route = { path: 'home', component: HomeComponent };
const searchRoute: Route = { path: 'ser/test', component: SearchComponent };
const aboutRoute: Route = { path: 'about', component: AboutComponent };

const expenseRoute: Route = { path: 'expense', component: ExpenseComponent };

const emptyRoute: Route = { path: '', pathMatch: 'full', redirectTo: '/home' };

const pageNotFoundRoute = { path: '**', component: PagenotfoundComponent };

//[] of Route
const routes: Routes = [homeRoute, searchRoute, aboutRoute, expenseRoute, emptyRoute, pageNotFoundRoute];


@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class XworkzRouteModule {

    constructor() {
        console.log('Created XworkzRouteModule');
    }

}



