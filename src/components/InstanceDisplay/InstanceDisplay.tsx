import { type FC, Fragment, useMemo } from 'react';

import { Divider, Typography } from '@mui/material';

import type { IProps } from './InstanceDisplay.types';
import type { ISortedInstances } from '../../types/Instance.types';

import InstanceGrid from '../InstanceGrid';
import LoadingIndicator from '../LoadingIndicator';

/**
 * Full display component for a list of instances.
 *
 * Must be supplied with instances & loading state as it is assumed some pre-processing might be required.
 * @component
 * @param props.instances List of instances to display.
 * @param props.loading True if the list of instances is loading.
 */
const InstanceDisplay: FC<IProps> = ({ instances, loading = false }) => {
    const { highlighted, other }: ISortedInstances = useMemo(() => {
        return instances.reduce(
            (acc: ISortedInstances, each) => {
                if (each.status === 'RUNNING') {
                    acc.other.push(each);
                } else {
                    acc.highlighted.push(each);
                }
                return acc;
            },
            { highlighted: [], other: [] },
        );
    }, [instances]);

    if (instances.length) {
        return (
            <Fragment>
                <Typography variant='h3'>Highlighted</Typography>
                <InstanceGrid instances={highlighted} />
                <Divider />
                <Typography variant='h3'>Other</Typography>
                <InstanceGrid instances={other} />
            </Fragment>
        );
    } else if (loading) {
        return <LoadingIndicator />;
    }
    return <Typography>No instances found</Typography>;
};

export default InstanceDisplay;
