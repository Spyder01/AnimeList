import type { FC } from 'react';
import { useNavigate } from 'react-router-dom';
import './styles/AppBar.scss';

const AppBar: FC = () => {
    const navigate = useNavigate ();

    return (
        <nav>
            <div className="nav-title" onClick={()=>navigate('/')}>
                AnimeList
            </div>
        </nav>
    )

}

export default AppBar;