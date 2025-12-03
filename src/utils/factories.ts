import type { IInstance } from '../types/Instance.types';

export const createInstance = (instance?: Partial<IInstance>): IInstance => ({
    contactInfo: '',
    createdAt: 0,
    instanceId: '',
    message: '',
    pcfAppName: '',
    pcfCpu: 0,
    pcfInstancesTotal: 0,
    pcfGuid: '',
    pcfOrganisationId: '',
    pcfRam: 0,
    pcfSpaceId: '',
    readableName: '',
    received: Date.now(),
    status: '',
    tickOverride: 0,
    updatedAt: 0,
    ...instance,
});
