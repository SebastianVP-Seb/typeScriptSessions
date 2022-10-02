import React from 'react';

export const SelectData = () => {

  const dataSource=[
    {name: 'people'},
    {name: 'random data'}
  ];

  return (
    <select name='' id=''>
      {
        dataSource.map(item=>(<option key={item.name} value=''>{item.name}</option>))
      }
        
    </select>
  );
};
