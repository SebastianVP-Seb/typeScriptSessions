import React from 'react';
import { IInformationPeople } from '../../usuarios/data/usuariosDB';
import { IRandomData } from '../../usuarios/data/randomData';
import { IProviderData, keyofIProviderData } from '../CompFilter';

interface Props {
  data: IProviderData;
  selecData: (dataSelected: keyofIProviderData)=>void;
};

export const SelectData = ({data, selecData}: Props) => {

  return (
    <select name='' id='' onChange={e=>selecData(e.target.value as keyofIProviderData)}>
      {
        Object.keys(data).map(item=>
          (<option key={item} value={item}>{item}</option>))
      } 
    </select>
  );
};
