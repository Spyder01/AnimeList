import type { FC } from 'react';
import { useEffect, useState } from 'react';
import AppBar from '../components/AppBar';
import { animeAPI } from '../assets';
import Loader from '../views/Loading';
import Footer from '../components/Footer'
import Card from '../components/Card';
import { CardType } from '../Types';
import './styles/index.scss';





const Page: FC = () => {

    const [animes, setAnimes]:any = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        fetch(animeAPI).then(
            res => res.json().then(data => {
                const animes:CardType [] = data.map((anime:CardType) => {
                    return {
                        id: anime.id,
                        title: anime.title,
                        original_title: anime.original_title,
                        image: anime.image,
                        route: `/anime/${anime.id}`
                    }
                });
                setAnimes(animes);
                setLoading (false);
            })
        )

    }, []);

    // Add a new Loader Component
    if (loading)
        return (
            <section>
                <AppBar />
                <Loader />
            </section>
        )


    return (
        <div className="Page">
            <AppBar />
            <main className="Home">
                <div className="Home-container">
                    {animes.map((anime:CardType) => {
                        return <Card key={anime.id} {...anime} />
                    })}
                </div>
            </main>
            <div className="footer">
                <Footer />
            </div>
        </div>
    )
}

export default Page;

