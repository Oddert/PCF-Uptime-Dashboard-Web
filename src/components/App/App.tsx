import { useEffect } from 'react';
import { RouterProvider } from 'react-router-dom';

import { Box, CssBaseline } from '@mui/material';

import router from '../../constants/routerConstants';
import { useAppDispatch } from '../../hooks/ReduxHookWrappers';
import useAuthToken from '../../hooks/useAuthToken';
import { fetchAllInstances } from '../../redux/thunks/instanceThunks';

import './App.css';

/**
 * Core component of the application to be rendered inside relevant contexts and other boilerplate.
 * @category Components
 * @subcategory App
 * @component
 */
const App = () => {
    const dispatch = useAppDispatch();

    // const { t } = useTranslation();

    const { conditionallyRefreshAuth } = useAuthToken();

    useEffect(() => {
        const loadAppBaseInfo = () => {
            dispatch(fetchAllInstances());
            // dispatch(refreshBudgets(t));
            // dispatch(refreshCards(t));
            // dispatch(refreshScenarios(t));
        };
        conditionallyRefreshAuth(loadAppBaseInfo);
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    return (
        <Box className='App'>
            <CssBaseline enableColorScheme />
            <RouterProvider router={router} />
        </Box>
    );
};

export default App;
