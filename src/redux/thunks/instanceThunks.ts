import type { AppDispatch } from '../constants/store';

import InstanceService from '../../services/instance.service';
import {
    instancesError,
    instancesLoading,
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
        dispatch(
            writeAllInstances({
                instances: response.instances,
                collections: [],
            }),
        );
    } catch (error) {
        dispatch(instancesError());
        dispatch(intakeError(error));
    }
};
