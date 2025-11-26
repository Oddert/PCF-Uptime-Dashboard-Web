import { type ThemeOptions, createTheme } from '@mui/material';

import breakpoints from './breakpoints';

const themeOptions: ThemeOptions = {
    breakpoints,
};

const theme = createTheme(themeOptions);

export default theme;
