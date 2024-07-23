import React, {useState} from 'react';
import Viewer from 'react-viewer';

import './style/GalleryPage.scss';

import AllPhotosIcon from './assets/all-photos.svg?jsx';

const GalleryPage = () => {
    const [visible, setVisible] = useState(false);
    const [activeIndex, setActiveIndex] = useState(0);
    const images = [
        {
            src: 'https://st2.depositphotos.com/4732855/50825/i/450/depositphotos_508253764-stock-photo-happy-family-at-autumn-leaves.jpg',
            alt: 'image',
        },
        {
            src: 'https://www.mazyr.by/wp-content/uploads/2012/04/%D1%81%D0%B5%D0%BC%D1%8C%D1%8F.jpg',
            alt: 'image',
        },
        {
            src: 'https://zhuravlyov.ru/wp-content/uploads/2015/02/mnogotetnaya-semya-636x352.jpg',
            alt: 'image',
        },
        {
            src: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSDtaeZHcHzIrDI7B0CIgvszmAbYnhccIxs2smC8W4J-g&s',
            alt: 'image',
        },
        {
            src: 'https://images.freeimages.com/images/premium/previews/5370/53701742-happy-russian-family.jpg',
            alt: 'image',
        },
        {
            src: 'https://avatars.mds.yandex.net/i?id=1e302cc1099e55ba78e6d1ff9e57e821462d25fb-8548977-images-thumbs&n=13',
            alt: 'image',
        },
        {
            src: 'https://avatars.mds.yandex.net/i?id=c0f83d0bd0bbe4393d89e7276b8be1653b7ecb56-8567399-images-thumbs&n=13',
            alt: 'image',
        },
        {
            src: 'https://st2.depositphotos.com/4732855/50825/i/450/depositphotos_508253764-stock-photo-happy-family-at-autumn-leaves.jpg',
            alt: 'image',
        },
        {
            src: 'https://www.mazyr.by/wp-content/uploads/2012/04/%D1%81%D0%B5%D0%BC%D1%8C%D1%8F.jpg',
            alt: 'image',
        },
        {
            src: 'https://zhuravlyov.ru/wp-content/uploads/2015/02/mnogotetnaya-semya-636x352.jpg',
            alt: 'image',
        },
        {
            src: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSDtaeZHcHzIrDI7B0CIgvszmAbYnhccIxs2smC8W4J-g&s',
            alt: 'image',
        },
        {
            src: 'https://images.freeimages.com/images/premium/previews/5370/53701742-happy-russian-family.jpg',
            alt: 'image',
        },
        {
            src: 'https://avatars.mds.yandex.net/i?id=1e302cc1099e55ba78e6d1ff9e57e821462d25fb-8548977-images-thumbs&n=13',
            alt: 'image',
        },
        {
            src: 'https://avatars.mds.yandex.net/i?id=c0f83d0bd0bbe4393d89e7276b8be1653b7ecb56-8567399-images-thumbs&n=13',
            alt: 'image',
        },
        {
            src: 'https://st2.depositphotos.com/4732855/50825/i/450/depositphotos_508253764-stock-photo-happy-family-at-autumn-leaves.jpg',
            alt: 'image',
        },
        {
            src: 'https://www.mazyr.by/wp-content/uploads/2012/04/%D1%81%D0%B5%D0%BC%D1%8C%D1%8F.jpg',
            alt: 'image',
        },
        {
            src: 'https://zhuravlyov.ru/wp-content/uploads/2015/02/mnogotetnaya-semya-636x352.jpg',
            alt: 'image',
        },
        {
            src: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSDtaeZHcHzIrDI7B0CIgvszmAbYnhccIxs2smC8W4J-g&s',
            alt: 'image',
        },
        {
            src: 'https://images.freeimages.com/images/premium/previews/5370/53701742-happy-russian-family.jpg',
            alt: 'image',
        },
        {
            src: 'https://avatars.mds.yandex.net/i?id=1e302cc1099e55ba78e6d1ff9e57e821462d25fb-8548977-images-thumbs&n=13',
            alt: 'image',
        },
        {
            src: 'https://avatars.mds.yandex.net/i?id=c0f83d0bd0bbe4393d89e7276b8be1653b7ecb56-8567399-images-thumbs&n=13',
            alt: 'image',
        },
        {
            src: 'https://st2.depositphotos.com/4732855/50825/i/450/depositphotos_508253764-stock-photo-happy-family-at-autumn-leaves.jpg',
            alt: 'image',
        },
        {
            src: 'https://www.mazyr.by/wp-content/uploads/2012/04/%D1%81%D0%B5%D0%BC%D1%8C%D1%8F.jpg',
            alt: 'image',
        },
        {
            src: 'https://zhuravlyov.ru/wp-content/uploads/2015/02/mnogotetnaya-semya-636x352.jpg',
            alt: 'image',
        },
        {
            src: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSDtaeZHcHzIrDI7B0CIgvszmAbYnhccIxs2smC8W4J-g&s',
            alt: 'image',
        },
        {
            src: 'https://images.freeimages.com/images/premium/previews/5370/53701742-happy-russian-family.jpg',
            alt: 'image',
        },
        {
            src: 'https://avatars.mds.yandex.net/i?id=1e302cc1099e55ba78e6d1ff9e57e821462d25fb-8548977-images-thumbs&n=13',
            alt: 'image',
        },
        {
            src: 'https://avatars.mds.yandex.net/i?id=c0f83d0bd0bbe4393d89e7276b8be1653b7ecb56-8567399-images-thumbs&n=13',
            alt: 'image',
        },
        {
            src: 'https://st2.depositphotos.com/4732855/50825/i/450/depositphotos_508253764-stock-photo-happy-family-at-autumn-leaves.jpg',
            alt: 'image',
        },
        {
            src: 'https://www.mazyr.by/wp-content/uploads/2012/04/%D1%81%D0%B5%D0%BC%D1%8C%D1%8F.jpg',
            alt: 'image',
        },
        {
            src: 'https://zhuravlyov.ru/wp-content/uploads/2015/02/mnogotetnaya-semya-636x352.jpg',
            alt: 'image',
        },
        {
            src: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSDtaeZHcHzIrDI7B0CIgvszmAbYnhccIxs2smC8W4J-g&s',
            alt: 'image',
        },
        {
            src: 'https://images.freeimages.com/images/premium/previews/5370/53701742-happy-russian-family.jpg',
            alt: 'image',
        },
        {
            src: 'https://avatars.mds.yandex.net/i?id=1e302cc1099e55ba78e6d1ff9e57e821462d25fb-8548977-images-thumbs&n=13',
            alt: 'image',
        },
        {
            src: 'https://avatars.mds.yandex.net/i?id=c0f83d0bd0bbe4393d89e7276b8be1653b7ecb56-8567399-images-thumbs&n=13',
            alt: 'image',
        },
        {
            src: 'https://st2.depositphotos.com/4732855/50825/i/450/depositphotos_508253764-stock-photo-happy-family-at-autumn-leaves.jpg',
            alt: 'image',
        },
        {
            src: 'https://www.mazyr.by/wp-content/uploads/2012/04/%D1%81%D0%B5%D0%BC%D1%8C%D1%8F.jpg',
            alt: 'image',
        },
        {
            src: 'https://zhuravlyov.ru/wp-content/uploads/2015/02/mnogotetnaya-semya-636x352.jpg',
            alt: 'image',
        },
        {
            src: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSDtaeZHcHzIrDI7B0CIgvszmAbYnhccIxs2smC8W4J-g&s',
            alt: 'image',
        },
        {
            src: 'https://images.freeimages.com/images/premium/previews/5370/53701742-happy-russian-family.jpg',
            alt: 'image',
        },
        {
            src: 'https://avatars.mds.yandex.net/i?id=1e302cc1099e55ba78e6d1ff9e57e821462d25fb-8548977-images-thumbs&n=13',
            alt: 'image',
        },
        {
            src: 'https://avatars.mds.yandex.net/i?id=c0f83d0bd0bbe4393d89e7276b8be1653b7ecb56-8567399-images-thumbs&n=13',
            alt: 'image',
        },
    ];

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
                {images.map((item, index) => {
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
            </ul>
            <Viewer
                activeIndex={activeIndex}
                visible={visible}
                onClose={() => closePhoto()}
                images={images}
            />
        </div>
    );
};

export default GalleryPage;
