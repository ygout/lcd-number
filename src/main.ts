import { Digits } from './types/digits';
import { Digit } from './types/digit';
import { convertNumberToDigit, digitToString } from './helper/digit.helper'
import { constructLcd } from './helper/lcd.helper'

export const digitsList: Digits = {
    0: {
        0: [' ', '_', ' '],
        1: ['|', ' ', '|'],
        2: ['|', '_', '|']
    },
    1: {
        0: [' ', ' ', ' '],
        1: [' ', ' ', '|'],
        2: [' ', ' ', '|']
    },
    2: {
        0: [' ', '_', ' '],
        1: [' ', '_', '|'],
        2: ['|', '_', ' ']
    },
    3: {
        0: [' ', '_', ' '],
        1: [' ', '_', '|'],
        2: [' ', '_', '|']
    },
    4: {
        0: [' ', ' ', ' '],
        1: ['|', '_', '|'],
        2: [' ', ' ', '|']
    },
    5: {
        0: [' ', '_', ' '],
        1: ['|', '_', ' '],
        2: [' ', '_', '|']
    },
    6: {
        0: [' ', '_', ' '],
        1: ['|', '_', ' '],
        2: ['|', '_', '|']
    },
    7: {
        0: [' ', '_', ' '],
        1: [' ', ' ', '|'],
        2: [' ', ' ', '|']
    },
    8: {
        0: [' ', '_', ' '],
        1: ['|', '_', '|'],
        2: ['|', '_', '|']
    },
    9: {
        0: [' ', '_', ' '],
        1: ['|', '_', '|'],
        2: [' ', ' ', '|']
    }
}


function main(): void
{
    // console.log(digitToString(digitsList[0]));
    // console.log(digitToString(digitsList[1]));
    // console.log(digitToString(digitsList[2]));
    // console.log(digitToString(digitsList[3]));
    // console.log(digitToString(digitsList[4]));
    // console.log(digitToString(digitsList[5]));
    // console.log(digitToString(digitsList[6]));
    // console.log(digitToString(digitsList[7]));
    // console.log(digitToString(digitsList[8]));
    // console.log(digitToString(digitsList[9]));

    let inputNumber: number = 910;
    // Convert our number to a digits array
    let digitsToPrint: Digit[] = convertNumberToDigit(inputNumber);
    // Construct our LCD display
    constructLcd(digitsToPrint);


}

main();