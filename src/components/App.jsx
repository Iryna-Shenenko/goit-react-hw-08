import { useEffect, lazy } from 'react';
import { useDispatch, useSelector } from 'react-redux';;
import { Route, Routes } from 'react-router-dom';
import Layout from '../components/Layout';
import PrivateRoute from './PrivateRoute';
import {RestrictedRoute} from './RestrictedRout';
import { refreshUser } from '../redux/auth/operations';
import { selectIsRefreshing } from '../redux/auth/selectors';

 
const HomePage = lazy(() => import('../pages/HomePage'));
const RegisterPage = lazy(() => import ('../pages/RegisterPage'));
const LoginPage = lazy (() => import('../pages/LoginPage'));
const ContactPage = lazy (() => import('../pages/ContactPage'));


 const App = ()=> {
    const dispatch = useDispatch();
    const isRefreshing  = useSelector( selectIsRefreshing);

    useEffect (() => {
        dispatch(refreshUser());
    }, [dispatch]);




    return isRefreshing ? (
        <b>Refreshing user...</b>
    ) : (
        <Layout>
            <Routes>
                <Route path="/" element={<HomePage />} />
                <Route path="/register" element={<RestrictedRoute redirectTo="/contacts" component={<RegisterPage />} />
                } />
                <Route path="/login" element={<RestrictedRoute redirectTo="/contacts" component={<LoginPage />} />
                 } />
                 <Route path="/contacts" element={<PrivateRoute redirectTo="/login" component={<ContactPage />} /> 
                 } />
            </Routes>
        </Layout>
    );
};
export default App;
