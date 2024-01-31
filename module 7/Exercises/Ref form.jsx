import React, { useState, useEffect, useRef } from 'react';

function RefForm () {

const [userName, setUserName] = useState('')
const userRef = useRef(null);

const handleUserInput = (e) =>{
setUserName(e.target.value)
}

const handleSubmit = (e) => {
e.preventDefault();
const currentUserName = userRef.current.value;
    alert(`Your account UserName: "${currentUserName}" was succesfully created`)

}

React.useEffect(() =>{
    userRef.current.focus();
},[])

    return (
        <form onSubmit={handleSubmit}>  
        <input type='text' name="userName" placeholder='Enter UserName...'  ref={userRef} value={userName} onChange={handleUserInput}/>
        <button type="submit">Submit</button>
        </form>
    )
}

export default RefForm

