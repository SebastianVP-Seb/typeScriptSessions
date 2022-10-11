import React from 'react';
import './focusElement.css';

const FocusElement = () => {

    const refDiv=React.useRef<HTMLDivElement>(null);

    const handleFocusDiv=()=>  refDiv.current?.scrollIntoView();

  return (
    <div className='focus_element'>
        <p>FocusElement (hacer scroll hacia abajo)</p>
        <div className="container_alert">
            <div ref={refDiv} className="focus_element_alert">
                iAmSebastian
            </div>
        </div>
        <div className="container_btn_ref">
            <button
                className='focus_element-btn'
                onClick={handleFocusDiv}
            >Volver arriba</button>
        </div>
    </div>
  );
};

export default FocusElement;