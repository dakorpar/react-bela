import {Card, CardColor, CardName} from "../Data/Card";
import {Cards} from "../Data/Cards";

export class DealerLogic {

    private cards: Cards = new Cards([]);

    public shuffle(): void {
        this.cards = new Cards([]);

        for (let color in CardColor) {
            if (isNaN(Number(color))) {
                continue;
            }

            for (let value in CardName) {
                if (isNaN(Number(value))) {
                    continue;
                }
                this.cards.cards.push(new Card(Number(color), Number(value)));
            }
        }
    }

    public dealCards(count:number = 1): Array<Card> {
        let cards = new Array<Card>();
        for(let i=0; i < count; i++) {
            cards.push(this.cards.cards.splice(Math.floor(Math.random() * this.cards.cards.length), 1)[0]);
        }

        return cards;
    }
}
