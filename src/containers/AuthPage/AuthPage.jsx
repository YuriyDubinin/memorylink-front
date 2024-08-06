import React, {useEffect} from 'react';
import {NavLink, useLocation, useNavigate} from 'react-router-dom';
import {useDispatch, useSelector} from 'react-redux';

import './AuthPage.scss';

import Login from './elements/CreateUserForm/Login';

import {fetchUserInfo, selectUserInfo} from 'slices/userSlice';

const AuthPage = () => {
    const dispatch = useDispatch();
    const location = useLocation();
    const navigate = useNavigate();
    const compositeKey = location.pathname.slice(1) + location.search;
    const userInfo = useSelector(selectUserInfo);

    useEffect(() => {
        dispatch(fetchUserInfo(compositeKey));
    }, []);

    if (!userInfo.password) {
        navigate('/main');
    }

    if (userInfo.password) {
        return (
            <div className="auth-page">
                <Login />
            </div>
        );
    }

    return null; // вернуть null пока редирект не произошел
};

export default AuthPage;
