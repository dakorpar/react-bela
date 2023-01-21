import {GameLogic} from "./GameLogic";
import {Player} from "../Common/Player";

export class TableLogic {

    public currentGame: GameLogic = new GameLogic();

    public player: Player;

    public playerScore: number = 0;

    public computerScore: number = 0;

    constructor(playerName: string) {
        this.player = new Player(playerName);
    }

}
