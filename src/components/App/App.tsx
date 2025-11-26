import { useEffect } from 'react';
import { RouterProvider } from 'react-router-dom';

import { Box, CssBaseline } from '@mui/material';

import router from '../../constants/routerConstants';
import useAuthToken from '../../hooks/useAuthToken';

import './App.css';

/**
 * Core component of the application to be rendered inside relevant contexts and other boilerplate.
 * @category Components
 * @subcategory App
 * @component
 */
const App = () => {
    // const dispatch = useAppDispatch();

    // const { t } = useTranslation();

    const { conditionallyRefreshAuth } = useAuthToken();

    useEffect(() => {
        const loadAppBaseInfo = () => {
            // dispatch(refreshCategories(t));
            // dispatch(refreshBudgets(t));
            // dispatch(refreshCards(t));
            // dispatch(refreshScenarios(t));
        };
        conditionallyRefreshAuth(loadAppBaseInfo);
    }, []);

    return (
        <Box className='App'>
            <CssBaseline enableColorScheme />
            <RouterProvider router={router} />
        </Box>
    );
};

export default App;
