import React from 'react';
import FormElement from './CaptureFormRegister';

interface IObjectRef {
  oldValue: number;
  newValue: number;
};

const CompUseRef = () => {

  //useRef actualiza valores sin volver a renderizar el componente
  console.log('Renderizado del comp');

  const [counter, setCounter]=React.useState<number>(1);

  const valueRef=React.useRef<IObjectRef>({
    oldValue: counter,
    newValue: counter
  });

  const buttonRefIncrement=React.useRef<HTMLButtonElement>(null);
  const inputRef=React.useRef<HTMLInputElement>(null);

  const handleIncrement=()=>{
    // valueRef.current=valueRef.current +1;
    // setCounter(counter+1);
    const newValue=counter+1;
    setCounter(newValue);
    valueRef.current = {
      oldValue: counter,
      newValue
    };
  };

  const printRef=()=>{
    console.log(valueRef);
  };

  const setOldValue=()=>{
    setCounter(valueRef.current.oldValue);
    console.log(buttonRefIncrement.current?.title); //muestra lo que se haya puesto en el title del elemento
  };

  //Hacer focus en un elemento
  const handleFocus=()=>{
    inputRef.current?.focus();
  };

  return (
    <div>
      <p>CompUseRef</p>
      {/* No se actualiza porque el comp no se renderiza al cambiar current de la ref  */}
      {/* <p>Valor de la ref.current: {valueRef.current}</p> */}
      <p>Valor de la ref.current (oldValue): {valueRef.current?.oldValue}</p>
      <p>Valor de la ref.current (newValue): {valueRef.current?.newValue}</p>
      <button 
        ref={buttonRefIncrement} 
        onClick={handleIncrement}
        title='Incrementa el valor del count'
      >Incrementar current</button>
      <button onClick={printRef} >Print ref</button>
      <button onClick={setOldValue}>Set old value</button>
      <input type='text' ref={inputRef} />
      <button onClick={handleFocus}>Enfocar Input</button>

      {/* Para el formulario  */}
      <FormElement />
    </div>
  );
};

export default CompUseRef;
