import React from 'react';

let interval: NodeJS.Timer; // El intervalo debe ser declarado por fuera del comp para que funcione

const Cronometro: React.FC = () => {
    
    const initValue:number=7;

    const [segundos,setSegundos]=React.useState<number>(initValue);
    const [vuelta, setVuelta]=React.useState<boolean>(false);

    // React.useEffect(()=>{
    //     if(vuelta) {
    //         interval=setInterval(()=>{
    //             setSegundos(prevState=>prevState+1);
    //         },1000);
    //     }
    //     return (()=>clearInterval(interval));
    // },[vuelta]);

    const handleStart=()=>{
        setVuelta(true);
        interval=setInterval(()=>{
            setSegundos(prevState=>prevState+1);
        },1000);
    };

    const handleStop=()=>{
        setVuelta(false);
        clearInterval(interval);
    };

    const handleReset=()=>setSegundos(initValue);

  return (
    <div>
        <p>{segundos}</p>
        {/*vuelta ? true : false */}
        <button disabled={vuelta} onClick={handleStart}>Start</button>
        {/* vuelta ? false : true */}
        <button disabled={!vuelta} onClick={handleStop}>Pause</button>
        <button disabled={vuelta || segundos===7 ? true : false} onClick={handleReset}>Reset</button>
    </div>
  );
};

export default Cronometro;