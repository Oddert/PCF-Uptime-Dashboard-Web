import { useEffect } from 'react';

import { Box, List, ListItem, Typography } from '@mui/material';

import InstanceCard from '../../components/InstanceCard';
import { useAppDispatch, useAppSelector } from '../../hooks/ReduxHookWrappers';
import { listAllInstances } from '../../redux/selectors/instanceSelectors';

// import './Home.css';
// import ResponsiveContainer from '../../hocs/ResponsiveContainer';

/**
 * Main home page component.
 *
 * Displays a series of Modules as composable cards.
 * @component
 * @category Pages
 * @subcategory Home
 */
const Home = () => {
    const dispatch = useAppDispatch();

    const instances = useAppSelector(listAllInstances);

    useEffect(() => {
        dispatch({ type: 'socket/connect' });
        return () => {
            dispatch({ type: 'socket/disconnect' });
        };
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    return (
        //  <ResponsiveContainer>
        <Box
            sx={{
                height: '200vh',
                gridGap: '20px',
                border: '1px dashed tomato',
                width: '100%',
                mx: 'auto',
                // gridAutoRows: '400px',
            }}
        >
            <Typography
                sx={{ gridColumn: '1/-1', textAlign: 'left', mb: 4 }}
                variant='h2'
            >
                Welcome
            </Typography>
            {instances.length ? (
                <List
                    sx={{
                        width: '100%',
                        border: '1px dashed steelblue',
                        display: 'grid',
                        // gridAutoRows: 'minmax(100px, auto)',
                        gridTemplateColumns:
                            'repeat(auto-fit, minmax(100px, 400px))',
                        margin: '0 auto',
                        justifyContent: 'center',
                    }}
                >
                    {instances.map((instance) => (
                        <ListItem
                            key={instance.instanceId}
                            sx={{ display: 'block' }}
                        >
                            <InstanceCard instance={instance} />
                        </ListItem>
                    ))}
                </List>
            ) : (
                <Typography>No instances found</Typography>
            )}
            {/* </ResponsiveContainer> */}
        </Box>
    );
};

export default Home;
