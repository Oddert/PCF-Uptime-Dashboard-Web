import { type PayloadAction, createSlice } from '@reduxjs/toolkit';

import type { ICollection } from '../../types/Collection.type';
import type { IInstance } from '../../types/Instance.types';

/**
 * Redux state key for 'instance'
 * @category Redux
 * @subcategory Budget Slice
 */
export interface IInstanceState {
    collections: ICollection[];
    error: boolean;
    instances: IInstance[];
    loaded: boolean;
    loading: boolean;
    timestamp: number;
}

const initialState: IInstanceState = {
    collections: [],
    error: false,
    instances: [],
    loaded: false,
    loading: false,
    timestamp: 0,
};

export const instanceSlice = createSlice({
    name: 'instance',
    initialState,
    reducers: {
        instancesError(state) {
            state.loading = false;
            state.error = true;
        },
        instancesLoading(state) {
            state.loaded = false;
            state.loading = true;
            state.error = false;
        },
        writeAllInstances(
            state,
            {
                payload,
            }: PayloadAction<{
                instances: IInstance[];
                collections: ICollection[];
            }>,
        ) {
            state.collections = payload.collections;
            state.instances = payload.instances;
            state.loaded = true;
            state.loading = false;
            state.error = false;
            state.timestamp = Date.now();
        },
    },
});

export const { instancesError, instancesLoading, writeAllInstances } =
    instanceSlice.actions;

export default instanceSlice.reducer;
