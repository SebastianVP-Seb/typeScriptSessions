import React from 'react';
import { fetchEffect } from './useFetch';
import { IComment } from './comment.type';

const URL_COMMENTS='https://jsonplaceholder.typicode.com/posts';
let data: any;

const CompComments = () => {

  const [page, setPage]=React.useState<number>(10);

  React.useEffect(()=>{
    
  }, [page]);
  
  const information=fetchEffect(URL_COMMENTS, page);
  const {data, loading}=information;

  console.log(data);

  const handlePrev=()=>{
    setPage(prevState=>prevState-1);
  };

  const handleNext=()=>{
    setPage(prevState=>prevState+1);
  };

  return (
    <div>
      <p>CompComments</p>
      {
        loading
          ? (<p>Cargando datos</p>)
          : (
            <>
              <p>Página: {page}</p>
              <p>{data.title}</p>
            </>
            )
      }
      <button onClick={handlePrev}>Prev</button>
      <button onClick={handleNext}>Next</button>
    </div>
  );
};

export default CompComments;