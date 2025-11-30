import { type FC, type FormEvent, Fragment } from 'react';

import {
    Box,
    Button,
    DialogContent,
    DialogTitle,
    TextField,
    Typography,
} from '@mui/material';

import type { IProps } from './Signup.types';
import type { LoginFormContent } from '../../AuthBoundary.types';

import { useAppDispatch } from '../../../../hooks/ReduxHookWrappers';
import { registerUser } from '../../../../redux/thunks/authThunks';

const Signup: FC<IProps> = ({ setIsSignup }) => {
    const dispatch = useAppDispatch();

    const handleSubmit = (event: FormEvent<LoginFormContent>) => {
        event.preventDefault();
        dispatch(
            registerUser(
                event.currentTarget.username.value as string,
                event.currentTarget.password.value as string,
            ),
        );
    };

    return (
        <Fragment>
            <DialogTitle textAlign='center'>Register an account</DialogTitle>
            <DialogContent>
                <form onSubmit={handleSubmit}>
                    <Box
                        sx={{
                            display: 'flex',
                            flexDirection: 'column',
                            gridGap: '16px',
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
                            Signup
                        </Button>
                    </Box>
                </form>
                <Typography textAlign='center' sx={{ mt: 3 }}>
                    Already a user?{' '}
                    <Button
                        onClick={() => {
                            setIsSignup(false);
                        }}
                    >
                        Log in
                    </Button>
                </Typography>
            </DialogContent>
        </Fragment>
    );
};

export default Signup;
