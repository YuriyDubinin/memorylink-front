import React from 'react';
import {useSelector} from 'react-redux';
import {useNavigate} from 'react-router-dom';
import {useForm} from 'react-hook-form';
import toast from 'react-hot-toast';

import './Login.scss';

import InfoIcon from './assets/info.svg?jsx';

import {selectUserInfo} from 'slices/userSlice';

import {validateSimpleRequired} from '../../../../helpers/validation';

const Login = () => {
    const userInfo = useSelector(selectUserInfo);
    const navigate = useNavigate();
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
        wrongCredentials: 'Неверный пользователь или пароль',
    };

    const onSubmit = (data) => {
        if (data.password === userInfo.password) {
            return navigate('/main');
        }

        toast(fieldDescription.wrongCredentials, {
            icon: '❌',
            duration: 1500,
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
