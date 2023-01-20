import React from 'react';
import {Card} from "../Logic/Card";
function PlayerCards(props: Card) {
    return(
    <span>{props.color} - {props.value}</span>
    );
}

export default PlayerCards;
