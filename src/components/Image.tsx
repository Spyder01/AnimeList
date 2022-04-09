import type {FC} from 'react';
import { Suspense } from 'react';
import { useImage } from 'react-image';
import Loader from './Loader';


interface ImageProps {
    src: string;
    alt: string;
}

const Image:FC<ImageProps> = ({src, alt}) => {


    return (
        <Suspense fallback={<Loader />}>
            <ImageMain src={src} alt={alt} />
        </Suspense >
    )
}


const ImageMain:FC<ImageProps> = ({src:Src, alt})=> {

    const {src} = useImage ({
        srcList: Src
    });

    return <img src={src} alt={alt}/>
}

export default Image;