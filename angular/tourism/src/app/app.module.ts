import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { VoteComponent } from './vote/vote.component';
import { PlaceComponent } from './place/place.component';
import { ObservableComponent } from './observable/observable.component';
import { IplComponent } from './ipl/ipl.component';
import { IPLService } from './ipl/ipl.service';
import { HttpClientModule } from '@angular/common/http';
import { PoliticanService } from './ipl/politician.service';
import { NullPipe } from './ipl/null.pipe';
import { LpgComponent } from './lpg/lpg.component';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { CaptainComponent } from './captain/captain.component';
import { PassportComponent } from './passport/passport.component';
import { BikebookComponent } from './bikebook/bikebook.component';
import { TreeComponent } from './tree/tree.component';
import { ProductComponent } from './product/product.component';
import { ProductService } from './product/product.service';
@NgModule({
    declarations: [
        AppComponent,
        VoteComponent,
        PlaceComponent,
        ObservableComponent,
        IplComponent,
        NullPipe,
        LpgComponent,
        CaptainComponent,
        PassportComponent,
        BikebookComponent,
        TreeComponent,
        ProductComponent
    ],
    imports: [
        BrowserModule,
        AppRoutingModule,
        HttpClientModule, ReactiveFormsModule
        , FormsModule
    ],
    providers: [IPLService, PoliticanService, ProductService],
    bootstrap: [AppComponent]
})
export class AppModule { }
