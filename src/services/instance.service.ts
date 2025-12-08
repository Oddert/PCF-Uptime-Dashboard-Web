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
        } = await request.get('/instance');
        return response;
    },

    /**
     * Requests an individual instance by PCF GUID.
     * @param pcfGuid The PCF ID being requested.
     * @returns The instance.
     */
    instanceByPcfGuid: async (pcfGuid: string) => {
        const response: IStandardResponse & {
            instance: IInstance;
        } = await request.get(`/instance/pcf-id/${pcfGuid}`);
        return response;
    },

    /**
     * Gets a mapping of all PCF organisation IDs to readable names.
     * @returns
     */
    orgMapping: async () => {
        const response: IStandardResponse & {
            orgNames: Record<string, string>;
        } = await request.get('/instance/org-names');
        return response;
    },
});

export default InstanceService;
