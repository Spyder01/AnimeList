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

interface MovieType {
    id: string;
    title: string;
    original_title: string;
    image: string;
    banner_image: string;
    rating: number;
    runTime: number;
    director: string;
    producers: string[];
    description: string;
}


export type {
    CardType,
    RouteType,
    MovieType
}