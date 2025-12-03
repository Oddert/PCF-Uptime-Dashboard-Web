/* eslint-disable @typescript-eslint/no-unsafe-member-access */
import { type FC, type FormEvent, Fragment, useState } from 'react';

import {
    Autocomplete,
    Box,
    Button,
    DialogContent,
    DialogTitle,
    TextField,
    Typography,
} from '@mui/material';

import type { IProps } from './Signup.types';
import type { LoginFormContent } from '../../AuthBoundary.types';

import { roles } from '../../../../constants/appConstants';
import { useAppDispatch } from '../../../../hooks/ReduxHookWrappers';
import { registerUser } from '../../../../redux/thunks/authThunks';

const Signup: FC<IProps> = ({ setIsSignup }) => {
    const [chosenRoles, setChosenRoles] = useState<
        { id: string; readableName: string }[]
    >([]);

    const dispatch = useAppDispatch();

    const handleSubmit = (event: FormEvent<LoginFormContent>) => {
        event.preventDefault();
        dispatch(
            registerUser(
                event.currentTarget.username.value as string,
                event.currentTarget.password.value as string,
                chosenRoles.map((role) => role.id),
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
                        <Autocomplete
                            getOptionLabel={(opt) => opt.readableName}
                            getOptionKey={(opt) => opt.id}
                            multiple
                            onChange={(_e, value) => {
                                setChosenRoles(value);
                            }}
                            options={roles}
                            renderInput={(props) => <TextField {...props} />}
                            value={chosenRoles}
                        />
                        <Button name='roles' type='submit' variant='contained'>
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
