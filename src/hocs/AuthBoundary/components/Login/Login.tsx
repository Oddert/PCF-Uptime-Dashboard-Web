import { type FC, type FormEvent, Fragment } from 'react';

import {
    Box,
    Button,
    DialogContent,
    DialogTitle,
    TextField,
    Typography,
} from '@mui/material';

import type { IProps } from './Login.types';
import type { LoginFormContent } from '../../AuthBoundary.types';

import { useAppDispatch } from '../../../../hooks/ReduxHookWrappers';
import { loginUser } from '../../../../redux/thunks/authThunks';

const Login: FC<IProps> = ({ setIsSignup }) => {
    const dispatch = useAppDispatch();

    const handleSubmit = (event: FormEvent<LoginFormContent>) => {
        event.preventDefault();
        dispatch(
            loginUser(
                event.currentTarget.username.value as string,
                event.currentTarget.password.value as string,
            ),
        );
    };

    return (
        <Fragment>
            <DialogTitle textAlign='center'>Please login</DialogTitle>
            <DialogContent>
                <form onSubmit={handleSubmit}>
                    <Box
                        sx={{
                            display: 'flex',
                            flexDirection: 'column',
                            gridGap: '16px',
                            mt: 2,
                        }}
                    >
                        <TextField fullWidth label='RACF ID' name='username' />
                        <TextField
                            fullWidth
                            label='Password'
                            name='password'
                            type='password'
                        />
                        <Button type='submit' variant='contained'>
                            Login
                        </Button>
                    </Box>
                </form>
                <Typography textAlign='center' sx={{ mt: 3 }}>
                    Need an account?{' '}
                    <Button
                        onClick={() => {
                            setIsSignup(true);
                        }}
                    >
                        Sign up
                    </Button>
                </Typography>
            </DialogContent>
        </Fragment>
    );
};

export default Login;
