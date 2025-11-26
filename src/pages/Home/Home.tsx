import { Fragment, useState } from 'react';

import { Container, Typography } from '@mui/material';

import { useAppSelector } from '../../hooks/ReduxHookWrappers';
import { getUserFirstName } from '../../redux/selectors/authSelectors';

import reactLogo from './assets/react.svg';
import viteLogo from '/vite.svg';

/**
 * Main home page component.
 *
 * Displays a series of Modules as composable cards.
 * @component
 * @category Pages
 * @subcategory Home
 */
const Home = () => {
    const [count, setCount] = useState(0);
    const firstName = useAppSelector(getUserFirstName);
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
                Welcome {firstName}
            </Typography>
            <Fragment>
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
            </Fragment>
        </Container>
    );
};

export default Home;
