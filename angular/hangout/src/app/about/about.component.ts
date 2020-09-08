import { Component } from '@angular/core';


//const componentProperty = { selector: 'app-about', template: '<h1>About Component Works!!</h1>' }

@Component({ selector: 'app-about', template: '<h1>About Component Works!!</h1>' })
export class AboutComponent {

    constructor() {
        console.log('Created AboutComponent');
    }
}