import type { IInstance } from '../types/Instance.types';
import type { IStandardResponse } from '../types/Request.types';

import request from '../common/request';

/**
 * Primary interface for interacting with the Instances API.
 *
 * Contains a list of functions for calling endpoints.
 * @category Services
 * @subcategory API Service
 */
const InstanceService = Object.freeze({
    /**
     * Queries all the user's watched instances.
     * @returns The access and refresh tokens or a failed login attempt.
     */
    allInstances: async () => {
        const response: IStandardResponse & {
            instances: IInstance[];
        } = await request.get('/instances');
        return response;
    },
});

export default InstanceService;
