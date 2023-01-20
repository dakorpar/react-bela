export class Card{
    public color: number;

    public value: number;

    constructor(color: number, value: number) {
        this.color = color;
        this.value = value
    }
}

export enum CardColor {
    Yellow,
    Green,
    White,
    Red
}

export enum CardValue {
    Seven,
    Eight,
    Nine,
    Ten,
    Jack,
    Queen,
    King,
    Ace
}
