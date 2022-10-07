import React from 'react';

export const fetchEffect = (url: string, id?: number) => {

  const [data, setData]=React.useState();
  const [loading, setLoading]=React.useState<boolean>(true);

  let newURL: string;

  id ? newURL=`${url}/${id}` : newURL=url;

  React.useEffect(()=>{
    (async ()=> {
      try {
        const resp=await fetch(newURL);
        const result=await resp.json();
        setData(result);
        setLoading(false);
        
      } catch (error) {
        console.log(error);
      };
    })();
  }, [url, id]);

  return {data, loading};
};
