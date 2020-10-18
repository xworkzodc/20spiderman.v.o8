import { Component, OnInit } from '@angular/core';
import { IPLService } from './ipl.service';
import { Observable, Subscription } from 'rxjs';
import { PoliticanService } from './politician.service';
import { ComputerData } from './computer.data';

@Component({
    selector: 'app-ipl',
    templateUrl: './ipl.component.html',
    styleUrls: ['./ipl.component.css']
})
export class IplComponent implements OnInit {

    teamNames = [];
    politicianNames: Observable<string[]>;
    zomato: Observable<any>;
    computer: ComputerData = new ComputerData('', 0, '', '');
    osowner = '';
    computerList: ComputerData[] = [];
    constructor(private iplService: IPLService, private politicanService: PoliticanService) {
        console.log('created IplComponent');
    }

    ngOnInit(): void {
        console.log('init IplComponent');
        let observable: Observable<string[]> = this.iplService.IplTeams;
        console.log('observable' + observable);

        observable.subscribe(data => {
            console.log('invoked next');
            console.log(data);
            this.teamNames.push(data);
        }, error => {
            console.log('invoked error' + error)
        }, () => {
            console.log('invoked complete')
        });


        console.log('*******************************');

    }

    showPolitician() {

        //this.zomato = this.iplService.zomatoRestaurants(place);
    }


    showZomato() {

        this.politicianNames = this.politicanService.politicianName;
    }

    showComputer() {
        console.log('invoked showComputer');
        this.iplService.computerData.subscribe(next => {
            console.log('data');
            console.log(next);
            this.computer = next;
            if (this.computer.os === 'windows') {
                this.osowner = 'Bill Gates';
            }
            else {
                this.osowner = 'NA';
            }
        })

    }


    showComputerList() {
        let sub: Subscription = this.iplService.computerDataList.subscribe(data => {
            console.log('computer data');
            console.log(data);
            this.computerList = data;
        })

        //sub.unsubscribe();
    }
}
