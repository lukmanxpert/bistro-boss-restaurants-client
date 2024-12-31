import MainLayout from "../layouts/MainLayout";

import { createBrowserRouter, Navigate } from "react-router-dom";
import Home from "../pages/home/home/home";

export const router = createBrowserRouter([
    {
        path: "/",
        element: <MainLayout></MainLayout>,
        children: [
            {
                path: "/",
                element: <Navigate to='/home'></Navigate>
            },
            {
                path: "/home",
                element: <Home></Home>
            }
        ]
    }
]);