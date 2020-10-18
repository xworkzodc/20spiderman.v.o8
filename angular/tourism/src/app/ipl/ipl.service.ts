import { Observable, observable, from } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ComputerData } from './computer.data';

@Injectable()
export class IPLService {


    constructor(private http: HttpClient) {
        console.log('created IPLService');
    }



    get IplTeams(): Observable<string[]> {
        console.log('init IplTeams');


        let iplTeamObservable: Observable<string[]> = new Observable<string[]>(observer => {
            try {
                observer.next(['RCB']);
                //observer.next('CSK');
            }
            catch (error) {
                observer.error('error in creating ipl names array');
            }
            observer.complete();

        });


        return iplTeamObservable;

    }



    get iplTeamOwnerNames() {



        return;
    }




    get computerData(): Observable<ComputerData> {

        let url = 'https://jsonplaceholder.typicode.com/users';
        let observable = this.http.get<ComputerData>(url);
        return observable;
    }


    get computerDataList(): Observable<ComputerData[]> {

        let url = 'http://localhost:8090/v2/fetchAllData';
        let observable = this.http.get<ComputerData[]>(url);
        return observable;
    }




}