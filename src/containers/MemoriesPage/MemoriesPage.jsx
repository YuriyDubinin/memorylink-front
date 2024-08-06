import React from 'react';
import {useSelector} from 'react-redux';

import './MemoriesPage.scss';

import {selectUserInfo} from '../../slices/userSlice';

const MemoriesPage = () => {
    const userInfo = useSelector(selectUserInfo);
    const videos = userInfo.videos
        ? userInfo.videos.map((item) => {
              // eslint-disable-next-line no-undef
              return `${__CONFIG.connections.HOST}/static/users/${userInfo.key}/videos/${item}`;
          })
        : [];

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
