import React from 'react';
import Faq from '../../assets/image/faqImg.png';
import './FaqCard.sass'

export default function FaqCard() {
    return (
        <div>
            <div className="cardFaq">
                <div className="card-content">
                    <div className="contentFaqCard">
                        <p>Vous Avez des questions ?</p>
                        <p>Allez voir notre section FAQ, Nous y répondont déjà. Ce n’est pas le cas ? Contactez-nous !</p>
                        <p>Contactez-nous !</p>
                    </div>
                    <div className='buttonSpace'>
                        <button className="button is-large"><p>Par ici</p></button>
                    </div>
                </div>
            </div>
            <img className="bulma-center-mixin" src={Faq} />
        </div>
    )
};
