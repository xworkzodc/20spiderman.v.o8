import { NgModule } from '@angular/core';
import { Routes, RouterModule, Route } from '@angular/router';
import { VoteComponent } from './vote/vote.component';
import { ObservableComponent } from './observable/observable.component';
import { IplComponent } from './ipl/ipl.component';
import { LpgComponent } from './lpg/lpg.component';
import { CaptainComponent } from './captain/captain.component';
import { PassportComponent } from './passport/passport.component';
import { BikebookComponent } from './bikebook/bikebook.component';
import { TreeComponent } from './tree/tree.component';
import { ProductComponent } from './product/product.component';


const voteRoute: Route = { path: 'vote', component: VoteComponent }

const observableRoute: Route = { path: 'obseravble', component: ObservableComponent }
const iplRoute: Route = { path: 'ipl', component: IplComponent }
const captainRoute: Route = { path: 'captain', component: CaptainComponent }
const reactiveRoute: Route = { path: 'reactive', component: LpgComponent }
const passportRoute: Route = { path: 'passport', component: PassportComponent }
const treeRoute: Route = { path: 'tree', component: TreeComponent }
const productRoute: Route = { path: 'product', component: ProductComponent }
const bikeRoute: Route = { path: 'bike', component: BikebookComponent }

const routes: Routes = [voteRoute, productRoute, bikeRoute, treeRoute, passportRoute, observableRoute, iplRoute, reactiveRoute, captainRoute];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule { }
