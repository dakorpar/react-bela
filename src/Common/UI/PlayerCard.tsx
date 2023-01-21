import React from 'react';
import {Card} from "../Card";

function PlayerCard(card: Card) {
    return(
    <img style={{float: "left"}} src={'/img/cards/' + card.color + '_' +card.value + '.png'} />
    );
}

export default PlayerCard;
