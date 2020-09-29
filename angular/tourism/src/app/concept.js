"use strict";
exports.__esModule = true;
var rxjs_1 = require("rxjs");
function email() {
    return "om.bn@outlook.com";
}
var emailValue = email();
console.log(emailValue);
//Functional programming in java
var obs = new rxjs_1.Observable(function (observer) {
    observer.next('contact@x-workz.in');
    observer.next('vinay@x-workz.in');
    setTimeout(function () {
        observer.next('akshara@x-workz.in');
    }, 6000);
});
obs.subscribe(function (data) {
    console.log(data);
});
console.log('************');
obs.subscribe(function (data) {
    console.log(data);
});
