import { useState, useEffect } from 'react';

function SyncInputs () {

const [input1, setInput1] = useState('')
const [input2, setInput2] = useState('')

const handleInput1 = (e) => {
    setInput1(e.target.value)
}

const handleInput2 = (e) => {
    setInput2(e.target.value)
}


useEffect(() => {
    // Update secondInput whenever firstInput changes
    setInput2(input1);
}, [handleInput1, handleInput2]); // Dependency array with firstInput



    return (
        <div>
        <form>
        <input type='text' name="input1" value={input1} onChange={handleInput1} placeholder='Message To Sync Goes Here'/>
        <input type='text' name="input2" value={input2} onChange={handleInput2} placeholder='...Ill copy what they say' />
        </form>
        </div>
    )
}


export default SyncInputs
