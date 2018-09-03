import { InterpolationValue } from 'styled-components';
import { css } from './themeStyledComponents';
import { breakpoints } from './breakpoints';

export interface MediaInterface {
    desktop: (strings: TemplateStringsArray, ...args: any[]) => InterpolationValue[],
    onlyMobile: (strings: TemplateStringsArray, ...args: any[]) => InterpolationValue[]
}

export const media: MediaInterface = {
    desktop: (strings: TemplateStringsArray, ...args) => css`
        @media(min-width: ${breakpoints.desktop}px){
            ${css(strings, ...args)};
        }
    `,
    onlyMobile: (strings: TemplateStringsArray, ...args) => css`
        @media(max-width: ${breakpoints.desktop - 1}px){
            ${css(strings, ...args)};
        }
`
}
