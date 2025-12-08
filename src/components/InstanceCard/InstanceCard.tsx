import { type FC, Fragment, useEffect, useMemo, useRef, useState } from 'react';

import {
    Box,
    Button,
    type ButtonProps,
    Chip,
    Paper,
    type Theme,
    Tooltip,
    Typography,
    useTheme,
} from '@mui/material';

import type { IProps } from './InstanceCard.types';
import type { IInstance } from '../../types/Instance.types';

import { useAppSelector } from '../../hooks/ReduxHookWrappers';
import { orgNames } from '../../redux/selectors/instanceSelectors';
import { displayTimeFrom } from '../../utils/timeUtils';

import RefreshButton from './components/RefreshButton';

const getRag = (theme: Theme, status: IInstance['status']) => {
    switch (status) {
        case 'RUNNING':
            return theme.palette.success.main;
        case 'STARTING':
            return theme.palette.warning.main;
        case 'DOWN':
            return theme.palette.error.main;
        case 'STOPPED':
            return theme.palette.info.main;
        default:
            return 'transparent';
    }
};

const getRagColourCode = (
    status: IInstance['status'],
): ButtonProps['color'] => {
    switch (status) {
        case 'RUNNING':
            return 'success';
        case 'STARTING':
            return 'warning';
        case 'DOWN':
            return 'error';
        case 'STOPPED':
            return 'info';
        default:
            return 'primary';
    }
};

const InstanceCard: FC<IProps> = ({ instance }) => {
    const [lastChange, setLastChange] = useState('');
    const [lastUpdate, setLastUpdate] = useState('');

    const organisationNames = useAppSelector(orgNames);

    const ref = useRef(0);

    const theme = useTheme();

    const orgName = useMemo(
        () =>
            instance.pcfOrganisationId in organisationNames ? (
                <Chip
                    label={organisationNames[instance.pcfOrganisationId]}
                    size='small'
                />
            ) : null,
        [instance.pcfOrganisationId, organisationNames],
    );

    useEffect(() => {
        setLastChange(
            `Last event: ${displayTimeFrom(instance.updatedAt * 1000)}`,
        );
        if (instance.received) {
            setLastUpdate(displayTimeFrom(instance.received));
        }
        ref.current = setInterval(() => {
            setLastChange(
                `Last event: ${displayTimeFrom(instance.updatedAt * 1000)}`,
            );
            if (instance.received) {
                setLastUpdate(displayTimeFrom(instance.received));
            }
        }, 15 * 1000);
        return () => {
            clearInterval(ref.current);
        };
    }, [instance.updatedAt, instance.received]);

    return (
        <Paper
            sx={{
                px: 3,
                py: 1,
                borderLeft: '5px solid transparent',
                borderLeftColor: getRag(theme, instance.status),
                display: 'grid',
                gridGap: '8px',
                gridTemplateColumns: 'auto auto auto',
                alignItems: 'start',
                height: '100%',
            }}
        >
            <Box sx={{ gridColumn: '1 / -2' }}>
                <Button
                    color={getRagColourCode(instance.status)}
                    sx={{ mt: '8px' }}
                    size='small'
                    variant='outlined'
                >
                    {instance.status}
                </Button>
            </Box>
            {instance.received ? (
                <Box
                    sx={{
                        gridColumn: 3,
                        display: 'grid',
                        gridTemplateColumns: 'auto 40px',
                        gridTemplateRows: '40px',
                        alignItems: 'center',
                        justifyContent: 'end',
                    }}
                >
                    <Tooltip
                        title={new Date(instance.received).toLocaleString(
                            'en-GB',
                        )}
                    >
                        <Typography sx={{ fontSize: '10px' }} variant='body2'>
                            {lastUpdate}
                        </Typography>
                    </Tooltip>
                    <RefreshButton pcfGuid={instance.pcfGuid} />
                </Box>
            ) : null}
            <Box sx={{ gridColumn: '1 / -1' }}>
                {instance.readableName !== instance.pcfAppName ? (
                    <Fragment>
                        <Box
                            sx={{
                                display: 'flex',
                                alignItems: 'center',
                                justifyContent: 'space-between',
                                gridGap: '4px',
                            }}
                        >
                            <Typography variant='subtitle1'>
                                {instance.readableName}
                            </Typography>
                            {orgName}
                        </Box>
                        <Typography variant='subtitle2'>
                            {instance.pcfAppName}
                        </Typography>
                    </Fragment>
                ) : (
                    <Box
                        sx={{
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'space-between',
                        }}
                    >
                        <Typography variant='subtitle1'>
                            {instance.readableName}
                        </Typography>
                        {orgName}
                    </Box>
                )}
            </Box>
            <Typography
                sx={{ gridColumn: '2 / -1', gridRow: 3, textAlign: 'right' }}
                variant='body2'
            >
                {lastChange}
            </Typography>
        </Paper>
    );
};

export default InstanceCard;
