import React from 'react';
import { searchGeneric } from './searchGeneric';
import { randomData } from './data/randomData';
import { sortFunction } from './sortGeneric';
import { people } from './data/usuariosDB';

export const CompUsers = () => {

    const searching=(query: string)=>{
        return randomData.filter(item=>searchGeneric(item, ['text'], query));
    };
    const hola=searching('sem');
    console.log(hola);


    //ordena en orden alfabético
    const orderBy=randomData.sort((prev, compare)=>
        sortFunction(prev, compare, 'country'));
    console.log(orderBy);

    //combinando ambas funciones
    const mixFunctions=people
        .filter(item=>searchGeneric(item, ['last_name', 'first_name'], 'tea'))
        .sort((prev, compare)=>sortFunction(prev, compare, 'email'));

    console.log(mixFunctions);

    console.log

  return (
    <div>
        <p>CompUsers</p>
        <h4>Sebastian</h4>
    </div>
  );
};
