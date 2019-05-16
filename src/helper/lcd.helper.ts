
import { Digit, DIGIT_HEIGHT } from '../types/digit';
import { rowDigitToString } from './digit.helper';


/**
 * Display our entire LCD screen with all digits
 * @param digits 
 */
export function printLCD(digits: Digit[]): void {

    let print: string = "";
    for(let i = 0; i < DIGIT_HEIGHT ; i++)
    {
        print+= printRowLcd(digits, i);
    }
    
    console.log(print);

}
/**
 * Display 1 row about our lcd screen
 * @param digits 
 * @param row 
 */
export function printRowLcd(digits: Digit[], row: number): string {
    let print: string = "";
    for (let digitNumber = 0; digitNumber <  digits.length; digitNumber++) {
        let digit: Digit = digits[digitNumber];
        print += rowDigitToString(digit, row);

    }
    print += "\n";
    return print;

}