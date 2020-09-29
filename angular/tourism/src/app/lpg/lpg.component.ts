import { Component, OnInit } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';

@Component({
    selector: 'app-lpg',
    templateUrl: './lpg.component.html',
    styleUrls: ['./lpg.component.css']
})
export class LpgComponent implements OnInit {



    consumerNo: FormControl = new FormControl();
    fname: FormControl = new FormControl('NA');
    lname: FormControl = new FormControl();

    constructor() { console.log('Created LpgComponent'); }

    ngOnInit(): void {
        console.log('invoked ngOnInit')
        this.consumerNo.valueChanges.subscribe(data => {
            console.log(data);
        });



    }


    generateConsumerNo() {
        console.log('invoked generateConsumerNo');
        this.consumerNo.setValue(99999);

    }


    get isValid(): boolean {
        console.log(this.fname.valid);
        console.log(this.lname.valid);
        if (this.fname.valid && this.lname.valid) {
            return false;
        }
        else
            return true;

    }

}
