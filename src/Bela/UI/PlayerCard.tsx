import React from 'react';
import {Card} from "../Logic/Card";
import {CardHelper} from "../Logic/CardHelper";
function PlayerCard(props: Card) {
    let strenthHelper = new CardHelper();
    return(
    <img style={{float: "left"}} src={'/img/cards/' + props.color + '_' + strenthHelper.getFriendlyNumber(props.value) + '.png'} />
    );
}

export default PlayerCard;
