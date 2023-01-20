import React from 'react';
import {Game} from "../Logic/Game";
function Table() {

    let game = new Game();
    game.start();
    return (
        <div>
            Welcome<br />
            player cards:
        <ul>
            {game.getPlayer().getCards().map((card, index) => {
                return <li className="card" key={index}>{card.color} - {card.value}</li>
            })}
        </ul>
        </div>
    )

}

export default Table;
