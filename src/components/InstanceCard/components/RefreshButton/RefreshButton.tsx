import { type FC, useState } from 'react';

import { Refresh as IconRefresh } from '@mui/icons-material';
import { CircularProgress, IconButton } from '@mui/material';

import type { IProps } from './RefreshButton.types';

import { useAppDispatch } from '../../../../hooks/ReduxHookWrappers';
import { updateInstance } from '../../../../redux/slices/instanceSlice';
import { intakeError } from '../../../../redux/thunks/errorThunks';
import InstanceService from '../../../../services/instance.service';

const RefreshButton: FC<IProps> = ({ pcfGuid }) => {
    const [loading, setLoading] = useState(false);

    const dispatch = useAppDispatch();

    const handleClick = () => {
        setLoading(true);
        try {
            const request = async () => {
                const response =
                    await InstanceService.instanceByPcfGuid(pcfGuid);
                dispatch(updateInstance({ instance: response.instance }));
                setLoading(false);
            };
            request();
        } catch (error) {
            dispatch(intakeError(error));
        }
        console.log(pcfGuid);
    };
    return (
        <IconButton onClick={handleClick} title='Refresh'>
            {loading ? <CircularProgress size={'small'} /> : <IconRefresh />}
        </IconButton>
    );
};

export default RefreshButton;
