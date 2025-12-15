import { type PayloadAction, createSlice } from '@reduxjs/toolkit';

import type { ICollection } from '../../types/Collection.type';
import type {
    IInstance,
    IInstanceAttributes,
} from '../../types/Instance.types';

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
    orgNames: Record<string, string>;
    timestamp: number;
}

const initialState: IInstanceState = {
    collections: [],
    error: false,
    instances: [],
    loaded: false,
    loading: false,
    orgNames: {},
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
        updateInstance(
            state,
            { payload }: PayloadAction<{ instance: IInstance }>,
        ) {
            state.instances = state.instances.map((instance) => {
                if (instance.pcfGuid === payload.instance.pcfGuid) {
                    return { ...payload.instance, received: Date.now() };
                }
                return instance;
            });
        },
        updateMultipleInstances(
            state,
            { payload }: PayloadAction<{ instances: IInstance[] }>,
        ) {
            const instancesById = payload.instances.reduce(
                (acc: Record<string, IInstance>, instance) => {
                    acc[instance.instanceId] = {
                        ...instance,
                        received: Date.now(),
                    };
                    return acc;
                },
                {},
            );

            state.instances = state.instances.map((instance) => {
                if (instance.instanceId in instancesById) {
                    return instancesById[instance.instanceId];
                }
                return instance;
            });
        },
        updateUserOverrides(
            state,
            { payload }: PayloadAction<{ userOverrides: IInstanceAttributes }>,
        ) {
            state.instances = state.instances.map((instance) => {
                if (instance.pcfGuid === payload.userOverrides.pcfGuid) {
                    return {
                        ...instance,
                        userOverrides: payload.userOverrides,
                    };
                }
                return instance;
            });
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
            state.instances = payload.instances.map((instance) => ({
                ...instance,
                received: Date.now(),
            }));
            state.loaded = true;
            state.loading = false;
            state.error = false;
            state.timestamp = Date.now();
        },
        writeOrgIds(
            state,
            {
                payload,
            }: PayloadAction<{ orgNames: IInstanceState['orgNames'] }>,
        ) {
            state.orgNames = payload.orgNames;
        },
    },
});

export const {
    instancesError,
    instancesLoading,
    updateInstance,
    updateMultipleInstances,
    updateUserOverrides,
    writeAllInstances,
    writeOrgIds,
} = instanceSlice.actions;

export default instanceSlice.reducer;
