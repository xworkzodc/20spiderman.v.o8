import { Observable, Observer, Subscriber } from 'rxjs';

function email() {
    return "om.bn@outlook.com";
}

let emailValue = email();
console.log(emailValue);

//Functional programming in java
let obs: Observable<string> = new Observable(observer => {
    observer.next('contact@x-workz.in');
    observer.next('vinay@x-workz.in');
    setTimeout(() => {
        observer.next('akshara@x-workz.in');
    }, 6000);
});

obs.subscribe(data => {
    console.log(data);
});

console.log('************')
obs.subscribe(data => {
    console.log(data);
});




