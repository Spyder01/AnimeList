import type {FC} from 'react';
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { animeAPI } from '../assets';
import type { MovieType } from '../Types';
import AppBar from '../components/AppBar';
import Loader from './Loading';
import './styles/Anime.scss';

const Page:FC = ()=>{
    const {id} = useParams ()
    const [anime, setAnime]:any = useState ([]);
    const [loading, setLoading] = useState (true);

    useEffect (()=>{
        fetch (`${animeAPI}/${id}`).then (
            res => res.json ().then (
                Anime=>{
                    const movie:MovieType = {
                        id: Anime.id,
                        title: Anime.title,
                        original_title: Anime.original_title,
                        image: Anime.image,
                        banner_image: Anime.movie_banner,
                        description: Anime.description,
                        rating: Anime.rt_score,
                        director: Anime.director,
                        producers: Anime.producer.split (','),
                        runTime: Anime.running_time,
                    }
                    console.table (movie)
                    setAnime (movie);
                    setLoading (false)
                }
            )
        )
    }, [])

    if (loading)
        return (
            <section>
                <AppBar />
                <Loader />
            </section>
        )




    return (
        <div className="Page-2">
            <AppBar />

            <main className="anime">

                <h1 className="title">
                    {anime.title}({anime.original_title})
                </h1>

                <section className="anime-header">

                    <div className="anime-rating">
                     Movie Score:    {anime.rating}/100
                    </div>

                    <div className="anime-images-container">
                        <div className="image-1">
                            <img src={anime.image} alt={anime.title} />
                        </div>

                        <div className="image-2">
                            <img src={anime.banner_image} alt={anime.title} />
                        </div>
                    </div>
                </section>

                <section className="anime-details">

                    <div className="description">
                        <h3 className="des-title">
                            Description
                        </h3>

                        <p className="description-para">
                            {anime.description}
                        </p>
                    </div>

                    <div className="director">
                        <strong>Director: </strong> <span>{anime.director}</span>
                    </div>

                    <div className="producer">
                        <strong>Producer: </strong> <span>{
                                (()=>anime.producers.length !==1?anime.producers.join (', '):anime.producers[0])()
                            }</span>
                    </div>

                </section>


            </main>

        </div>
    )
}

export default Page;