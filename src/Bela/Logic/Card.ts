export class Card{
    public color: number;

    public value: number;

    constructor(color: number, value: number) {
        this.color = color;
        this.value = value
    }
}

export enum CardColor {
    Yellow=1,
    Green,
    White,
    Red
}

export enum CardName {
    Seven,
    Eight,
    Nine,
    Ten,
    Jack,
    Queen,
    King,
    Ace
}
