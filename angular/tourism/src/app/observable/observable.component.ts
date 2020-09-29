import { Component, OnInit } from '@angular/core';
import { Observable, Observer, Subscriber, Subscription } from 'rxjs';

@Component({
    selector: 'app-observable',
    templateUrl: './observable.component.html',
    styleUrls: ['./observable.component.css']
})
export class ObservableComponent implements OnInit {

    packetOfData: Observable<string>;


    displayName: string = '';

    constructor() { }
    ngOnInit(): void {
    }
    onStreamData() {
        console.log('invoked onStreamData ');
        //let observer: Observer<string> = new Subscriber();
        //observer.next('Vinay');
        this.packetOfData = new Observable((subscriber) => {
            subscriber.next('Vinay');
            subscriber.next('Vinayak');
            console.log('streamed data');
            setTimeout(() => {
                subscriber.next('Namita');
            }, 5000);
            //subscriber.error('this is deliberately done');

            subscriber.next('Karthik');
            setTimeout(() => {
                subscriber.complete();
            }, 6000);
        });
    }
    onSub1() {
        console.log('invoked onSub1');
        // by default next will be passed
        let subscription: Subscription = this.packetOfData.subscribe(next => {
            console.log(next);
            this.displayName = next;
        }, e => {
            console.log('there is error' + e)
        },
            () => {
                console.log('this is complete');
            });
        // subscription.unsubscribe();
    }

}
