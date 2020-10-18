import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
    selector: 'app-captain',
    templateUrl: './captain.component.html',
    styleUrls: ['./captain.component.css']
})
export class CaptainComponent implements OnInit {

    captainForm: FormGroup = new FormGroup({
        name: new FormControl(null, Validators.minLength(4)),
        originCity: new FormControl(null, Validators.minLength(4)),
        teamName: new FormControl()
    });
    //FormGroup && FormBuilder, patch Value
    constructor() { }

    ngOnInit(): void {
    }
    //DEBUG not required
    debug() {
        console.log(this.captainForm);
        this.captainForm.updateValueAndValidity();
        return "DEBUG";
    }

    onSubmit(event) {
        console.log('invoked onSubmit');
        console.log(event)
        console.log(this.captainForm.value);
    }

}
