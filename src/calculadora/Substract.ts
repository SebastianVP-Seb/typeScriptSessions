import { Totalizer } from "./Totalizer";

// Genial Sebastian, te comento que he procedido a ingresar tu solicitud con el número de caso 51577380, el cual te va a servir de mucho cuando trates de comunicarte con nosotros en nuestros canales de Atención. 
export class Substract extends Totalizer {
    constructor(number1: number, number2: number) {
        super(number1, number2);
    };

    operation(): number | number[] {
        //Super manda a llamar los valores y métodos de la clase padre
        const value=super.operation();
        console.log(value); // arreglo con los dos números que se le pasan en el llamado de add
        // console.log(typeof value)
        // const [first, second]=value<Array>:[number2 | this.number1]; 
        const [first, second]=typeof value === 'object' ? value : [0,0];
        return first-second;
        // return value;
    };
};