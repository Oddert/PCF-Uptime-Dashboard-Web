export interface IInstance {
    contactInfo: string;
    createdAt: number;
    instanceId: string;
    message: string;
    pcfAppName: string;
    pcfCpu: number;
    pcfInstancesTotal: number;
    pcfGuid: string;
    pcfOrganisationId: string;
    pcfRam: number;
    pcfSpaceId: string;
    readableName: string;
    status: string;
    tickOverride: number;
    updatedAt: number;
}

// eslint-disable-next-line @typescript-eslint/consistent-indexed-object-style
export interface IInstanceExtended extends IInstance {
    [key: string]: number | string | null | undefined;
}
