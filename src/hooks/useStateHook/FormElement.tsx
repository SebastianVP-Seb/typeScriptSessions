import React from 'react';
import InputGeneric from './InputGeneric';
import { useState } from 'react';
import { IInputsFields, ObjectInputsFields } from './fieldsInput';

const FormElement = () => {

  // const [name, setName]=useState('');
  // const [address, setAddress]=useState('');
  // const [email, setEmail]=useState('');
  // const [phone, setPhone]=useState('');

  const [valuesForm, setValuesForm]=useState<IInputsFields>(ObjectInputsFields);
  const [keysForForm, setKeysForForm]=useState<Array<keyof IInputsFields>>(
    ()=>Object.keys(valuesForm) as Array<keyof IInputsFields>
  );
  // setKeysForForm([]) para comprobar que da el tipado

  const handleSubmit=(e: React.FormEvent<HTMLFormElement>)=>{
      e.preventDefault();
      console.log(e);
      // console.log({
      //   name, address, email, phone
      // }); //Se visualizan los datos introducidos en el Form: con los 4 estados sup
      console.log(valuesForm);
  };

  const handleOnChangeInput=(name: keyof IInputsFields, value: string)=>{
    if(valuesForm[name].regExp?.test(value)) {
      console.log({name, value});
      setValuesForm(prevState=>{
        return {
          ...prevState,
          [name]: {...prevState[name], value}
        };
      });
    };
  };

  const CreateForm=()=>{
     return keysForForm.map(item=>{
      const fieldItem=valuesForm[item]; //iterará c/elemento de keys para generar un estado a c/uno
      // fieldItem.label Da el autocompletado
      return (
        <InputGeneric 
          id={fieldItem.name}
          label={fieldItem.label}
          value={fieldItem.value}
          type={fieldItem.type}
          onChangeValue={handleOnChangeInput}
          key={fieldItem.name}
        />
      )
    })
  };

  return (
    <>
        <div>FormElement</div>
        <form onSubmit={handleSubmit} >

            {
              CreateForm() 
            }

            {/* <InputGeneric id='name' label='Name' type='text' value={name} onChangeValue={setName} />
            <InputGeneric id='phone' label='Phone' type='tel' value={phone} onChangeValue={setPhone} />
            <InputGeneric id='email' label='Email' type='email' value={email} onChangeValue={setEmail} />
            <InputGeneric id='address' label='Address' type='text' value={address} onChangeValue={setAddress} /> */}
            <button type='submit' >Enviar</button>
        </form>
    </>
  );
};

export default FormElement;



//Nombre
//email
//tel
//dirección