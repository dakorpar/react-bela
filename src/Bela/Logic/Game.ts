import {CardColor} from "./Card";
import {Player} from "./Player";
import {Dealer} from "./Dealer";
import {CardHelper} from "./CardHelper";

export class Game {

    private dealer: Dealer;
    private player: Player;
    private computer: Player;
    private cardStrengthHelper: CardHelper;
    private mainColor: CardColor|null = null;

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
