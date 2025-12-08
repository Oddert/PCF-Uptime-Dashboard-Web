import { type FC, useState } from 'react';

import {
    Add as IconAdd,
    ChevronRight as IconRightArrow,
} from '@mui/icons-material';
import { Box, Button, ListItem, Paper, Typography } from '@mui/material';

import type { IProps } from './Watchlists.types';
import type { TDynamicCardLayoutModes } from '../../types/Common.types';

import DynamicCardList from '../../components/DynamicCardList';
import LayoutControls from '../../components/LayoutControls';
import router, {
    ROUTES,
    ROUTES_FACTORY,
} from '../../constants/routerConstants';
import ResponsiveContainer from '../../hocs/ResponsiveContainer';
import { useAppSelector } from '../../hooks/ReduxHookWrappers';
import { allWatchlists } from '../../redux/selectors/watchlistSelectors';

/**
 * Displays all user Watchlists and allows them to edit.
 * @category Pages
 * @subcategory Watchlists
 * @component
 */
const Watchlists: FC<IProps> = () => {
    const [layout, setLayout] = useState<TDynamicCardLayoutModes>('standard');
    const watchlists = useAppSelector(allWatchlists);
    return (
        <ResponsiveContainer>
            <Typography variant='h2'>Watchlists</Typography>
            <Box
                sx={{
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'flex-end',
                    gridGap: '16px',
                }}
            >
                <Button
                    onClick={() => router.navigate(ROUTES.CREATE_WATCHLIST)}
                    variant='contained'
                >
                    <IconAdd /> Create Watchlist
                </Button>
                <LayoutControls layout={layout} setLayout={setLayout} />
            </Box>
            <DynamicCardList layout={layout}>
                {watchlists.map((watchlist) => (
                    <ListItem key={watchlist.watchlistId}>
                        <Paper
                            component={Button}
                            onClick={() =>
                                router.navigate(
                                    ROUTES_FACTORY.EDIT_WATCHLIST(
                                        watchlist.watchlistId,
                                    ),
                                )
                            }
                            sx={{
                                width: '100%',
                                height: '100%',
                                display: 'flex',
                                p: 2,
                            }}
                        >
                            <Box sx={{ flex: 1 }}>
                                <Typography textAlign={'left'} variant='h3'>
                                    {watchlist.title}
                                </Typography>
                                {watchlist.description ? (
                                    <Typography textAlign={'left'}>
                                        {watchlist.description}
                                    </Typography>
                                ) : null}
                                <Typography textAlign={'left'}>
                                    {watchlist.instances.length} instances
                                </Typography>
                            </Box>
                            <IconRightArrow />
                        </Paper>
                    </ListItem>
                ))}
                <ListItem sx={{ alignSelf: 'stretch' }}>
                    <Button
                        onClick={() => router.navigate(ROUTES.CREATE_WATCHLIST)}
                        sx={{ width: '100%', height: '100%' }}
                        variant='outlined'
                    >
                        <IconAdd /> Add Watchlist
                    </Button>
                </ListItem>
            </DynamicCardList>
        </ResponsiveContainer>
    );
};

export default Watchlists;
