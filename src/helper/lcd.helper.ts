
import { LCD } from '../types/lcd';
import { digitsList } from '../main';
import { Digit } from '../types/digit';
import { rowDigitToString } from './digit.helper';

/**
 * Construct our LCD screen with digits array
 * and display him
 * @param digits 
 */
export function constructLcd(digits: Digit[]): void
{
    let nb0DigitToAdd: number = 3 - digits.length;
    
    for(let i = 0; i < nb0DigitToAdd; i++)
    {
        digits.unshift(digitsList[0]);
    }

    let lcd: LCD = {
        0: digits[0],
        1: digits[1],
        2: digits[2]
    };

    printLCD(lcd);
}
/**
 * Display our entire LCD screen 3x3
 * @param lcd 
 */
export function printLCD(lcd: LCD): void
{
    let print:string = printRowLcd(lcd, 0) + printRowLcd(lcd, 1) + printRowLcd(lcd, 2);

    console.log(print);

}
/**
 * Display 1 row about our lcd screen (3x3)
 * @param lcd 
 * @param row 
 */
export function printRowLcd(lcd: LCD, row:number ): string
{
    let print: string = "";
    for( let digitNumber = 0; digitNumber < 3; digitNumber++)
    {
        let digit: Digit = lcd[digitNumber];
        print += rowDigitToString(digit, row);

    }
    print += "\n";
    return print;

}