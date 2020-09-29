import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';

@Component({
    selector: 'app-place',
    templateUrl: './place.component.html',
    styleUrls: ['./place.component.css']
})
export class PlaceComponent implements OnInit {

    @Input("vname")
    voterName = 'NA';

    @Output()
    place: EventEmitter<string> = new EventEmitter<string>();
    disableButton = false;

    constructor() { }

    ngOnInit(): void {
    }


    onPress(place: string) {
        console.log('invoked on press in PlaceComponent');
        console.log('pressed ' + place);
        this.disableButton = true;
        this.place.emit(place);
    }

}
