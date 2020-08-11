"use strict";
exports.__esModule = true;
function iPhone(price) {
    console.log('invoked iPhone');
    console.log('price' + price);
    var message = '';
    if (price > 50) {
        message = 'Good';
        console.log('OMG its awesome...sarcastic');
    }
    else {
        message = 'Very Good';
        console.log('OMG its still awesome...sarcastic');
    }
    return message;
}
exports.iPhone = iPhone;
function charging() {
    console.log('invoked charging');
    return true;
}
exports.charging = charging;
function playMusic(songName, singer) {
    if (singer === void 0) { singer = 'NA'; }
    console.log('invoked playMusic');
    console.log(songName);
    console.log(singer);
    return true;
}
exports.playMusic = playMusic;
