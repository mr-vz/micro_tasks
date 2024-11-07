import * as React from "react";
import {
    createBrowserRouter,
    Navigate, RouteObject, Outlet,
} from "react-router-dom";
import App from "../App";
import {Error404} from "../components/pages/Error404";
import {Adidas} from "../components/pages/Adidas";
import {Puma} from "../components/pages/Puma";
import {Abibas} from "../components/pages/Abibas";
import {Prices} from "../components/pages/Prices";
import {Model} from "../components/pages/Model";
import {ProtectedPage} from "../components/pages/ProtectedPage";
import {Login} from "../components/pages/Login";
import {MicroTasks} from "../components/pages/Micro_tasks";

const PATH = {
    ADIDAS: '/adidas',
    PUMA: '/puma',
    ABIBAS: '/abibas',
    PRICES: '/prices',
    PROTECTED: '/protected',
    MODEL: '/:model/:id',
    ERROR: '/error',
    LOGIN: '/login',
    MICRO_TASKS: '/micro_tasks',
    MAIN_PAGE: '/'
} as const

const publicRoutes: RouteObject[] = [
    {
        path: PATH.ADIDAS,
        element: <Adidas />,
    },
    {
        path: PATH.PUMA,
        element: <Puma />,
    },
    {
        path: PATH.ABIBAS,
        element: <Abibas />,
    },
    {
        path: PATH.PRICES,
        element: <Prices />,
    },
    {
        path: PATH.ERROR,
        element: <Error404 />,
    },
    {
        path: PATH.MODEL,
        element: <Model />,
    },
    {
        path: PATH.LOGIN,
        element: <Login />,
    },
    {
        path: PATH.MICRO_TASKS,
        element: <MicroTasks />,
    },
    {
        path: PATH.MAIN_PAGE,
        element: <Adidas />,
    },

]

const privateRoutes: RouteObject[] = [
    {
        path: PATH.PROTECTED,
        element: (
            <ProtectedPage/>
        ),
    },
]

export const PrivateRoutes = () => {
    const isAuth = true
    return (
        <>
            {isAuth ? <Outlet/> : <Navigate to={'/login'}/>}
        </>
    )
};

export const router = createBrowserRouter([
    {
        path: "/",
        element: <App/>,
        errorElement: <Navigate to={PATH.ERROR}/>,
        children: [
            {
                element: <PrivateRoutes/>,
                children: privateRoutes
            },
            ...publicRoutes,
        ]
    },
]);