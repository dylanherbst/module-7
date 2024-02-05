import {useEffect } from './react'



useEffect(() => {
    console.log('running effect');
    let ignore = false; // flag to allow ignoring of the fetch result
    
    fetch('api url')
    .then(response => response.json())
    .then(json => {
    // only update state if the effect is still valid
    // ie. the dependency hasn't changed since the request
    if (!ignore) 
    console.log('Fetched Data:', json);
    });
    
    // cleanup function - runs when unmounted or dependencies change
    return () => {
    ignore = true; // ignore now invalid fetch results
    console.log('cleanup effect');
    };
    }, [dependencies]); // effect dependencies
    // ++ Watch/edit the console log messages when using this component to
    // understand when the effect and its cleanup
