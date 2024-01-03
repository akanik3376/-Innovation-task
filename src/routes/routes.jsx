import { createBrowserRouter } from 'react-router-dom';
import Main from '../layouts/Main';
import ErrorPage from '../pages/ErrorPage';
import Home from '../pages/Home';
import Login from '../pages/Login';
import Register from '../pages/Register';


const routes = createBrowserRouter([
    {
        path: '/',
        element: <Main />,
        // errorElement: <ErrorPage />,
        children: [
            {
                path: '/',
                element: <Home />
            },
            {
                path: '/about',
                element: <h3>This is about page</h3>
            },

        ]
    },
    {
        path: '/login',
        element: <Login />
    },
    {
        path: '/register',
        element: <Register />
    }
])

export default routes;
