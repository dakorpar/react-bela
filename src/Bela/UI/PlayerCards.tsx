import React from 'react';
import PlayerCard from "./PlayerCard";
import {Cards} from "../Data/Cards";

function PlayerCards(props: Cards) {
    return(
        <div>
            {props.cards.map((card, index) => {
                return <span className="card" key={index}><PlayerCard value={card.value} color={card.color} /></span>
            })}
        </div>
    );
}

export default PlayerCards;
