import React, {Suspense} from 'react';
import {BrowserRouter, Routes, Route, Navigate} from 'react-router-dom';
import {Toaster} from 'react-hot-toast';

import Layout from 'layouts/Layout';
import AuthPage from 'containers/AuthPage/AuthPage';
import MainPage from 'containers/MainPage/MainPage';
import GalleryPage from 'containers/GalleryPage/GalleryPage';
import MemoriesPage from 'containers/MemoriesPage/MemoriesPage';

const App = () => {
    return (
        <BrowserRouter>
            <Layout>
                <Suspense>
                    <Routes>
                        <Route path="/" element={<Navigate to="/auth" />} />
                        <Route path="/auth/:key" element={<AuthPage />} />
                        <Route path="/main" element={<MainPage />} />
                        <Route path="/gallery" element={<GalleryPage />} />
                        <Route path="/memories" element={<MemoriesPage />} />
                        <Route path="/404" element={<>NOT_FOUND</>} />
                        <Route path="*" element={<Navigate to="/404" replace />} />
                    </Routes>
                </Suspense>
            </Layout>
            <Toaster />
        </BrowserRouter>
    );
};

export default App;
