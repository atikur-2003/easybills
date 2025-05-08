import React, { use } from 'react';
import { AuthContext } from '../provider/AuthProvider';
import { Navigate, useLocation } from 'react-router';
import Loading from '../pages/Loading';

const PrivateRoute = ({children}) => {
     const {user, loading} = use(AuthContext)
     const location = useLocation()

    if(loading){
        return <Loading></Loading>
    }
     if(user && user?.email){
        return children
     }
     return <Navigate state={location.pathname} to='/auth/signin'></Navigate>
};

export default PrivateRoute;