import React, { useState } from 'react';
import imagemDestaque from '../../images/home/imagem-destaque.png';
import './styles.scss';

import Pills from '../../components/Pills'

const PLACES = [
    'Praça',
    'Parque',
    'Igreja',
    //'Hotel',
    //'Restaurante',
    'Zoológico',
    //'Farmácia',
    'Loja',
    'Aquário'
];

const RioDeJaneiro = props => {
    const [selectedPill, setSelectedPill] = useState('');

    return (
        <main id="main-content" className="home__container">
            <div className="home__col">
                <h1 className="home__title">{props.city} para todos</h1>

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
                                selected = {selectedPill === item}
                                onClick={() => setSelectedPill(item)}
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

export default RioDeJaneiro;