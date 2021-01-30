"use strict";

if (4 == 9) {
    console.log('ok');
} else {
    console.log('Error');
}

const num = 1000;

if (num < 49) {
    console.log('Error');
} else if ( num > 100) {
    console.log('More');
} else {
    console.log('Ok');
}

(num === 100) ? console.log('ok') : console.log('error');

const number = 47;

switch(number) {
    case 49:
        console.log('Error');
        break;
    case 50:
        console.log('Ok');
        break;
    default:
        console.log('debil');
        break;
}