import React from 'react';
import PlayerCards from "./PlayerCards";
import {TableLogic} from "../../Bela/TableLogic";
function Table() {

    let logic = new TableLogic('Dalibor');
    logic.currentGame.start();

    return (
        <div>
            <PlayerCards cards={logic.currentGame.getPlayer().getCards().cards} />
        </div>
    )

}

export default Table;
