import React from 'react';
import { fetchEffect } from '../useFetch';
import './changeTitle.css';
import ShowCompInfo from './ShowCompInfo';
import { IShowComp } from './ShowCompInfo';

const URL='https://jsonplaceholder.typicode.com/users';
const DOC_TITLE='React/ts';
const SELECT_OPTION='Select an option';

const ChangeDocumentTitle: React.FC = () => {

    const [title, setTitle]=React.useState<string>(DOC_TITLE);
    const [showData, setShowData]=React.useState<boolean>(false);
    const [itemSelected, setItemSelected]=React.useState();

    const information=fetchEffect(URL);
    const {data, loading}=information;

    console.log(data)

    React.useEffect(()=>{
        title===SELECT_OPTION 
            ? document.title = DOC_TITLE
            : document.title=title;

        // setItemSelected()
        
    }, [title]);

    const handleShowData=()=>{
        setShowData(prevState=>!prevState);
    };

    const handleUserName=(e)=>{
        console.log(e.target.value);
        setTitle(e.target.value);
        // setItemSelected()
        setItemSelected(e.target.value);
    };

  return (
    <div>
        <p>ChangeDocumentTitle</p>
            <div className="changeTitle">
                <select name="" id="" onChange={handleUserName} >
                    <option>{SELECT_OPTION}</option>
                    {
                        loading 
                        ? (<p>Cargando datos</p>)
                        : ( data.map(item=>{
                        
                        return (<option value={item.id}>{item.name}</option>)}) )
                    }
                </select>
                <p>Mostrar componente</p>
                <input type="checkbox" name="" id="" onChange={handleShowData} disabled={!itemSelected} />
            </div>
                {
                    showData
                        ? ( <ShowCompInfo id={itemSelected as keyof IShowComp} /> )
                        : (<></>)
                }
    </div>
  );
};

export default ChangeDocumentTitle;