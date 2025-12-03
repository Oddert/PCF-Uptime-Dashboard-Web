import { createBrowserRouter } from 'react-router-dom';

import {
    // AutoAwesomeMotion as IconManageBudget,
    // CandlestickChart as IconBudgetOverview,
    // Category as IconCategory,
    // DonutSmall as IconBudgetBreakdown,
    // Logout as IconLogout,
    // Payments as IconManageCards,
    // Person as IconUser,
    // Receipt as IconTransaction,
    // // ManageAccounts as IconProfile,
    // //  Tune as IconManageBudget,
    // //  DeveloperBoard as IconScenarioEdit,
    // ReceiptLong as IconTransactions,
    // Settings as IconProfile,
    // StackedBarChart as IconBudget,
    // WaterfallChart as IconAllData,
    Home as IconHome,
} from '@mui/icons-material';
import type { SvgIconTypeMap } from '@mui/material';
import type { OverridableComponent } from '@mui/material/OverridableComponent';

import Layout from '../components/Layout';
// import AllData from '../pages/AllData';
// import BudgetBreakdown from '../pages/BudgetBreakdown';
// import BudgetOverview from '../pages/BudgetOverview';
// import Categories from '../pages/Categories/';
// import EditBudget from '../pages/EditBudget';
// import EditCard from '../pages/EditCard';
// import EditScenario from '../pages/EditScenario';
import Home from '../pages/Home';
import SimPCF from '../pages/SimPCF';
// import Login from '../pages/Login';
// import ManageBudgets from '../pages/ManageBudgets';
// import ManageCards from '../pages/ManageCards';
// import ManageScenarios from '../pages/ManageScenarios';
// import Profile from '../pages/Profile';
// import Appearance from '../pages/Profile/Tabs/Appearance';
// import Language from '../pages/Profile/Tabs/Language';
// import Security from '../pages/Profile/Tabs/Security';
// import Transactions from '../pages/Transactions/';

export interface INavigationOption {
    label: string;
    Icon: OverridableComponent<SvgIconTypeMap> & {
        muiName: string;
    };
    location: string;
    children?: INavigationOption[];
    defaultExpanded?: boolean;
}

export interface INavigation {
    top: INavigationOption[];
    bottom: INavigationOption[];
}

/**
 * Enum object to hold all route paths.
 * @constant
 * @category Constants
 * @subcategory Router
 */
export const ROUTES = Object.freeze({
    HOME: '/',
    SIM_PCF: '/simulate',
    // ALL_DATA: '/all-data',
    // BUDGET_BREAKDOWN: '/budget-breakdown',
    // BUDGET_OVERVIEW: '/budget-overview',
    // CATEGORIES: '/categories',
    // CREATE_BUDGET: '/create-budget',
    // CREATE_CARD: '/create-card',
    // CREATE_SCENARIO: '/create-scenario',
    // EDIT_BUDGET: '/edit-budget',
    // EDIT_CARD: '/edit-card',
    // EDIT_SCENARIO: '/edit-scenario',
    // LOGIN: '/login',
    // LOGOUT: '/login?logout=1',
    // MANAGE_BUDGETS: '/manage-budgets',
    // MANAGE_CARDS: '/cards',
    // MANAGE_SCENARIOS: '/scenarios',
    // PROFILE: '/user-settings',
    // TRANSACTIONS: '/transactions',
});

/**
 * Provides constructor functions for APIService which require optional elements to their paths.
 *
 * NOTE: Does not include all paths, only those with optional parameters.
 * @constant
 * @category Constants
 * @subcategory Router
 */
export const ROUTES_FACTORY = Object.freeze({
    // CREATE_BUDGET: (templateId: string | number) =>
    //     `${ROUTES.CREATE_BUDGET}?templateId=${templateId}`,
    // CREATE_SCENARIO: (templateId: string | number) =>
    //     `${ROUTES.CREATE_SCENARIO}?templateId=${templateId}`,
    // EDIT_BUDGET: (budgetId: string | number) =>
    //     `${ROUTES.EDIT_BUDGET}/${budgetId}`,
    // EDIT_CARD: (cardId: string | number) => `${ROUTES.EDIT_CARD}/${cardId}`,
    // EDIT_SCENARIO: (scenarioId: string | number) =>
    //     `${ROUTES.EDIT_SCENARIO}/${scenarioId}`,
    // LOGIN: (returnAddr?: string) => `${ROUTES.LOGIN}?redirect=${returnAddr}`,
});

// export const GO = Object.freeze({
//     HOME: () => push(ROUTES.HOME)
// })

/**
 * React router config.
 * @constant
 * @category Constants
 * @subcategory Router
 */
const router = createBrowserRouter([
    {
        path: ROUTES.HOME,
        element: (
            <Layout>
                <Home />
            </Layout>
        ),
    },
    {
        path: ROUTES.SIM_PCF,
        element: (
            <Layout>
                <SimPCF />
            </Layout>
        ),
    },
]);

/**
 * Schema for the main navbar.
 * @constant
 * @category Constants
 * @subcategory Router
 */
export const navigation: INavigation = {
    top: [
        {
            label: 'Home',
            Icon: IconHome,
            location: ROUTES.HOME,
        },
        {
            label: 'Simulate PCF',
            Icon: IconHome,
            location: ROUTES.SIM_PCF,
        },
        //     {
        //         label: 'Transactions',
        //         Icon: IconTransaction,
        //         location: '',
        //         children: [
        //             {
        //                 label: 'Upload & View',
        //                 Icon: IconTransactions,
        //                 location: ROUTES.TRANSACTIONS,
        //             },
        //             {
        //                 label: 'Categories',
        //                 Icon: IconCategory,
        //                 location: ROUTES.CATEGORIES,
        //             },
        //         ],
        //     },
        //     {
        //         label: 'Budget',
        //         Icon: IconBudget,
        //         location: '',
        //         children: [
        //             {
        //                 label: 'Budget Breakdown',
        //                 Icon: IconBudgetBreakdown,
        //                 location: ROUTES.BUDGET_BREAKDOWN,
        //             },
        //             {
        //                 label: 'Budget Overview',
        //                 Icon: IconBudgetOverview,
        //                 location: ROUTES.BUDGET_OVERVIEW,
        //             },
        //             {
        //                 label: 'My Budgets',
        //                 Icon: IconManageBudget,
        //                 location: ROUTES.MANAGE_BUDGETS,
        //             },
        //             {
        //                 label: 'Manage Scenarios',
        //                 Icon: IconManageBudget,
        //                 location: ROUTES.MANAGE_SCENARIOS,
        //             },
        //         ],
        //     },
    ],
    bottom: [
        //     {
        //         label: 'Profile',
        //         Icon: IconUser,
        //         location: '',
        //         defaultExpanded: true,
        //         children: [
        //             {
        //                 label: 'My Cards',
        //                 Icon: IconManageCards,
        //                 location: ROUTES.MANAGE_CARDS,
        //             },
        //             {
        //                 label: 'Settings',
        //                 Icon: IconProfile,
        //                 location: ROUTES.PROFILE,
        //             },
        //             {
        //                 label: 'Logout',
        //                 Icon: IconLogout,
        //                 location: ROUTES.LOGOUT,
        //             },
        //         ],
        //     },
    ],
};

export default router;
