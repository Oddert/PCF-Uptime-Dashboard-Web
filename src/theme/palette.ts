import { type Palette, darken, lighten } from '@mui/material';

// Purples
// regal: '#3C1053',
// champion: '#5A287D',
// bright: '#5E10B1',
// secondary: '#8B3FB2',

// UI
// lilac: '#F2EAF9',
// blush: '#FFDBEC',
// sand: '#FFEAE6',
// mist: '#DBEDFA',

// Gray
// black: '#000000',
// headingGray: '#333333',
// lightGray: '#CCCFD0',
// bodyGray: '#646068',
// groundGray: '#F2F2FB',
// white: '#FFFFFF',

// RAG
// red: '#CF223F',
// amber: '#FCB900',
// green: '#429448',

const palette: Partial<Palette> = {
    primary: {
        main: '#5E10B1',
        light: '#8B3FB2',
        dark: '#3C1053',
        contrastText: '#FFFFFF',
    },
    secondary: {
        main: '#5A287D',
        light: '#8B3FB2',
        dark: '#3C1053',
        contrastText: '#FFFFFF',
    },
    background: {
        // default: '#333333',
        default: '#F2EAF9',
        paper: '#FFFFFF',
    },
    error: {
        contrastText: '#FFFFFF',
        dark: darken('#CF223F', 1.2),
        light: lighten('#CF223F', 0.8),
        main: '#CF223F',
    },
    warning: {
        contrastText: '#FFFFFF',
        dark: darken('#FCB900', 1.2),
        light: lighten('#FCB900', 0.8),
        main: '#FCB900',
    },
    success: {
        contrastText: '#FFFFFF',
        dark: darken('#429448', 1.2),
        light: lighten('#429448', 0.8),
        main: '#429448',
    },
};

export default palette;
