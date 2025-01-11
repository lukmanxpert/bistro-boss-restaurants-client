import React, { useContext } from 'react';
import { AuthContext } from './AuthProvider';
import Loading from '../components/loading/Loading';
import { Navigate } from 'react-router-dom';

const PrivateRoute = ({ children }) => {
    const { user, loading } = useContext(AuthContext)
    if (loading) {
        return <div>
            <Loading></Loading>
        </div>
    }
    if (user) {
        return children;
    }
    return (
        <Navigate to={"login"}></Navigate>
    );
};

export default PrivateRoute;