import type { AppDispatch } from '../constants/store';

import WatchlistService from '../../services/watchlist.service';
import { instancesError } from '../slices/instanceSlice';
import {
    watchlistsLoading,
    writeAllWatchlists,
} from '../slices/watchlistSlice';

import { intakeError } from './errorThunks';

/**
 * Performs a full load for all user's Watchlist instances.
 * @category Redux
 * @subcategory Thunks
 */
export const fetchAllWatchlists = () => async (dispatch: AppDispatch) => {
    try {
        dispatch(watchlistsLoading());
        const response = await WatchlistService.allWatchlists();
        if (response.status === 200) {
            dispatch(
                writeAllWatchlists({
                    watchlists: response.watchlists,
                }),
            );
        }
    } catch (error) {
        dispatch(instancesError());
        dispatch(intakeError(error));
    }
};
