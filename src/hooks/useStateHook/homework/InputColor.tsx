import React from 'react';
import './inputColor.css';

const InputColor: React.FC = () => {

  const [inputColor, setInputColor]=React.useState<string>('00000');

  const handleChange=(e: React.ChangeEvent<HTMLInputElement>)=>{
    setInputColor(e.target.value.slice(1,7));
    console.log(e.target.value)
    console.log(inputColor)
    const color:string=inputColor.slice(1,7);
  };

  return (
    <div>
        <h2>InputColor</h2>
        <input type='color' value={`#${inputColor}`} onChange={handleChange} className='inputCenter' />
        <img src={`https://via.placeholder.com//300/${inputColor}`} alt="Imagen colores" />
    </div>
  );
};

export default InputColor;