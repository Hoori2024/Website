import React from 'react';
import Team from '../../assets/image/Team.png'
import './Hoori.sass';

export default function Hoori() {
    return (
        <div className='ColBody '>
            <div className="columns ">
                <div className="column ">
                    <img src={Team} alt='team Hoori' />
                </div>
                <div className="column is-one-third ">
                    <p className='Title'>Nous Sommes Hoori</p>
                    <p className='TextBody'>Née de l’envie d’améliorer le quotidien de nos agriculteurs, nous avons décidés de créer une solution clé en main leurs permettant de se débarasser du Datura présent dans les champs.</p>
                </div>
            </div>
        </div>
    )
}