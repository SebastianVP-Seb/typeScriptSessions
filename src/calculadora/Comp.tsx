import React from 'react';
import { Totalizer } from './Totalizer';
import { Add } from './Add';
import { Substract } from './Substract';
import { Mult } from './Mult';
import { Div } from './Div';

const Comp = () => {
    const Sumando:Totalizer=new Add(10,30);
    console.log(Sumando.operation()); //hace la suma
    
    const operation='OP=13-4';

    type operations = '+' | '-' | '*' | '/';

    const getValuesOfTotalizer=():{
        numbers: Array<string>;
        operationSelected: operations;
    } => {
        const operationsValis:Array<operations>=['+' , '-' , '*' , '/'];
        let numbers: Array<string>=[];
        let operationSelected: operations='*'; 

        operationsValis.forEach(item=> {
            if(operation.split('=')[1].includes(item)) {
                // console.log(operation.split('=')[1])
                console.log(item)
                numbers=operation.split('=')[1].split(item);
                operationSelected=item;//se obtiene la operación
            };
        });
        return { numbers, operationSelected };
    };

    console.log(getValuesOfTotalizer());

    const makeOperation=()=>{

        const { numbers, operationSelected } = getValuesOfTotalizer();
        const [num1, num2]=numbers;

        let resultOperation: Totalizer;

        switch (operationSelected) {
            case '+':
                resultOperation=new Add(parseFloat(num1), parseFloat(num2));
                break;
            case '-':
                resultOperation=new Substract(parseFloat(num1), parseFloat(num2));
                break;
            case '*':
                resultOperation=new Mult(parseFloat(num1), parseFloat(num2));
                break;
            case '/':
                resultOperation=new Div(parseFloat(num1), parseFloat(num2));
                break;
        
            // default:
            //     break;
            };
        return resultOperation.operation();
    };

    console.log(makeOperation());

  return (
    <div>Comp</div>
  );
};

export default Comp;