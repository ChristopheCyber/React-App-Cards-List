import React from 'react';
import './card-list.styles.css';
import { Card } from '../card/card.component.jsx';
//TypeScript tsParticles API :
import Particles from "react-tsparticles";
import { jspConfig2 } from "../../jsParticles/particles-configs.js";

export const CardList = (prop1) => (
    <div className={'card-list-divStyle ' + prop1.cardsPropImg + '-list'}>
        {/* tsParticles */}
        <div id="tsparticles">
            <Particles
                options={jspConfig2}
            />
        </div>
        { /* console.log('In Card-list prop1.cardsPropImg=>', prop1.cardsPropImg) */}
        { prop1.cardsProp1.map(
            cardElt => (
                <Card key={cardElt.id} cardProp2={cardElt}
                    cardProp3={prop1.cardsPropImg} />
            )
        )}
    </div>
);