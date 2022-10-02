import React from 'react';
import { IInformationPeople, people } from '../usuarios/data/usuariosDB';
import { searchGeneric } from '../usuarios/searchGeneric';
import { SelectData } from './components/SelectData';
import { useState } from 'react';
import ViewCheckLabel from './components/ViewCheckLabel';
import InputSearch from './components/InputSearch';
import { keysInformationPeople, propertiesKeys } from './@types/InformationPeople';
import ItemsFilter from './components/ItemsFilter';

export const CompFilter = () => {

    const [query, setQuery]=useState<string>('');
    //Arreglo para los elementos check, las propiedades a filtrar
    // const [arrayPropertiesCheck, setArrayPropertiesCheck]=useState(
    //     //A c/prop le asignará el nombre y definirá su estado check en false
    //     Object.keys(people[0]).map(item=>(
    //         {
    //             name: item, 
    //             isChecked: false
    //         }
    //     ))
    // );
    const [arrayPropertiesCheck, setArrayPropertiesCheck]=useState<propertiesKeys>(
        {
            id: { isChecked: false, name: 'id'},
            first_name: { isChecked: false, name: 'first_name'},
            last_name: { isChecked: false, name: 'last_name'},
            email: { isChecked: false, name: 'email'},
            gender: { isChecked: false, name: 'gender'}
        }
    );

    //Arreglo para mostrar los elementos filtrados
    const [searchBy, setSearchBy]=useState<Array<keysInformationPeople>>([]); 

    type properties=keyof IInformationPeople;
    // const propertiesArray:Array<properties>=Object.keys(people[0]) as properties[];
    console.log(people[0]);
    
  return (
    <div>
        <SelectData />
        <InputSearch query={query} setQuery={setQuery} />
        <ItemsFilter 
            arrayPropertiesCheck={arrayPropertiesCheck} 
            setArrayPropertiesCheck={setArrayPropertiesCheck}
            setSearchBy={setSearchBy}    
        />
        {/* <ViewCheckLabel /> */}
        {/* {
            arrayPropertiesCheck.map(item=>{
                const letter=item.name.charAt(0).toUpperCase();
                const rest=item.name.slice(1);
                const word=letter+rest;
                return (
                <div key={item.name} >
                    <input 
                        type="checkbox" 
                        name={item.name} 
                        value={item.name} 
                        id={item.name} 
                      
                    />
                    <label htmlFor={item.name}>{`${word.replaceAll('_', ' ')}`}</label>
                </div>
            )})
        } */}

        {
            people
                .filter(item=>searchGeneric(item, searchBy, query))
                .map(item=>(
                        <p key={item.id} >{item.email}</p>
                    )
                )
        }
    </div>
  );
};
