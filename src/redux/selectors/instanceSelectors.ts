import { createSelector } from '@reduxjs/toolkit';

import type { RootState } from '../constants/store';

/**
 * Returns the 'instance' section of the redux state.
 * @category Redux
 * @subcategory Selectors
 */
const getInstanceState = (state: RootState) => state.instance;

/**
 * Returns the list of all the user's instances.
 * @category Redux
 * @subcategory Selectors
 */
export const listAllInstances = createSelector(
    getInstanceState,
    (instanceState) => instanceState.instances,
);
