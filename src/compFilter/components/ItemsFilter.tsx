import React from 'react';
import { keysInformationPeople, propertiesKeys } from '../@types/InformationPeople';

interface Props {
    arrayPropertiesCheck: propertiesKeys;
    setArrayPropertiesCheck: React.Dispatch<React.SetStateAction<propertiesKeys>>;
    //El tipo, sale de la definición de setSearchBy en CompFilter.tsx
    setSearchBy: React.Dispatch<React.SetStateAction<keysInformationPeople[]>>;
};

const ItemsFilter: React.FC<Props> = ({arrayPropertiesCheck, setArrayPropertiesCheck, setSearchBy}) => {
  return (
    <>
        {
            Object.keys(arrayPropertiesCheck).map(item=>{
                console.log(item);
                const objectIterable=arrayPropertiesCheck[item as keysInformationPeople];
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
                                    ? setSearchBy(prevSearch=>[...prevSearch, target.name as keysInformationPeople])
                                    : setSearchBy(prevSearch=>prevSearch.filter(item=>item !== target.name))
                                setArrayPropertiesCheck(prevState=>{
                                    return {
                                        ...prevState,
                                        [target.name]: {
                                            ...prevState[target.name as keysInformationPeople],
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
