import React, {useEffect} from 'react';
import {useLocation, useNavigate} from 'react-router-dom';
import {useDispatch, useSelector} from 'react-redux';

import './AuthPage.scss';

import Login from './elements/CreateUserForm/Login';

import {fetchUserInfo, selectUserInfo} from 'slices/userSlice';
import {checkUser} from 'api/users';

const AuthPage = () => {
    const dispatch = useDispatch();
    const location = useLocation();
    const navigate = useNavigate();
    const compositeKey = location.pathname.slice(1) + location.search;
    const userInfo = useSelector(selectUserInfo);

    useEffect(() => {
        checkUser(compositeKey).catch(() => navigate('/main')); // user not found
    }, []);

    return (
        <div className="auth-page">
            <Login />
        </div>
    );
};

export default AuthPage;
