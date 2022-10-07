import React from 'react';
import { fetchEffect } from './useFetch';

const CompUseEffect: React.FC = () => {

    const [count, setCount]=React.useState<number>(17);
    const [count1, setCount1]=React.useState<number>(7);
    const [check, setCheck]=React.useState(false);

    React.useEffect(()=>{
        //Todo aquí se ejecuta al menos una vez
        console.log('hola desde useEffect para count');

    }, [count]); //vars a escuchar para ejecutarse

    React.useEffect(()=>{
        //Todo aquí se ejecuta al menos una vez
        console.log('hola desde useEffect para count1');

    }, [count1]); //vars a escuchar para ejecutarse

    const add=()=>{
        setCount(prevState=>prevState+1);  
    };

    const subs=()=>{
        setCount1(prevState=>prevState-1);
    };

    const handleChangeCheck=()=>setCheck(prevState=>!prevState);

  return (
    <div>
        <p>CompUseEffect</p>
        <input type="checkbox" onChange={handleChangeCheck} />
        {
            check
                ? (
                    <>
                        <p>Count: {count}</p>
                        <ChildCount estadoContador={count} nombreComp={count.toString()}/>
                    </>
                )
                : (
                    <>
                        {/* <p>Count1: {count1}</p>
                        <ChildCount estadoContador={count1} nombreComp={count1.toString()}/> */}
                    </>
                )
            }
        <button onClick={add} >Para count +</button>
        <button onClick={subs} >Para count 1-</button>
    </div>
  );
};

export default CompUseEffect;

let interval: NodeJS.Timer ; //

const ChildCount=({estadoContador, nombreComp}:{estadoContador: number, nombreComp: string})=>{

    const [value, setValue]=React.useState<string>('');
    const [counterLocal, setCounterLocal]=React.useState<number>(estadoContador);

    React.useEffect(()=>{
        // setValue(nombreComp);
        // setCounterLocal(estadoContador);
        // console.log('Hola desde el useEffect del comp hijo');
        // console.log(`El contador es: ${estadoContador}`);
        // console.log(`El componente es ${nombreComp}`);
        interval=setInterval(()=>{
            console.log('Interval ejecutado');
        }, 1000);

        window.addEventListener('resize', console.log);

        return ()=>{
            console.log('Limpieza del useEffect');
            clearInterval(interval);
            window.removeEventListener('resize', console.log);
        };
    // }, [nombreComp, estadoContador]);
    }, [estadoContador]);
    /*Con el arreglo vacío el efecto ya no se vuelve a ejecutar aunque el comp padre se vuelva a renderizar, este comp
    hijo no se volvió a montar, sólo se actualizó */

    const handleConuntLocal=()=>{
        setCounterLocal(prevState=>prevState+1);
    };

    

    return (
        <>
            <hr />
            <p>{`Contador padre: ${estadoContador}`}</p>
            <p>{`Contador hijo: ${counterLocal}`}</p>
            <p>{nombreComp}</p>
            <p>Child Count: {estadoContador}</p>
            <input type="text" value={value} onChange={({target})=>setValue(target.value)} />
            <p>Texto: {value}</p>
            <hr />
            <hr />
            <p>{`El contador local está en ${counterLocal}`}</p>
            <button onClick={handleConuntLocal} >Contador Local</button>
        </>
    );
};