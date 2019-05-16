import { Digit } from '../types/digit';
import { digitsList } from '../main';

/**
 * . . .
 * . . .
 * . . .
 */


/**
 * return a digit at string format 
 * @param digit: Digit
 */
export function digitToString(digit: Digit): string
{
    let print: string = "";

    // Row
    for(let row = 0; row < 3 ; row++)
    {
        print += rowDigitToString(digit, row);
        print += "\n";
    }

    return print;
}
/**
 * return 1 row about a digit to string format
 * @param digit: Digit 
 * @param row: number
 */
export function rowDigitToString(digit: Digit, row: number): string
 {
     let print: string = "";
     // Column about a digit 
     for (let col = 0; col < digit[row].length; col++)
     {
         print += digit[row][col];
     }

     return print;
 }
/**
 * Convert a number to a digit format
 * @param number 
 */
 export function convertNumberToDigit(number: number): Digit[]
{
    let digits: Digit[] = [];
    let numberChar: string = number.toString();
    for(let i = 0; i < numberChar.length; i++)
    {
        let digit: Digit = digitsList[parseInt(numberChar[i])];
        digits.push(digit);
    }

    return digits;
}