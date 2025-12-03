import type { FC } from 'react';

import { Typography } from '@mui/material';

import type { IProps } from './SimPCF.types';

import ResponsiveContainer from '../../hocs/ResponsiveContainer';

const SimPCF: FC<IProps> = () => {
    return (
        <ResponsiveContainer>
            <Typography>Simulate PCF Events</Typography>
        </ResponsiveContainer>
    );
};

export default SimPCF;
