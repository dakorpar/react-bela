import React from 'react';
import {Game} from "../Logic/Game";
import PlayerCard from "./PlayerCard";
function Table() {

    let game = new Game();
    game.start();
    return (
        <div>
            Welcome<br />
            player cards:
        <div>
            {game.getPlayer().getCards().map((card, index) => {
                return <span className="card" key={index}><PlayerCard value={card.value} color={card.color} /></span>
            })}
        </div>
        </div>
    )

}

export default Table;
