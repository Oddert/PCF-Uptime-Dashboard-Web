import type { FC } from 'react';

import { Paper, type Theme, Tooltip, Typography } from '@mui/material';

import type { IProps } from './InstanceCard.types';
import type { IInstance } from '../../types/Instance.types';

import { displayTimeFrom } from '../../utils/timeUtils';

const getRag = (theme: Theme, status: IInstance['status']) => {
    switch (status) {
        case 'RUNNING':
            return theme.palette.success.main;
        default:
            return 'transparent';
    }
};

const InstanceCard: FC<IProps> = ({ instance }) => {
    return (
        <Paper
            sx={(theme) => ({
                px: 4,
                py: 1,
                borderLeft: '5px solid transparent',
                borderLeftColor: getRag(theme, instance.status),
            })}
        >
            <Typography variant='subtitle1'>{instance.readableName}</Typography>
            {instance.readableName !== instance.pcfAppName ? (
                <Typography variant='subtitle2'>
                    {instance.pcfAppName}
                </Typography>
            ) : null}
            <Typography variant='subtitle2'>{instance.status}</Typography>
            <Typography variant='body2'>
                Last change:{' '}
                {new Date(instance.updatedAt * 1000).toLocaleString('en-GB')}
            </Typography>
            {instance.received ? (
                <Tooltip
                    title={new Date(instance.received).toLocaleString('en-GB')}
                >
                    <Typography variant='body2'>
                        Updated: {displayTimeFrom(instance.received)}
                    </Typography>
                </Tooltip>
            ) : null}
        </Paper>
    );
};

export default InstanceCard;
