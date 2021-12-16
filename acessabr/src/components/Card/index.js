import React from "react";
import Button from "../Button";
import './styles.scss';
import iconAudio from '../../images/icons/icon-audio-descricao.png'
import iconBanheiro from '../../images/icons/icon-banheiro-acessivel.png'
import iconBraile from '../../images/icons/icon-braile.png'
import iconCaoGuia from '../../images/icons/icon-caoguia.png'
import iconElevador from '../../images/icons/icon-elevador.png'
import iconEstacionamento from '../../images/icons/icon-estacionamento.png'
import iconLibras from '../../images/icons/icon-libras.png'
import iconPisoTatil from '../../images/icons/icon-piso-tatil.png'
import iconPortaLarga from '../../images/icons/icon-porta-larga.png'
import iconRampa from '../../images/icons/icon-rampa.png'

const Card = ({item}) => {
    const imagePath = require('../../images' + item.image);

    return (
        <div className="card__container">
            <div className="card__image">
                <img src={imagePath.default} alt={item.name} title={item.name}/>
            </div>
            <div className="card__content">
                <h3>{item.name}</h3>
                <ul className="card__facilities">
                    <li className={
                        `card__facilities__item 
                        ${item.facilities[0]}
                        ${!item.facilities[0].status ? 'card__facilities__item--unchecked' : ''}`}
                    > 
                        <img 
                            src={iconBraile}
                            alt="Sinalização em Braile"
                            title="Sinalização em Braile"
                        />
                    </li>
                    <li className={
                        `card__facilities__item 
                        ${item.facilities[1]}
                        ${!item.facilities[1].status ? 'card__facilities__item--unchecked' : ''}`}
                    > 
                        <img
                            src={iconAudio}
                            alt="Audio Descrição"
                            title="Audio Descrição"
                        />
                    </li>
                    <li className={
                        `card__facilities__item 
                        ${item.facilities[2]}
                        ${!item.facilities[2].status ? 'card__facilities__item--unchecked' : ''}`}
                    > 
                        <img 
                            src={iconBanheiro}
                            alt="Banheiro Acessivel"
                            title="Banheiro Acessivel"
                        />
                    </li>
                     <li className={
                        `card__facilities__item 
                        ${item.facilities[3]}
                        ${!item.facilities[3].status ? 'card__facilities__item--unchecked' : ''}`}
                    >
                        <img 
                            src={iconElevador}
                            alt="Elevador para cadeirantes"
                            title="Elevador para cadeirantes"
                        />
                    </li>
                     <li className={
                        `card__facilities__item 
                        ${item.facilities[4]}
                        ${!item.facilities[4].status ? 'card__facilities__item--unchecked' : ''}`}
                    > 
                        <img 
                            src={iconEstacionamento}
                            alt="Estacionamento para idosos / deficientes"
                            title="Estacionamento para idosos / deficientes"
                        />
                    </li>
                     <li className={
                        `card__facilities__item 
                        ${item.facilities[5]}
                        ${!item.facilities[5].status ? 'card__facilities__item--unchecked' : ''}`}
                    > 
                        <img 
                            src={iconCaoGuia}
                            alt="Permite acesso de cães guias"
                            title="Permite acesso de cães guias"
                        />
                    </li>
                     <li className={
                        `card__facilities__item 
                        ${item.facilities[6]}
                        ${!item.facilities[6].status ? 'card__facilities__item--unchecked' : ''}`}
                    >
                        <img 
                            src={iconPisoTatil}
                            alt="Piso tátil de alerta"
                            title="Piso tátil de alerta"
                        />
                    </li>
                     <li className={
                        `card__facilities__item 
                        ${item.facilities[7]}
                        ${!item.facilities[7].status ? 'card__facilities__item--unchecked' : ''}`}
                    > 
                        <img 
                            src={iconPortaLarga}
                            alt="Portas Largas"
                            title="Portas Largas"
                        />
                    </li>
                     <li className={
                        `card__facilities__item 
                        ${item.facilities[8]}
                        ${!item.facilities[8].status ? 'card__facilities__item--unchecked' : ''}`}
                    >
                        <img 
                            src={iconRampa}
                            alt="Rampas de acesso para cadeirante"
                            title="Rampas de acesso para cadeirante"
                        />
                    </li>
                     <li className={
                        `card__facilities__item 
                        ${item.facilities[9]}
                        ${!item.facilities[9].status ? 'card__facilities__item--unchecked' : ''}`}
                    > 
                        <img 
                            src={iconLibras}
                            alt="Atendimento em Libras"
                            title="Atendimento em Libras"
                        />
                    </li>
                </ul>
                <p>{item.description}</p>
                <a href={item.link} target="_blank" className="card__button button">Como chegar</a>
            </div>
        </div>
    )
}

export default Card;