import React, {useEffect, useState} from 'react';
import {useLocation, useNavigate} from 'react-router-dom';
import {useDispatch} from 'react-redux';
import axios from 'axios';

import './AuthPage.scss';

import Login from './elements/CreateUserForm/Login';

import {fetchUserInfo} from 'slices/userSlice';
import {checkUser} from 'api/users';
import {setAccessToken} from './../../utils/token';

const AuthPage = () => {
    const dispatch = useDispatch();
    const location = useLocation();
    const navigate = useNavigate();
    const compositeKey = location.pathname.slice(1) + location.search;
    const [loginWithoutPass, setLoginWithoutPass] = useState(false);

    useEffect(() => {
        axios
            .post('http://37.1.215.81:8080/user/auth', {
                "email": "testuser@example.com",
                "password": "1234"
                })
            .then(res => {
                const token = res.data?.data?.access_token;

                if (token) {
                    setAccessToken(token);
                    
                }
                console.log(res)
            })
            .catch(err => {
                navigate('/main'); // user not found
                console.log('ERROR:', err.response?.data || err.message);
            });
    }, []);

    // useEffect(() => {
    //     checkUser(compositeKey)
    //         .then(({data}) => {
    //             if (data.data.status === 'free') {
    //                 setLoginWithoutPass(true);
    //             }
    //         })
    //         .catch(() => navigate('/main')); // user not found
    // }, []);

    // useEffect(() => {
    //     if (loginWithoutPass) {
    //         denyAccess();
    //     }
    // }, [loginWithoutPass]);

    // const denyAccess = async () => {
    //     await dispatch(fetchUserInfo(compositeKey));
    // //     navigate('/main');
    // };

    // if (loginWithoutPass) {
    //     denyAccess();
    // }

    return (
        <div className="auth-page">
            <Login />
        </div>
    );
};

export default AuthPage;
