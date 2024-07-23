import React, {useEffect, useState} from 'react';

import './style/Layout.scss';

import LockedIcon from './assets/locked-user.svg?jsx';

import Header from './components/Header/Header';

import {getUser} from '../handlers/user.handler';

const Layout = ({children}) => {
    const [auth, setAuth] = useState(true);

    useEffect(() => {
        getUser();
    }, []);
    return (
        <div className="document">
            {!auth && (
                <div className="locked__plug">
                    <LockedIcon />
                    <p>Необходимо авторизоваться</p>
                </div>
            )}
            {auth && (
                <>
                    <Header />
                    <main className="main-wrapper">
                        {/* <aside>{<MainSideBar />}</aside> */}
                        <div className="main-content">{children && children}</div>
                    </main>
                </>
            )}
        </div>
    );
};

export default Layout;
