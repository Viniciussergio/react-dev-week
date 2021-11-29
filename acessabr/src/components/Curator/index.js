import React from "react";
import './styles.scss'
import curatorPhoto from '../../images/foto-perfil.jpeg'

const CuratorItem = props => {
    return (
        <div className="curator__container">
            <div className="curator__photo">
                <img src={curatorPhoto} alt="Foto do Curador Vinicius Sergio"/>
            </div>
            <div className="curator__details">
                <div>
                    <h3>Vinicius Sergio</h3>
                    <h6>Curadoria</h6>
                </div>
                <p>Desenvolvedor web Junior, praticando com o React</p>
            </div>
        </div>
    )
}

export default CuratorItem;