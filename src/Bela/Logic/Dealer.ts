import {Card, CardColor, CardValue} from "./Card";

export class Dealer {

    private cards: Array<Card> = new Array<Card>();

    public shuffle(): void {
        this.cards = new Array<Card>();

        for (let color in CardColor) {
            if (isNaN(Number(color))) {
                continue;
            }

            for (let value in CardValue) {
                if (isNaN(Number(value))) {
                    continue;
                }
                this.cards.push(new Card(Number(color), Number(value)));
            }
        }
    }

    public dealCards(count:number = 1): Array<Card> {
        let cards = new Array<Card>();
        for(let i=0; i < count; i++) {
            cards.push(this.cards.splice(Math.floor(Math.random() * this.cards.length), 1)[0]);
        }

        return cards;
    }
}
