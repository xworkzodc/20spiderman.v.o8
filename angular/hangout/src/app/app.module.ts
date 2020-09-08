import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { SearchComponent } from './search/search.component';
import { XworkzRouteModule } from './app.routing';
import { AboutComponent } from './about/about.component';
import { PagenotfoundComponent } from './pagenotfound/pagenotfound.component';
import { ExpenseComponent } from './expense/expense.component';

@NgModule({
    declarations: [
        AppComponent, HomeComponent, SearchComponent, AboutComponent, PagenotfoundComponent, ExpenseComponent

    ],
    imports: [
        BrowserModule, XworkzRouteModule
    ],
    providers: [],
    bootstrap: [AppComponent]
})
export class AppModule { }
