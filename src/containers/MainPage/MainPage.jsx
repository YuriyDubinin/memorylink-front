import React, {useEffect} from 'react';
import {NavLink, useLocation} from 'react-router-dom';
import {useDispatch, useSelector} from 'react-redux';

import './style/MainPage.scss';

import CloudIcon from './assets/cloud.svg?jsx';
import GalleryIcon from './assets/gallery.svg?jsx';
import GalleryPlug from './assets/gallery-plug.jpeg?jsx';
import MemoriesPlug from './assets/memories-plug.jpeg?jsx';

import {fetchUserInfo, selectUserInfo} from '../../slices/userSlice';

const MainPage = () => {
    const dispatch = useDispatch();
    const location = useLocation();
    const compositeKey = location.pathname.slice(1) + location.search;
    const dirName = compositeKey.split('?')[0];
    const userInfo = useSelector(selectUserInfo);
    const galleryPlugLink =
        userInfo?.photos && userInfo.photos[0]
            ? // eslint-disable-next-line no-undef
              `${__CONFIG.connections.HOST}/static/users/${dirName}/photos/${userInfo.photos[0]}`
            : GalleryPlug;
    const memoryPlugLink =
        userInfo?.photos && userInfo.photos[1]
            ? // eslint-disable-next-line no-undef
              `${__CONFIG.connections.HOST}/static/users/${dirName}/photos/${userInfo.photos[1]}`
            : MemoriesPlug;

    useEffect(() => {
        dispatch(fetchUserInfo(compositeKey));
    }, []);

    return (
        <div className="main-page">
            {userInfo && (
                <ul className="main-page__container">
                    <NavLink to={`/memories/${compositeKey}`}>
                        <li className="main-page__top-item">
                            <div className="main-page__item-body">
                                <img src={memoryPlugLink} alt="" />
                            </div>
                            <div className="main-page__item-label">
                                <CloudIcon />К воспоминаниям
                            </div>
                        </li>
                    </NavLink>

                    <NavLink to={`/gallery/${compositeKey}`}>
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
                </ul>
            )}
            {!userInfo && <div className="main-page__no-user">User not found</div>}
        </div>
    );
};

export default MainPage;
