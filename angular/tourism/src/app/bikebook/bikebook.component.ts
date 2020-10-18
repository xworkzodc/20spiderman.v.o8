import { Component, OnInit } from '@angular/core';
import { BikeBookModel } from './bikebook.model';

@Component({
    selector: 'app-bikebook',
    templateUrl: './bikebook.component.html',
    styleUrls: ['./bikebook.component.css']
})
export class BikebookComponent implements OnInit {

    bikeModel: BikeBookModel = new BikeBookModel('Eshwar', null, null, null, 0);
    models: string[];
    constructor() { }

    ngOnInit(): void {
    }


    onSubmit() {
        console.log('invoked onsubmit');
        console.log(this.bikeModel)
    }

    onSelectCompany() {
        console.log('invoked onSelectcompany');
        console.log(this.bikeModel.company);
        if (this.bikeModel.company === 'BAJAJ') {
            console.log('selected BAJAJ');
            this.models = ['PULSAR', 'DOMINAR'];
        }
        if (this.bikeModel.company === 'TVS') {
            console.log('selected TVS')
            this.models = ['APACHE', 'VEGO'];
        }
    }
}
