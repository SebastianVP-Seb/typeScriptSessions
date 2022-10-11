import React from 'react';
import { IInputsFields } from '../useStateHook/fieldsInput';

export type TypeInput = 'text' | 'email' | 'tel' | '';

interface IInput { 
    type: TypeInput; 
    id: string; 
    label: string;
    value: string;
    // onChangeValue: React.Dispatch<React.SetStateAction<string>>; //hover a un useState de FormElement
    //no se usará el de arriba porque ya no permitiría controlarlo
    //se necesita nombre y value
    onChangeValue: (name: keyof IInputsFields, value:  string)=>void;
    // ref: React.RefObject<HTMLInputElement>
};

const InputGeneric:React.FC<IInput> = ({id, label, type, value, onChangeValue}) => {

    const inputRef=React.useRef<HTMLInputElement>(null);

  const handleOnChange=(e: React.ChangeEvent<HTMLInputElement>)=>{
    // e.target.name;
    // e.target.value;
    onChangeValue(e.target.name as keyof IInputsFields , e.target.value);
  };

  return (
    <>
      <div className="label_input">
          <label htmlFor={id}>{label}</label>
          <input
            ref={inputRef}
            type={type} 
            name={id}
            id={id}
            value={value}
            onChange={handleOnChange}
          />
      </div>
    </>
  );
};

export default InputGeneric;