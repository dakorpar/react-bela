import React from 'react';
import PlayerCards from "./PlayerCards";
import {TableLogic} from "../Logic/TableLogic";
function Table() {

    let logic = new TableLogic('Dalibor');
    logic.currentGame.start();

    return (
        <div>
            Welcome<br />
            player cards:<br />
            <PlayerCards cards={logic.currentGame.getPlayer().getCards().cards}></PlayerCards>
        </div>
    )

}

export default Table;
