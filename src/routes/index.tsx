import type {FC} from 'react';
import {lazy, Suspense} from 'react';
import {Routes, Route} from 'react-router-dom';
import Loader from '../views/Loading';
import { RouteType } from '../Types';


const Home = lazy(() => import('../views'));
const Anime = lazy(() => import('../views/Anime'));


const routes:RouteType[] = [
    {
        path: '/',
        component: Home
    },
    {
        path: '/anime/:id',
        component: Anime
    }
];


const RoutesComponent:FC = () => {
    const Ele = (Component:FC) => <Component />;
    return (
        <Suspense fallback={<Loader />}>
            <Routes>
                {
                    routes.map(({path, component}) => (
                        <Route key={path} path={path} element={Ele(component)} />
                    ))
                }
            </Routes>
        </Suspense>
    )
}

export default RoutesComponent;