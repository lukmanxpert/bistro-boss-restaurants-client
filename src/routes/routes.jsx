
import { createBrowserRouter, Navigate } from "react-router-dom";
import MainLayout from "../layouts/MainLayout";
import Home from "../pages/home/home/home";
import OurMenu from "../pages/our-menu/OurMenu";

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
            },
            {
                path: "/our-menu",
                element: <OurMenu></OurMenu>
            }
        ]
    }
]);