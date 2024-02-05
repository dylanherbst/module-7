import { useState, useEffect } from 'react';

function ChangeStyle () {
const [style, setStyle] = useState({})

// useEffect (() =>{
//     console.log('Component Updated or Mounted'); 
//     setStyle(style)

//     return () => {
//         console.log('Component Will Unmount or Style Will Change');
//     }

// }, [style])


const handleClick = () => {
    
    if (style.color == 'red') {
        setStyle({})
        console.log('Component Will Unmount or Style Will Change');

    } else {
        console.log('Component Updated or Mounted');
    setStyle({ color: 'red',  backgroundColor: 'lightyellow'})
    }
}


return (
<>
<div>
    
    <input name="input1"   style={style}  placeholder='Input1'></input>
    <input name="input2"   style={style}  placeholder='Input2'></input>
    <button onClick={handleClick}>Change Style</button>
</div>
</>
)
}

export default ChangeStyle