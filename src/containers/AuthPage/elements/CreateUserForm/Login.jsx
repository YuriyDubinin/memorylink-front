import React from 'react';
import {useForm} from 'react-hook-form';
import toast from 'react-hot-toast';
import {useLocation, useNavigate} from 'react-router-dom';
import {useDispatch} from 'react-redux';

import './Login.scss';

import InfoIcon from './assets/info.svg?jsx';

import {validateSimpleRequired} from 'helpers/validation';

import {fetchUserInfo} from 'slices/userSlice';

import {login} from 'api/users';

const Login = () => {
    const dispatch = useDispatch();
    const location = useLocation();
    const navigate = useNavigate();
    const compositeKey = location.pathname.slice(1) + location.search;
    const {
        register,
        handleSubmit,
        formState: {errors},
    } = useForm({
        mode: 'all',
        defaultValues: {
            password: '',
        },
    });

    const fieldDescription = {
        password: 'Пароль',
        wrongCredentials: 'Неверный пароль',
    };

    const denyAccess = async () => {
        await dispatch(fetchUserInfo(compositeKey));
        navigate('/main');
    };

    const onSubmit = (data) => {
        const {password} = data;

        login(compositeKey, password)
            .then(({data}) => {
                if (data.data.status === 'success') {
                    denyAccess();
                }
            })
            .catch((error) => {
                toast(fieldDescription.wrongCredentials, {
                    icon: '❌',
                    duration: 1500,
                });

                console.error(error?.response);
            });
    };

    return (
        <>
            <div className="login">
                <div className="login__row">
                    <div className="login__header">Введите пароль</div>
                    <div className="login__body">
                        <form
                            className="login__body default-form"
                            method="post"
                            encType="multipart/form-data"
                            onSubmit={handleSubmit(onSubmit)}
                        >
                            <div className="default-form__input-wrapper login__input">
                                <div
                                    className="login__info-icon"
                                    onClick={() => {
                                        toast(fieldDescription.password, {
                                            icon: 'ℹ️',
                                            duration: 1500,
                                        });
                                    }}
                                >
                                    <InfoIcon />
                                </div>
                                <input
                                    className="default-form__input"
                                    placeholder="Имя"
                                    {...register('password', {
                                        validate: (value) => validateSimpleRequired(value, true),
                                    })}
                                />
                                {errors.password && (
                                    <span className="default-form__error-message">
                                        {errors.password?.message || 'обязательное поле'}
                                    </span>
                                )}
                            </div>
                            <button
                                type="submit"
                                className="default-form__submit-btn login__submit-btn"
                            >
                                Войти
                            </button>
                        </form>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Login;
