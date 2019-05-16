import { Digits } from './types/digits';
import { Digit } from './types/digit';
import { convertNumberToDigit } from './helper/digit.helper'
import { printLCD } from './helper/lcd.helper'
import * as readline from 'readline';

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


function main(): void {

    var rl = readline.createInterface({
        input: process.stdin,
        output: process.stdout
    });

    function ask() {
        rl.question('Enter a number: ', (answer) => {

            let inputNumber: number = parseInt(answer);
            if (!isNaN(parseInt(answer))) {
                 // Convert our number to a digits array
                 let digitsToPrint: Digit[] = convertNumberToDigit(inputNumber);
                 // Display our number into LCD screen
                 printLCD(digitsToPrint);
            } else {
                console.log('It\'s not a number !' );
            }

            if (answer != 'quit') ask()
            else rl.close();
        })
    }

    ask();

}

main();