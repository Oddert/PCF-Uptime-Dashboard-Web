import type { IInstance } from '../../types/Instance.types';
import type { AppDispatch } from '../constants/store';

import InstanceService from '../../services/instance.service';
import { createInstance } from '../../utils/factories';
import {
    instancesError,
    instancesLoading,
    updateInstance,
    writeAllInstances,
} from '../slices/instanceSlice';

import { intakeError } from './errorThunks';

/**
 * Performs a full load for all user's watchlist instances.
 * @category Redux
 * @subcategory Thunks
 */
export const fetchAllInstances = () => async (dispatch: AppDispatch) => {
    try {
        dispatch(instancesLoading());
        const response = await InstanceService.allInstances();
        if (response.status === 200) {
            dispatch(
                writeAllInstances({
                    instances: response.instances,
                    collections: [],
                }),
            );
        }
    } catch (error) {
        dispatch(instancesError());
        dispatch(intakeError(error));
    }
};

/**
 * Updates a single Instance from a JSON serialised WebSocket response.
 * @category Redux
 * @subcategory Thunks
 * @param instanceJson The Instance in JSON string format.
 */
export const updateFromWS =
    (instanceJson: string) => async (dispatch: AppDispatch) => {
        try {
            // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment, @typescript-eslint/no-explicit-any
            const obj: any = JSON.parse(instanceJson);
            const instance: IInstance = { ...createInstance() };
            if (typeof obj === 'object') {
                // eslint-disable-next-line @typescript-eslint/no-unsafe-argument
                const keys = Object.keys(obj);
                for (const key of keys) {
                    if (key in instance) {
                        // @ts-expect-error idk how to resolve this one
                        // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment, @typescript-eslint/no-unsafe-member-access
                        instance[key] = obj[key];
                    }
                }
            }
            dispatch(updateInstance({ instance }));
        } catch (error) {
            dispatch(intakeError(error));
        }
    };
