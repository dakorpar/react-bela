import {CardColor} from "../Data/Card";
import {PlayerLogic} from "./PlayerLogic";
import {DealerLogic} from "./DealerLogic";
import {CardHelper} from "./CardHelper";

export class GameLogic {

    private dealer: DealerLogic;
    private player: PlayerLogic;
    private computer: PlayerLogic;
    private cardStrengthHelper: CardHelper;
    private mainColor: CardColor|null = null;

    public playerScore: number = 0;

    public computerScore: number = 0;

    constructor() {
        this.dealer = new DealerLogic();
        this.player = new PlayerLogic('Dalibor');
        this.computer = new PlayerLogic('Computer');
        this.cardStrengthHelper = new CardHelper();
    }

    public start(): void
    {
       this.dealer.shuffle();
        this.player.addCards(this.dealer.dealCards(6));
        this.computer.addCards(this.dealer.dealCards(6));
        this.playerScore = 0;
        this.computerScore = 0;
    }

    public getPlayer(): PlayerLogic
    {
        return this.player;
    }

    public setMainColor(color: CardColor): void
    {
        this.mainColor = color;
    }
}
