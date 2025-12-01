import type { AppDispatch } from '../constants/store';

import { intakeError } from './errorThunks';
import { fetchAllInstances } from './instanceThunks';

/**
 * Performs a series of initial data loads when the app mounts.
 * Can be repeated if necessary, for example after a login.
 * @category Redux
 * @subcategory Thunks
 */
export const initialAppLoad = (dispatch: AppDispatch) => () => {
    try {
        dispatch(fetchAllInstances());
        dispatch({ type: 'socket/connect' });
    } catch (error: unknown) {
        dispatch(intakeError(error));
    }
};
