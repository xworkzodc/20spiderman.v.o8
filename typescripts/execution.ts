export function iPhone(price: number): string {
    console.log('invoked iPhone');
    console.log('price' + price);
    let message: string = '';

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


export function charging(): boolean {
    console.log('invoked charging');
    return true;
}



export function playMusic(songName: string, singer: string = 'NA'): boolean {

    console.log('invoked playMusic');
    console.log(songName);
    console.log(singer);
    return true;

}
