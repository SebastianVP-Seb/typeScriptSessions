import React from 'react';

interface Props {
    query: string;
    setQuery: (value: string)=>void;
};

const InputSearch:React.FC<Props> = ({query, setQuery}) => {
  return (
    <input 
        type='text' 
        value={query} 
        onChange={({target})=>setQuery(target.value)} />
  );
};

export default InputSearch;