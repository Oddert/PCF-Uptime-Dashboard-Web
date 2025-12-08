import { type PayloadAction, createSlice } from '@reduxjs/toolkit';

import type { IWatchlist } from '../../types/Watchlist.types';

/**
 * Redux state key for 'watchlist'
 * @category Redux
 * @subcategory Budget Slice
 */
export interface IWatchlistState {
    defaultWatchlist: IWatchlist | null;
    error: boolean;
    loaded: boolean;
    loading: boolean;
    timestamp: number;
    watchlists: IWatchlist[];
}

const initialState: IWatchlistState = {
    defaultWatchlist: null,
    error: false,
    loaded: false,
    loading: false,
    timestamp: 0,
    watchlists: [],
};

export const watchlistSlice = createSlice({
    name: 'watchlist',
    initialState,
    reducers: {
        updateWatchlist(
            state,
            { payload }: PayloadAction<{ watchlist: IWatchlist }>,
        ) {
            state.watchlists = state.watchlists.map((watchlist) => {
                if (watchlist.watchlistId === payload.watchlist.watchlistId) {
                    return payload.watchlist;
                }
                return watchlist;
            });
            if (payload.watchlist.isDefault) {
                state.defaultWatchlist = payload.watchlist;
            }
        },
        watchlistsError(state) {
            state.loading = false;
            state.error = true;
        },
        watchlistsLoading(state) {
            state.loaded = false;
            state.loading = true;
            state.error = false;
        },
        writeAllWatchlists(
            state,
            { payload }: PayloadAction<{ watchlists: IWatchlist[] }>,
        ) {
            state.loaded = true;
            state.loading = false;
            state.error = false;
            state.timestamp = Date.now();
            state.watchlists = payload.watchlists;
            state.defaultWatchlist =
                payload.watchlists.find((watchlist) => watchlist.isDefault) ??
                null;
        },
    },
});

export const {
    updateWatchlist,
    watchlistsError,
    watchlistsLoading,
    writeAllWatchlists,
} = watchlistSlice.actions;

export default watchlistSlice.reducer;
