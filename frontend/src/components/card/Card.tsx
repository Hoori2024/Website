import React from 'react';
import './Card.sass';
import Datura from '../../assets/image/datura.png'

export default function Card() {
    return (
        <div className="card">
            <div className="card-content">
                <p className="title">Datura</p>
            </div>
            <div className="card-image">
                <figure className="image is-4by3">
                    <img src={Datura} alt="Placeholder image" />
                </figure>
            </div>
            <div className="media-content">
                <div className="content">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Phasellus nec iaculis mauris. <a>@bulmaio</a>.
                    <a href="#">#css</a> <a href="#">#responsive</a>
                </div>
            </div>
        </div>
    );
}