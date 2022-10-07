import React from 'react';
import { fetchEffect } from '../useFetch';

const URL='https://jsonplaceholder.typicode.com/users';
const DOC_TITLE='React/ts';
const SELECT_OPTION='Select an option';

export interface IShowComp {
    id: number;
};

const ShowCompInfo: React.FC<IShowComp> = ({id}) => {

    const [title, setTitle]=React.useState<string>(DOC_TITLE);

    const info=fetchEffect(URL, id);
    const {data, loading}=info;

    // React.useEffect(()=>{
    //     // title===SELECT_OPTION 
    //     //     ? document.title = DOC_TITLE
    //     //     : document.title=data.name;

    // }, [data.name]);

  return (
    <div>
        {
            loading
                ? (<></>)
                : (<>
                    <p>Nombre: {data.name}</p>
                    <p>Usuario: {data.username}</p>
                    <p>Phone: {data.phone}</p>
                    <p>Email: {data.email}</p>
                    <p>WebSite: {data.website}</p>
                </>)
        }
    </div>
  );
};

export default ShowCompInfo;