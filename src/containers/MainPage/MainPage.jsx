import React, {useEffect} from 'react';
import {NavLink, useParams} from 'react-router-dom';
import {useDispatch, useSelector} from 'react-redux';

import './style/MainPage.scss';

import CloudIcon from './assets/cloud.svg?jsx';
import GalleryIcon from './assets/gallery.svg?jsx';
import GalleryPlug from './assets/gallery-plug.jpeg?jsx';
import MemoriesPlug from './assets/memories-plug.jpeg?jsx';

// import {getUser} from '../../api/users';

import {fetchUserInfo} from '../../slices/userSlice';

const MainPage = () => {
    const dispatch = useDispatch();
    const {key} = useParams();
    const link = `http://localhost:3305/static/users/${key}/photos/ce46c243-0aeb-4c78-8a8d-5e9f7118a92d.jpg`;

    useEffect(() => {
        dispatch(fetchUserInfo(key));
    }, []);
    return (
        <div className="main-page">
            <ul className="main-page__container">
                <NavLink to={'/memories'}>
                    <li className="main-page__top-item">
                        <div className="main-page__item-body">
                            <img src={link} alt="" />
                        </div>
                        <div className="main-page__item-label">
                            <CloudIcon />К воспоминаниям
                        </div>
                    </li>
                </NavLink>

                <NavLink to={'/gallery'}>
                    <li className="main-page__bottom-item">
                        <div className="main-page__item-body">
                            <img src={GalleryPlug} alt="" />
                        </div>
                        <div className="main-page__item-label">
                            <GalleryIcon />
                            Галерея
                        </div>
                    </li>
                </NavLink>
            </ul>
        </div>
    );
};

export default MainPage;
