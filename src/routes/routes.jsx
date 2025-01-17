
import { createBrowserRouter, Navigate } from "react-router-dom";
import MainLayout from "../layouts/MainLayout";
import Home from "../pages/home/home/home";
import OurMenu from "../pages/our-menu/OurMenu";
import OurShop from "../pages/our-shop/OurShop";
import Login from "../pages/Auth/login/Login";
import Register from "../pages/Auth/register/Register"
import Dashboard from "../pages/dashboard/dashboard/Dashboard";
import PrivateRoute from "../provider/PrivateRoute";
import UserHome from "../pages/dashboard/Home/UserHome";
import MyCarts from "../pages/dashboard/my-carts/MyCarts";
import useAdmin from "../hooks/useAdmin";
import AdminHome from "../pages/dashboard/admin-home/AdminHome";
import AllUsers from "../pages/dashboard/all-users/AllUsers";

const { isAdmin } = useAdmin()
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
            },
            {
                path: "/our-shop",
                element: <OurShop></OurShop>
            },
            {
                path: "/login",
                element: <Login></Login>
            },
            {
                path: "/register",
                element: <Register></Register>
            }
        ]
    },
    {
        path: "/dashboard",
        element: <PrivateRoute><Dashboard></Dashboard></PrivateRoute>,
        children: [
            {
                path: "/dashboard",
                element: <Navigate to={`${isAdmin ? "/dashboard/admin-home" : "/dashboard/user-home"}`}></Navigate>
            },
            {
                path: "/dashboard/admin-home",
                element: <AdminHome></AdminHome>
            },
            {
                path: "/dashboard/all-users",
                element: <AllUsers></AllUsers>
            },
            {
                path: "/dashboard/user-home",
                element: <UserHome></UserHome>
            },
            {
                path: "/dashboard/my-carts",
                element: <MyCarts></MyCarts>
            }
        ]
    }
]);