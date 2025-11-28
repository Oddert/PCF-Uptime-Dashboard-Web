import {
    Box,
    Button,
    Container,
    List,
    ListItem,
    Paper,
    TextField,
    Typography,
    useTheme,
} from '@mui/material';

import { useAppSelector } from '../../hooks/ReduxHookWrappers';
import { getUserFirstName } from '../../redux/selectors/authSelectors';
import { listAllInstances } from '../../redux/selectors/instanceSelectors';

import './Home.css';

/**
 * Main home page component.
 *
 * Displays a series of Modules as composable cards.
 * @component
 * @category Pages
 * @subcategory Home
 */
const Home = () => {
    const firstName = useAppSelector(getUserFirstName);
    const instances = useAppSelector(listAllInstances);
    const theme = useTheme();
    return (
        <Container
            sx={{
                height: '200vh',
                display: 'grid',
                gridTemplateColumns: '1fr 1fr',
                alignContent: 'start',
                alignItems: 'start',
                gridGap: '20px',
                // gridAutoRows: '400px',
            }}
        >
            <Typography
                sx={{ gridColumn: '1/-1', textAlign: 'left' }}
                variant='h2'
            >
                Welcome {firstName ?? 'whoever you are'}
            </Typography>
            {instances.length ? (
                <List>
                    {instances.map((instance) => (
                        <ListItem key={instance.instanceId}>
                            <Paper>
                                <Typography>{instance.readableName}</Typography>
                            </Paper>
                        </ListItem>
                    ))}
                </List>
            ) : (
                <Typography>No instances found</Typography>
            )}
            <TextField />
            <Button variant='contained'>Contained</Button>
            <Button variant='outlined'>Outlined</Button>
            <Button variant='text'>Text</Button>
            <Box>
                <Typography>Red</Typography>
                <Box
                    sx={{
                        w: '200px',
                        h: '200px',
                        background: theme.palette.error.main,
                        color: theme.palette.error.contrastText,
                    }}
                >
                    Main
                </Box>
                <Box
                    sx={{
                        w: '200px',
                        h: '200px',
                        background: theme.palette.error.light,
                    }}
                >
                    Light
                </Box>
                <Box
                    sx={{
                        w: '200px',
                        h: '200px',
                        background: theme.palette.error.dark,
                        color: theme.palette.error.contrastText,
                    }}
                >
                    Dark
                </Box>
            </Box>
            <Box>
                <Typography>Amber</Typography>
                <Box
                    sx={{
                        w: '200px',
                        h: '200px',
                        background: theme.palette.warning.main,
                        color: theme.palette.warning.contrastText,
                    }}
                >
                    Main
                </Box>
                <Box
                    sx={{
                        w: '200px',
                        h: '200px',
                        background: theme.palette.warning.light,
                    }}
                >
                    Light
                </Box>
                <Box
                    sx={{
                        w: '200px',
                        h: '200px',
                        background: theme.palette.warning.dark,
                        color: theme.palette.warning.contrastText,
                    }}
                >
                    Dark
                </Box>
            </Box>
            <Box>
                <Typography>Green</Typography>
                <Box
                    sx={{
                        w: '200px',
                        h: '200px',
                        background: theme.palette.success.main,
                        color: theme.palette.success.contrastText,
                    }}
                >
                    Main
                </Box>
                <Box
                    sx={{
                        w: '200px',
                        h: '200px',
                        background: theme.palette.success.light,
                    }}
                >
                    Light
                </Box>
                <Box
                    sx={{
                        w: '200px',
                        h: '200px',
                        background: theme.palette.success.dark,
                        color: theme.palette.success.contrastText,
                    }}
                >
                    Dark
                </Box>
            </Box>
            {/* <Fragment>
                <div>
                    <a href='https://vite.dev' target='_blank' rel='noreferrer'>
                        <img src={viteLogo} className='logo' alt='Vite logo' />
                    </a>
                    <a
                        href='https://react.dev'
                        target='_blank'
                        rel='noreferrer'
                    >
                        <img
                            src={reactLogo}
                            className='logo react'
                            alt='React logo'
                        />
                    </a>
                </div>
                <h1>Vite + React</h1>
                <div className='card'>
                    <button
                        onClick={() => {
                            setCount((count) => count + 1);
                        }}
                    >
                        count is {count}
                    </button>
                    <p>
                        Edit <code>src/App.tsx</code> and save to test HMR
                    </p>
                </div>
                <p className='read-the-docs'>
                    Click on the Vite and React logos to learn more
                </p>
            </Fragment> */}
        </Container>
    );
};

export default Home;
