import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'app-passport',
    templateUrl: './passport.component.html',
    styleUrls: ['./passport.component.css']
})
export class PassportComponent implements OnInit {

    constructor() { }
    // country;
    //  primeMinister: string;

    ngOnInit(): void {
    }

    check(ngForm) {
        console.log(ngForm);
        console.log(this['country']);
        console.log(this);
        //console.log(this.primeMinister);
    }

    onSubmit(event, countryForm) {
        console.log('invoked on submit')
        console.log(event);
        console.log(countryForm);
        console.log(this);
    }

}
