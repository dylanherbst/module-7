import { useState, useEffect } from 'react';

function SyncInputs () {

// const [input1, setInput1] = useState('')
// const [input2, setInput2] = useState('')
const [input, setInput] = useState('')

// const handleInput1 = (e) => {
//     setInput1(e.target.value)
// }

// const handleInput2 = (e) => {
//     setInput2(e.target.value)
// }

const handleInput = (e) => {
    setInput(e.target.value)
}


// useEffect(() => {
//     // Update secondInput whenever firstInput changes
//     setInput(input);
// }, [input]); // Dependency array with firstInput



    return (
        <div>
        <form>
        <input type='text' name="input1" value={input} onChange={handleInput} placeholder='Message To Sync Goes Here'/>
        <input type='text' name="input2" value={input} onChange={handleInput} placeholder='...Ill copy what they say' />
        </form>
        </div>
    )
}


export default SyncInputs
