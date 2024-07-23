import React from 'react';
import {NavLink} from 'react-router-dom';

import './style/MainPage.scss';

import CloudIcon from './assets/cloud.svg?jsx';
import GalleryIcon from './assets/gallery.svg?jsx';
import GalleryPlug from './assets/gallery-plug.jpeg?jsx';
import MemoriesPlug from './assets/memories-plug.jpeg?jsx';

const MainPage = () => {
    return (
        <div className="main-page">
            <ul className="main-page__container">
                <NavLink to={'/memories'}>
                    <li className="main-page__top-item">
                        <div className="main-page__item-body">
                            <img src={MemoriesPlug} alt="" />
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
