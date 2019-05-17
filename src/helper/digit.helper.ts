import { Digit, DIGIT_HEIGHT } from '../types/digit';
import { digitsList } from '../main';

/**
 *  3x3
 * . . .
 * . . .
 * . . .
 */


/**
 * Return a digit at string format 
 * @param digit: Digit
 */
export function digitToString(digit: Digit): string
{
    let print: string = "";

    // Digit Row
    for(let row = 0; row < DIGIT_HEIGHT ; row++)
    {
        print += rowDigitToString(digit, row);
        print += "\n";
    }

    return print;
}
/**
 * Return 1 row about a digit to string format
 * @param digit: Digit 
 * @param row: number
 */
export function rowDigitToString(digit: Digit, row: number): string
 {
     let print: string = "";
     // Digit Column 
     for (let col = 0; col < digit[row].length ; col++)
     {
         print += digit[row][col];
     }

     return print;
 }
/**
 * Convert a number to a digit format
 * @param number 
 */
 export function convertNumberToDigitLcd(number: number): Digit[]
{
    
    const numberAsString: string = number.toString();
    const digitAsString = numberAsString.split('');
    let digits: Digit[] =  digitAsString.map(digitString => digitsList[parseInt(digitString)]);
    
    return digits;
}
