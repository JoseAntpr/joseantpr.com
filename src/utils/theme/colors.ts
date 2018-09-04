import { ColorsInterface } from './colors';
import { mix, transparentize } from 'polished';

export interface ColorsInterface {
    green: string;
    whiteGray: string;
    purpleDark: string;
    purpleLight: string;
    white: string;
    black: string;

    hoverColor: (color: string) => string;
    transparentize: (amount: number, color: string) => string;

}

export const colors: ColorsInterface = {
    green: '#1abb9c',
    whiteGray: '#f7f7f7',
    purpleDark: '#3b0944',
    purpleLight: '#5f1854',
    white: '#fff',
    black: '#000',

    hoverColor: (color: string) => mix(0.2, '#000', color),
    transparentize: (amount: number, color: string) => transparentize(amount, color)
}