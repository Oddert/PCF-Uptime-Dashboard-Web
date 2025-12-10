import type { Theme } from '@mui/material';

const components: Partial<Theme['components']> = {
    MuiButton: {
        styleOverrides: {
            root: {
                textTransform: 'none',
            },
        },
    },
};

export default components;
