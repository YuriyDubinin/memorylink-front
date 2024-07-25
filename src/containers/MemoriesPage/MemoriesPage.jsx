import React, {useEffect} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {useLocation} from 'react-router-dom';

import './style/MemoriesPage.scss';

import {fetchUserInfo, selectUserInfo} from '../../slices/userSlice';

const MemoriesPage = () => {
    const dispatch = useDispatch();
    const location = useLocation();
    const compositeKey = location.pathname.slice(1) + location.search;
    const userInfo = useSelector(selectUserInfo);
    const videos = userInfo.videos
        ? userInfo.videos.map((item) => {
              // eslint-disable-next-line no-undef
              return `${__CONFIG.connections.HOST}/static/users/${userInfo.key}/videos/${item}`;
          })
        : [];

    useEffect(() => {
        dispatch(fetchUserInfo(compositeKey));
    }, []);

    return (
        <div className="memories-page">
            <ul className="memories-page__grid">
                {videos.length > 0 &&
                    videos.map((item, index) => (
                        <video
                            key={index}
                            className="memories-page__grid-item"
                            width="750"
                            height="500"
                            controls
                        >
                            <source src={item} type="video/mp4" />
                        </video>
                    ))}
            </ul>
        </div>
    );
};

export default MemoriesPage;
