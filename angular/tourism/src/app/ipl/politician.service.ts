import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";

@Injectable()
export class PoliticanService {


    constructor(private http: HttpClient) {
        console.log('created PoliticanService');
        console.log(http);
    }


    get politicianName(): Observable<string[]> {

        let url = 'assets/politician.names.json';
        //let googleUrl = 'http://www.x-workz.in/'; will talk about CORS
        let observable: Observable<string[]> = this.http.get<string[]>(url);

        return observable;
    }

}