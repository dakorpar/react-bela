import React from 'react';
import {Card} from "../Data/Card";
import {CardHelper} from "../Logic/CardHelper";
function PlayerCard(card: Card) {
    let strenthHelper = new CardHelper();
    return(
    <img style={{float: "left"}} src={'/img/cards/' + card.color + '_' + strenthHelper.getFriendlyNumber(card.value) + '.png'} />
    );
}

export default PlayerCard;
