import React, {useState, useEffect} from 'react';
import Viewer from 'react-viewer';
import {useDispatch, useSelector} from 'react-redux';
import {useParams} from 'react-router-dom';

import './style/GalleryPage.scss';

import AllPhotosIcon from './assets/all-photos.svg?jsx';

import {fetchUserInfo, selectUserInfo} from '../../slices/userSlice';

const GalleryPage = () => {
    const dispatch = useDispatch();
    const {key} = useParams();
    const [visible, setVisible] = useState(false);
    const [activeIndex, setActiveIndex] = useState(0);
    const userInfo = useSelector(selectUserInfo);
    const photos = userInfo.photos
        ? userInfo.photos.map((item) => {
              return {
                  // eslint-disable-next-line no-undef
                  src: `${__CONFIG.connections.HOST}/static/users/${userInfo.key}/photos/${item}`,
                  alt: 'photo',
              };
          })
        : [];

    useEffect(() => {
        dispatch(fetchUserInfo(key));
    }, []);

    const showPhoto = (index) => {
        setActiveIndex(index);
        setVisible(true);
    };

    const closePhoto = () => {
        setVisible(false);
        setActiveIndex(0);
    };

    return (
        <div className="gallery-page">
            <div className="gallery-page__viewer-btn" onClick={() => setVisible(true)}>
                <AllPhotosIcon />
                <p>Посмотреть все</p>
            </div>
            <ul className="gallery-page__grid">
                {photos.length > 0 &&
                    photos.map((item, index) => {
                        return (
                            <li
                                key={index}
                                className="gallery-page__grid-item"
                                onClick={() => showPhoto(index)}
                            >
                                <img src={item.src} alt="" />
                            </li>
                        );
                    })}
                {photos.length === 0 && 'No photos'}
            </ul>
            <Viewer
                activeIndex={activeIndex}
                visible={visible}
                onClose={() => closePhoto()}
                images={photos}
            />
        </div>
    );
};

export default GalleryPage;
