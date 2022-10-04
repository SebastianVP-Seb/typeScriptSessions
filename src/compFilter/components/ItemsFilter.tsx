import React from 'react';
import { keysInformationPeople } from '../@types/InformationPeople';
import { propertiesKeys } from '../utils/createObjectForCheckBoxFilter';

interface Props<T> {
    arrayPropertiesCheck: propertiesKeys<T>;
    setArrayPropertiesCheck: React.Dispatch<React.SetStateAction<propertiesKeys<T>>>;
    //El tipo, sale de la definición de setSearchBy en CompFilter.tsx
    setSearchBy: React.Dispatch<React.SetStateAction<Array<keyof T>>>;
};

const ItemsFilter= <T extends unknown>({arrayPropertiesCheck, setArrayPropertiesCheck, setSearchBy}: Props<T>) => {
  return (
    <>
        {
            Object.keys(arrayPropertiesCheck).map(item=>{
                // console.log(Object.keys(arrayPropertiesCheck))
                // console.log(item);
                // const objectIterable=arrayPropertiesCheck[item as keysInformationPeople]; Antes de hacerlo genérico
                const objectIterable=arrayPropertiesCheck[item as keyof T];
                const letter=item.charAt(0).toUpperCase();
                const rest=item.slice(1);
                const word=letter+rest;
                return (
                <div key={item} >
                    <input 
                        type="checkbox" 
                        name={objectIterable.name} 
                        value={objectIterable.name} 
                        id={item}
                        onChange={
                            ({target})=>{
                                target.checked
                                    ? setSearchBy(prevSearch=>[...prevSearch, target.name as keyof T])
                                    : setSearchBy(prevSearch=>prevSearch.filter(item=>item !== target.name))
                                setArrayPropertiesCheck(prevState=>{
                                    return {
                                        ...prevState,
                                        [target.name]: {
                                            ...prevState[target.name as keyof T],
                                            isChecked: target.checked
                                        }
                                }})}
                        }
                    />
                    <label htmlFor={item}>{`${word.replaceAll('_', ' ')}`}</label>
                </div>
            )})
        }
    </>
  );
};

export default ItemsFilter;
