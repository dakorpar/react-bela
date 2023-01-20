import {CardName} from "./Card";

export class CardHelper {
    public mainColorValues: {[key: number]: number} = {};

    public regularValues: {[key: number]: number} = {};

    public friendlyNumber: {[key: number]: number} = {};

    constructor() {
        this.regularValues[CardName.Seven] = 0;
        this.regularValues[CardName.Eight] = 0;
        this.regularValues[CardName.Nine] = 0;
        this.regularValues[CardName.Ten] = 10;
        this.regularValues[CardName.Jack] = 2;
        this.regularValues[CardName.Queen] = 3;
        this.regularValues[CardName.King] = 4;
        this.regularValues[CardName.Ace] = 11;

        this.mainColorValues = {...this.regularValues};
        this.mainColorValues[CardName.Jack] = 20;
        this.mainColorValues[CardName.Nine] = 14;

        this.friendlyNumber = {...this.regularValues};
        this.friendlyNumber[CardName.Seven] = 7;
        this.friendlyNumber[CardName.Eight] = 8;
        this.friendlyNumber[CardName.Nine] = 9;
    }

    public getRegularValue(name: CardName): number
    {
        return this.regularValues[name];
    }

    public getMainColorValue(name: CardName): number
    {
        return this.mainColorValues[name];
    }

    public getFriendlyNumber(name: CardName): number
    {
        return this.friendlyNumber[name];
    }
}
