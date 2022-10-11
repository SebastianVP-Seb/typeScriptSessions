import React from 'react';

const Coordenadas = () => {

    const [coorX, setCoorX]=React.useState(0);
    const [coorY, setCoorY]=React.useState(0);

    const handleMousePosition=(e: MouseEvent)=>{
        setCoorX(e.clientX)
        setCoorY(e.clientY);
    };
    
    React.useEffect(()=>{
        window.addEventListener('mousemove', handleMousePosition);

        return ()=>{
            window.removeEventListener('mousedown', handleMousePosition);
        };

    }, [coorX, coorY]);

  return (
    <div>
        <p>Coordenadas mouse</p>
        <div className="coordenaY:das_mouse">
            <p>X: {coorX}</p>
            <p>Y: {coorY}</p>
        </div>
    </div>
  );
};

export default Coordenadas;