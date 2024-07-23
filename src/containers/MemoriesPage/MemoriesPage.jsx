import React, {useState} from 'react';

import video1 from './assets/1.mp4';
import video2 from './assets/1.mp4';
import video3 from './assets/1.mp4';
import video4 from './assets/1.mp4';

import './style/MemoriesPage.scss';

const MemoriesPage = () => {
    return (
        <div className="memories-page">
            <ul className="memories-page__grid">
                <video className="memories-page__grid-item" width="750" height="500" controls>
                    <source src={video1} type="video/mp4" />
                </video>
                <video className="memories-page__grid-item" width="750" height="500" controls>
                    <source src={video2} type="video/mp4" />
                </video>
                <video className="memories-page__grid-item" width="750" height="500" controls>
                    <source src={video3} type="video/mp4" />
                </video>
                <video className="memories-page__grid-item" width="750" height="500" controls>
                    <source src={video4} type="video/mp4" />
                </video>
            </ul>
        </div>
    );
};

export default MemoriesPage;
