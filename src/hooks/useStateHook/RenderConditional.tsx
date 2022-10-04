import React from 'react';

const RenderConditional = () => {

    const [state, setState]=React.useState(false);
    const [componente, setComponente]=React.useState(<Sebastian />);

    const handleChange=()=>{
        setState(prevState=>!prevState);
        setComponente(state ? (<Sebastian />) : (<Jade />));
    };

  return (
    <>
        <div>RenderConditional</div>
        <label htmlFor="inputCheck">{state ? 'Activado' : 'Desactivado'}</label>
        <input
            id='inputCheck'
            type='checkbox'
            name='inputCheck'
            checked={state}
            onChange={handleChange}
        />
        {
            componente
        }
    </>
  );
};

const Sebastian=()=><h2>Hello I'm Sebastian</h2>;
const Jade=()=><h2>Hello I'm Jade</h2>;

export default RenderConditional;