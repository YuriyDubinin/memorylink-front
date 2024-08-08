import React, {useEffect, useState} from 'react';
import {useLocation, useNavigate} from 'react-router-dom';
import {useDispatch} from 'react-redux';

import './AuthPage.scss';

import Login from './elements/CreateUserForm/Login';

import {fetchUserInfo} from 'slices/userSlice';
import {checkUser} from 'api/users';

const AuthPage = () => {
    const dispatch = useDispatch();
    const location = useLocation();
    const navigate = useNavigate();
    const compositeKey = location.pathname.slice(1) + location.search;
    const [loginWithoutPass, setLoginWithoutPass] = useState(false);

    useEffect(() => {
        checkUser(compositeKey)
            .then(({data}) => {
                if (data.data.status === 'free') {
                    setLoginWithoutPass(true);
                }
            })
            .catch(() => navigate('/main')); // user not found
    }, []);

    const denyAccess = async () => {
        await dispatch(fetchUserInfo(compositeKey));
        navigate('/main');
    };

    if (loginWithoutPass) {
        denyAccess();
    }

    return (
        <div className="auth-page">
            <Login />
        </div>
    );
};

export default AuthPage;
