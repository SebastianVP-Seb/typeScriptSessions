import React from 'react';
import './counterBox.css';

const BOXES: Array<number>=[4, 3, 2, 50, 60, 70, 1];

const CountersBox: React.FC = () => {

    const [counter, setCounter]=React.useState<number>(0);

    console.log('renderizando');
    // React.useEffect(()=>{
    // });

    const handleAdd=React.useCallback((item: number)=>{
        setCounter(prevState=>prevState+item);
        console.log(`Click en ${item}`);
    }, [BOXES]);

  return (
    <div>
        <p>CountersBox</p>
        <p>{counter}</p>
        <div className="container_box">
            {
                BOXES.map(item=>{
                    return <BoxCounter key={item} item={item} handleAdd={()=>handleAdd(item)} />
                })
            }
        </div>
    </div>
  );
};

export default CountersBox;

const BoxCounter=React.memo(({item, handleAdd}: {item: number, handleAdd: ()=>void})=>{

    console.log('Renderizando CountersBox');

    return (
        <button className='counters_box-btn' onClick={handleAdd}>+ {item}</button>
    );
});