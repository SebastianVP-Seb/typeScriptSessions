export interface ICalculator {
    //método
    operation(): number | number[];

    setNumber1(number1: number): void;
    setNumber2(number2: number): void;
};

export class Totalizer implements ICalculator {

    number1: number;
    number2: number;

    constructor(number1: number, number2: number) {
        this.number1=number1;
        this.number2=number2;
    };

    operation(): number | number[] {
        return [this.number1, this.number2];
    };

    setNumber1(number1: number): void {
        this.number1=number1;
    };

    setNumber2(number2: number): void {
        this.number2=number2;
    };
};