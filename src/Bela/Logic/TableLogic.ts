import {GameLogic} from "./GameLogic";
import {PlayerLogic} from "./PlayerLogic";

export class TableLogic {

    public currentGame: GameLogic = new GameLogic();

    public player: PlayerLogic;

    public playerScore: number = 0;

    public computerScore: number = 0;

    constructor(playerName: string) {
        this.player = new PlayerLogic(playerName);
    }

}
