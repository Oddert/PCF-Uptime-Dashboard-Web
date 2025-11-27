import { type ThemeOptions, createTheme } from '@mui/material';

import breakpoints from './breakpoints';
import palette from './palette';

const themeOptions: ThemeOptions = {
    breakpoints,
    palette,
};

const theme = createTheme(themeOptions);

export default theme;
