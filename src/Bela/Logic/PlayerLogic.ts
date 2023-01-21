import {Card} from "../Data/Card";
import {Cards} from "../Data/Cards";

export class PlayerLogic {

    private name: string;
    private cards: Cards = new Cards([]);

    public constructor(name: string) {
        this.name = name;
    }

    public addCards(cards: Array<Card>): void
    {
        this.cards.cards = [...this.cards.cards, ...cards];
    }


    public removeCard(index: number): void
    {
        this.cards.cards.splice(index, 1);
    }

    public clearCards(): void
    {
        this.cards.cards = new Array<Card>();
    }

    public getCards(): Cards
    {
        return this.cards;
    }
}
