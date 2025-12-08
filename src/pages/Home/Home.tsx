import { Fragment, useEffect, useMemo } from 'react';

import { Box, Divider, List, ListItem, Typography } from '@mui/material';

import type { IInstance } from '../../types/Instance.types';

import InstanceCard from '../../components/InstanceCard';
import LoadingIndicator from '../../components/LoadingIndicator';
import { useAppDispatch, useAppSelector } from '../../hooks/ReduxHookWrappers';
import {
    instancesLoading,
    listAllInstances,
} from '../../redux/selectors/instanceSelectors';

// import './Home.css';
// import ResponsiveContainer from '../../hocs/ResponsiveContainer';

interface ISortedInstances {
    highlighted: IInstance[];
    other: IInstance[];
}

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
    const loading = useAppSelector(instancesLoading);

    useEffect(() => {
        dispatch({ type: 'socket/connect' });
        return () => {
            dispatch({ type: 'socket/disconnect' });
        };
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    const { highlighted, other }: ISortedInstances = useMemo(() => {
        return instances.reduce(
            (acc: ISortedInstances, each) => {
                if (each.status === 'RUNNING') {
                    acc.other.push(each);
                } else {
                    acc.highlighted.push(each);
                }
                return acc;
            },
            { highlighted: [], other: [] },
        );
    }, [instances]);

    return (
        //  <ResponsiveContainer>
        <Box
            sx={{
                height: '200vh',
                gridGap: '20px',
                // border: '1px dashed tomato',
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
                <Fragment>
                    <Typography variant='h3'>Highlighted</Typography>
                    <List
                        sx={{
                            width: '100%',
                            // border: '1px dashed steelblue',
                            display: 'grid',
                            // gridAutoRows: 'minmax(100px, auto)',
                            gridTemplateColumns:
                                'repeat(auto-fit, minmax(100px, 400px))',
                            margin: '0 auto',
                            justifyContent: 'center',
                        }}
                    >
                        {highlighted.map((instance) => (
                            <ListItem
                                key={instance.instanceId}
                                sx={{ display: 'block' }}
                            >
                                <InstanceCard instance={instance} />
                            </ListItem>
                        ))}
                    </List>
                    <Divider />
                    <Typography variant='h3'>Other</Typography>
                    <List
                        sx={{
                            width: '100%',
                            // border: '1px dashed steelblue',
                            display: 'grid',
                            // gridAutoRows: 'minmax(100px, auto)',
                            gridTemplateColumns:
                                'repeat(auto-fit, minmax(100px, 400px))',
                            margin: '0 auto',
                            justifyContent: 'center',
                        }}
                    >
                        {other.map((instance) => (
                            <ListItem
                                key={instance.instanceId}
                                sx={{ display: 'block' }}
                            >
                                <InstanceCard instance={instance} />
                            </ListItem>
                        ))}
                    </List>
                </Fragment>
            ) : loading ? (
                <LoadingIndicator />
            ) : (
                <Typography>No instances found</Typography>
            )}
            {/* </ResponsiveContainer> */}
        </Box>
    );
};

export default Home;
