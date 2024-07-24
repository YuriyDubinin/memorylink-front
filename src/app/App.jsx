import React, {Suspense} from 'react';
import {BrowserRouter, Routes, Route, Navigate} from 'react-router-dom';
import {Toaster} from 'react-hot-toast';

import Layout from '../layouts/Layout';
import MainPage from '../containers/MainPage/MainPage';
import GalleryPage from '../containers/GalleryPage/GalleryPage';
import MemoriesPage from '../containers/MemoriesPage/MemoriesPage';

const App = () => {
    return (
        <BrowserRouter>
            <Layout>
                <Suspense>
                    <Routes>
                        <Route path="/" element={<Navigate to="/main" />} />
                        <Route path="/main" element={<MainPage />} />
                        <Route path="/:key" element={<MainPage />} />
                        <Route path="/gallery/:key" element={<GalleryPage />} />
                        <Route path="/memories/:key" element={<MemoriesPage />} />
                    </Routes>
                </Suspense>
            </Layout>
            <Toaster />
        </BrowserRouter>
    );
};

export default App;
