import React from 'react';

const BounceEffect = () => {

    const [typing, setTyping]=React.useState(false);

    document.addEventListener('keydown', (e)=>{
        setTyping(e.isTrusted);
    });

    document.addEventListener('keyup', (e)=>{
        console.log(e)
        setTyping(e.cancelBubble)
    });

    // React.useEffect(()=>{
    //     typing ? (console.log('is true')) : (console.log('is false'))

    // });
    console.log({typing});
  return (
    <div>
        <p>BounceEffect</p>
        <input type="text" />
        {
            typing
                ? (<p>Typing...</p>)
                : (<></>)
        }
    </div>
  );
};

export default BounceEffect;