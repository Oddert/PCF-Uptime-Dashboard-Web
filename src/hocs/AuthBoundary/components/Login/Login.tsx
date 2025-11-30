import { Fragment, type FC, type FormEvent } from 'react';

import type { IProps } from './Login.types';
import { Box, Button, DialogContent, DialogTitle, TextField, Typography } from '@mui/material';
import { useAppDispatch } from '../../../../hooks/ReduxHookWrappers';
import { loginUser } from '../../../../redux/thunks/authThunks';
import type { LoginFormContent } from '../../AuthBoundary.types';


const Login: FC<IProps> = ({ setIsSignup}) => {
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
                <Typography textAlign='center' sx={{mt: 3}}>
                    Need an account? <Button onClick={() => setIsSignup(true)}>Sign up</Button>
                </Typography>
            </DialogContent>
    </Fragment>
    );
};

export default Login;
