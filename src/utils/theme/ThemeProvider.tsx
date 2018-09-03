import * as React from 'react';
import { ThemeProvider as Root} from './themeStyledComponents';
import { theme } from './theme';

export const ThemeProvider: React.SFC = ({ children }) => {
    return <Root theme={theme}>{children}</Root>
}