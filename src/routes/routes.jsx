import { createBrowserRouter } from 'react-router-dom';
import Main from '../layouts/Main';
import Home from '../pages/Home';
import Login from '../pages/Login';
import PrivetRoot from './PrivetRoot';


const routes = createBrowserRouter([
    {
        path: '/',
        element: <Main />,
        children: [
            {
                path: '/',
                element: <PrivetRoot><Home /></PrivetRoot>
            },
        ]
    },
    {
        path: '/login',
        element: <Login />
    },

])

export default routes;
