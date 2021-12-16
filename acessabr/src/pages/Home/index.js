import React, { useContext, useEffect} from 'react';
import { useParams } from 'react-router';
import { FilterContext } from '../../contexts/FilterContext';
import imagemDestaque from '../../images/home/imagem-destaque.png';
import './styles.scss';

import Pills from '../../components/Pills'
import { LocationContext } from '../../contexts/LocationContext';

const PLACES = [
    'Mercados',
    'Museus',
    'Parques',
    'Todos'
];

const Home = () => {
    const {city, state} = useParams();
    const {setCity, setState} = useContext(LocationContext);
    const { filteredPlace, setFilteredPlace} = useContext(FilterContext)

    const handleFilteredPlace = (item) => {
        if(item !== filteredPlace) {
            setFilteredPlace(item);
        }

        if(item === 'Todos'){
            setFilteredPlace(item)
            console.log(filteredPlace);
        }
    }

    useEffect(() => {
        setCity(city);
        setState(state);
    }, [city, state]);

    return (
        <main id="main-content" className="home__container">
            <div className="home__col">
                <h1 className="home__title">{city} para todos</h1>

                <div className="home__imagem home__imagem--destaque hide-desktop">
                    <img src={imagemDestaque} alt="Imagem Destaque Cadeirante"/>
                </div>

                <p className="home__text">
                    Nossa missão é facilitar o encontro entre lugares inclusivos e
                    pessoas que buscam alternativas culturais para sair de casa,
                    com a mobilidade que todo cidadão precisa.
                </p>
                <p className="home__text">
                    Checamos 10 itens essenciais de acessibilidade para pessoas com
                    deficiência em diversos pontos da cidade.
                </p>

                <div className="home__pills">
                    {
                        PLACES.map((item) => {
                            return <Pills
                                local = {item}
                                selected = {filteredPlace === item}
                                item = {item}
                                onClick={() => handleFilteredPlace(item)}
                            />
                        })
                    }
                </div>
            </div>
            <div className="home__col">
                <div className="home__imagem home__imagem--destaque hide-mobile">
                    <img src={imagemDestaque} alt="Imagem Destaque Cadeirante"/>
                </div>
            </div>
        </main>
    );
};

export default Home;