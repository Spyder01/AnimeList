import type { FC } from 'react';


interface RouteType {
    path: string;
    component: FC;
}


interface CardType {
    id: string;
    title: string;
    original_title: string;
    image: string;
    route: string;
}


export type {
    CardType,
    RouteType
}