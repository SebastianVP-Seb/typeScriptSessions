import { IInformationPeople, people } from '../usuarios/data/usuariosDB';
import { searchGeneric } from '../usuarios/searchGeneric';
import { SelectData } from './components/SelectData';
import { useState } from 'react';
import InputSearch from './components/InputSearch';
import ItemsFilter from './components/ItemsFilter';
import { createObjectForCheckBoxFilter, propertiesKeys } from './utils/createObjectForCheckBoxFilter';
import { randomData, IRandomData } from '../usuarios/data/randomData';

export interface IProviderData {
    informationPeople: IInformationPeople[];
    randomData: IRandomData[];
};

export type keyofIProviderData = keyof IProviderData;

type mergeDataInterface = propertiesKeys<IInformationPeople | IRandomData>

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
    const [arrayPropertiesCheck, setArrayPropertiesCheck]=useState<mergeDataInterface>(
        createObjectForCheckBoxFilter({objectModel: people[0]})
    );

    //Arreglo para mostrar los elementos filtrados
    const [searchBy, setSearchBy]=useState<Array<keyof mergeDataInterface>>([]); 

    //Para montar la data filtrada
    const [dataView, setDataView]=useState<Array<mergeDataInterface>>(people);

    // type properties=keyof IInformationPeople;
    // const propertiesArray:Array<properties>=Object.keys(people[0]) as properties[];
    // console.log(people[0]);

    const provider: IProviderData = {
        informationPeople: people,
        randomData: randomData
    };

    // define el arreglo a usar en el selector de data 
    const handleChangeData=(dataSelected:keyof IProviderData)=>{
        const dataSelectedArray=provider[dataSelected];
        // console.log(provider[dataSelected]);//muestra los datos
        setArrayPropertiesCheck(createObjectForCheckBoxFilter({objectModel: dataSelectedArray[0]}));
        setDataView(dataSelectedArray);
    };
    
  return (
    <div>
        <SelectData data={provider} selecData={handleChangeData} />
        <InputSearch query={query} setQuery={setQuery} />
        <ItemsFilter<mergeDataInterface> 
            arrayPropertiesCheck={arrayPropertiesCheck} 
            setArrayPropertiesCheck={setArrayPropertiesCheck}
            setSearchBy={setSearchBy}    
        />
        {
            dataView
                .filter(item=>searchGeneric(item, searchBy, query))
                .map((item1, index)=>(
                        <pre key={index}>
                            <code>
                                {
                                    JSON.stringify(item1, null, 2)
                                }
                            </code>
                        </pre>
                    )
                )
        }
    </div>
  );
};
