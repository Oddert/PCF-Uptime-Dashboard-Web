/* eslint-disable @typescript-eslint/no-unsafe-member-access */
import type { FC, FormEvent } from 'react';

import {
    Box,
    Button,
    Dialog,
    DialogContent,
    DialogTitle,
    TextField,
} from '@mui/material';

import type { IProps } from './AuthBoundary.types';

import { useAppDispatch, useAppSelector } from '../../hooks/ReduxHookWrappers';
import { getIsAuthenticated } from '../../redux/selectors/authSelectors';
import { loginUser } from '../../redux/thunks/authThunks';

interface FormElements extends HTMLFormControlsCollection {
    username: HTMLInputElement;
    password: HTMLInputElement;
}

interface LoginFormContent extends HTMLFormElement {
    readonly elements: FormElements;
}

const AuthBoundary: FC<IProps> = ({ children }) => {
    const dispatch = useAppDispatch();
    const userAuthenticated = useAppSelector(getIsAuthenticated);
    const handleSubmit = (event: FormEvent<LoginFormContent>) => {
        event.preventDefault();
        dispatch(
            loginUser(
                event.currentTarget.username.value as string,
                event.currentTarget.password.value as string,
            ),
        );
    };
    if (userAuthenticated) {
        return children;
    }
    return (
        <Dialog open={true}>
            <DialogTitle>Please login</DialogTitle>
            <DialogContent>
                <form onSubmit={handleSubmit}>
                    <Box sx={{ display: 'flex', flexDirection: 'column' }}>
                        <TextField label='RACF ID' name='username' />
                        <TextField
                            label='Password'
                            name='password'
                            type='password'
                        />
                        <Button type='submit' variant='contained'>
                            Login
                        </Button>
                    </Box>
                </form>
            </DialogContent>
        </Dialog>
    );
};

export default AuthBoundary;
