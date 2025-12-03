import { Box, List, ListItem, Typography } from '@mui/material';

import InstanceCard from '../../components/InstanceCard';
import { useAppSelector } from '../../hooks/ReduxHookWrappers';
import { getUserFirstName } from '../../redux/selectors/authSelectors';
import { listAllInstances } from '../../redux/selectors/instanceSelectors';

// import './Home.css';
// import ResponsiveContainer from '../../hocs/ResponsiveContainer';

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

    return (
        //  <ResponsiveContainer>
        <Box
            sx={{
                height: '200vh',
                gridGap: '20px',
                //  border: '1px dashed tomato',
                width: '90vw',
                mx: 'auto',
                // gridAutoRows: '400px',
            }}
        >
            <Typography
                sx={{ gridColumn: '1/-1', textAlign: 'left', mb: 4 }}
                variant='h2'
            >
                Welcome {firstName ?? 'whoever you are'}
            </Typography>
            {instances.length ? (
                <List
                    sx={{
                        width: '100%',
                        // border: '1px dashed steelblue',
                        display: 'grid',
                        // gridAutoRows: 'minmax(100px, auto)',
                        gridTemplateColumns:
                            'repeat(auto-fit, minmax(100px, 450px))',
                    }}
                >
                    {instances.map((instance) => (
                        <ListItem
                            key={instance.instanceId}
                            sx={{ display: 'block' }}
                        >
                            <InstanceCard instance={instance} />
                        </ListItem>
                    ))}
                </List>
            ) : (
                <Typography>No instances found</Typography>
            )}
            {/* </ResponsiveContainer> */}
        </Box>
    );
};

export default Home;
