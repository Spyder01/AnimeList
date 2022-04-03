import type { FC } from 'react';
import {useNavigate} from 'react-router-dom';
import { CardType } from '../Types';
import './styles/Card.scss'




const Card: FC<CardType> = ({ id, title, image, route, original_title }) => {
 
    const navigate = useNavigate();

    return (
        <div className="Card" onClick={()=>navigate (route)}>
            <div className="Card-image">
                <img src={image} alt={route} />
            </div>
            <div className="Card-content">
                <h3 className="Card-title">{title}<div>({original_title})</div></h3>
            </div>
        </div>
    )

}

export default Card;
