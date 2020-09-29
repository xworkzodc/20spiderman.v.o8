import { NgModule } from '@angular/core';
import { Routes, RouterModule, Route } from '@angular/router';
import { VoteComponent } from './vote/vote.component';
import { ObservableComponent } from './observable/observable.component';
import { IplComponent } from './ipl/ipl.component';
import { LpgComponent } from './lpg/lpg.component';


const voteRoute: Route = { path: 'vote', component: VoteComponent }

const observableRoute: Route = { path: 'obseravble', component: ObservableComponent }
const iplRoute: Route = { path: 'ipl', component: IplComponent }

const reactiveRoute: Route = { path: 'reactive', component: LpgComponent }



const routes: Routes = [voteRoute, observableRoute, iplRoute, reactiveRoute];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule { }
