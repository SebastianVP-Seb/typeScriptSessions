import React from 'react';
import RenderConditional from './RenderConditional';

const CompUseState = () => {

  const newFunction=(initValue: number)=>initValue+5;

    const [count, setCount]=React.useState(0);
    const [count2, setCount2]=React.useState(()=>{
        //f con un cálculo muy grande o consulta a API, sólo funcionan para inicializar, 
        //esto no se vuelve a ejecutar
        newFunction(5)
        let newState=count+10;
        newState=newFunction(newState);
        console.log('Renderizando desde el inicio del callback')
    });

    const add=()=>setCount(prevState=>prevState+1);
    const substract=()=>setCount(prevState=>prevState-1);

  return (
    <>
        <div>CompUseState</div>
        <button onClick={add} >+</button>
        <label htmlFor="">{count}</label>
        <button onClick={substract} >-</button>
        <RenderConditional />
    </>
  );
};

export default CompUseState