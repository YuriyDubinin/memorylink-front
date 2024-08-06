import React from 'react';
import {useSelector} from 'react-redux';
import {NavLink} from 'react-router-dom';

import './MainPage.scss';

import CloudIcon from './assets/cloud.svg?jsx';
import GalleryIcon from './assets/gallery.svg?jsx';
import GalleryPlug from './assets/gallery-plug.jpeg?jsx';
import MemoriesPlug from './assets/memories-plug.jpeg?jsx';

import {selectUserInfo} from 'slices/userSlice';

const MainPage = () => {
    const userInfo = useSelector(selectUserInfo);
    const galleryPlugLink =
        userInfo?.photos && userInfo.photos[0]
            ? // eslint-disable-next-line no-undef
              `${__CONFIG.connections.HOST}/static/users/${userInfo.key}/photos/${userInfo.photos[0]}`
            : GalleryPlug;
    const memoryPlugLink =
        userInfo?.photos && userInfo.photos[1]
            ? // eslint-disable-next-line no-undef
              `${__CONFIG.connections.HOST}/static/users/${userInfo.key}/photos/${userInfo.photos[1]}`
            : MemoriesPlug;

    return (
        <div className="main-page">
            {userInfo.isAuth && (
                <ul className="main-page__container">
                    <NavLink to={`/gallery`}>
                        <li className="main-page__bottom-item">
                            <div className="main-page__item-body">
                                <img src={galleryPlugLink} alt="" />
                            </div>
                            <div className="main-page__item-label">
                                <GalleryIcon />
                                Галерея
                            </div>
                        </li>
                    </NavLink>
                    <NavLink to={`/memories`}>
                        <li className="main-page__top-item">
                            <div className="main-page__item-body">
                                <img src={memoryPlugLink} alt="" />
                            </div>
                            <div className="main-page__item-label">
                                <CloudIcon />К воспоминаниям
                            </div>
                        </li>
                    </NavLink>
                </ul>
            )}
            {!userInfo.isAuth && <div className="main-page__no-user">User not found</div>}
        </div>
    );
};

export default MainPage;
