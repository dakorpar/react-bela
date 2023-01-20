import {Card} from "./Card";

export class Player {

    private name: string;
    private cards: Array<Card> = new Array<Card>();

    public constructor(name: string) {
        this.name = name;
    }

    public addCards(cards: Array<Card>): void
    {
        this.cards = [...this.cards, ...cards];
    }


    public removeCard(index: number): void
    {
        this.cards.splice(index, 1);
    }

    public clearCards(): void
    {
        this.cards = new Array<Card>();
    }

    public getCards(): Array<Card>
    {
        return this.cards;
    }
}
