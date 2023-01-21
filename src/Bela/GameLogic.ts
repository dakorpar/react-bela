import {CardColor} from "../Common/Card";
import {CardHelper} from "./CardHelper";
import {Dealer} from "../Common/Dealer";
import {Player} from "../Common/Player";

export class GameLogic {

    private dealer: Dealer;
    private player: Player;
    private computer: Player;
    private cardStrengthHelper: CardHelper;
    private mainColor: CardColor|null = null;

    public playerScore: number = 0;

    public computerScore: number = 0;

    constructor() {
        this.dealer = new Dealer();
        this.player = new Player('Dalibor');
        this.computer = new Player('Computer');
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

    public getPlayer(): Player
    {
        return this.player;
    }

    public setMainColor(color: CardColor): void
    {
        this.mainColor = color;
    }
}
