import React, { lazy, Suspense } from 'react';
import { Routes, Route } from 'react-router-dom';

import { ROUTES } from './constants/routes';
import Spinner from './UI/spinner';

const HomePage = lazy(() => import('./pages/home'));

const Page404 = lazy(() => import('./pages/page404'));

function App() {
    return (
        <>
            <Suspense fallback={<Spinner />}>
                <Routes>
                    <Route path={ROUTES.home} element={<HomePage />} />

                    <Route path={'*'} element={<Page404 />} />
                </Routes>
            </Suspense>
        </>
    );
}

export default App;
