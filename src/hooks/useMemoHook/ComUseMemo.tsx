import React from 'react';

const ComUseMemo = () => {
    const [number, setNumber]=React.useState(0);
    const [number1, setNumber1]=React.useState(0);
    const [number2, setNumber2]=React.useState(0);

    React.useMemo<number>(()=>{
        console.log('Hola desde useMemo para la suma');
        return number1+number;
    }, [number, number1]);

    const makeAdd=(()=>{
        return number+number1
    })();

  return (
    <div>
        <p>ComUseMemo</p>
        <InputGeneric
            onChange={({target})=>setNumber(parseFloat(target.value))}
            value={number}
            type='number'
        />
        <InputGeneric
            onChange={({target})=>setNumber(parseFloat(target.value))}
            value={number}
            type='number'
        />
        <InputGeneric
            onChange={({target})=>setNumber(parseFloat(target.value))}
            value={number}
            type='number'
        />
        <div className="operaciones">
            <h3>Suma {makeAdd}</h3>
        </div>
    </div>
  );
};

interface IInputGeneric extends React.DetailedHTMLProps<React.InputHTMLAttributes<HTMLInputElement>, HTMLInputElement> {

};

const InputGeneric: React.FC<IInputGeneric>=({
    type, value, onChange
})=>{
    return <input type={type} name="" id="" onChange={onChange} value={value} />
};

export default ComUseMemo;