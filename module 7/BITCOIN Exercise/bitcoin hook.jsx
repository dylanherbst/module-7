import { useState, useEffect, useReducer } from "react";
import axios from "axios";


export function useExchange(url, dependency) {
    // state variable for holding fetched json data
    const [apiResult, dispatch] = useReducer(reducer, { // initial state for postsResult state variable
        loading: true, // true when loading and no data in posts
        data: [], // empty until data is fetched
        error: '' // empty unless there was an error
        })

useEffect(() => {
    if (url)
    axios.get(url) // modify this URL to test the error case
    .then(response => {
    // object passed to dispatch holds all data needed for updating state: both type of update and associated data
    dispatch({ type: "FETCH_SUCCESS", payload: response.data }) // dispatch calls reducer function and triggers re-render
    })
    .catch(error => {
    dispatch({ type: "FETCH_ERROR", payload: error.message }) // lets us handle different types of state changes differently
    })
    }, [url, dependency]);

    return apiResult;
 }

 function reducer (apiResult, action) {
    switch (action.type) {
    case 'FETCH_SUCCESS':
    return { loading: false, data: action.payload, error: '' }
    case 'FETCH_ERROR':
    return { loading: false, data: [], error: action.payload }
    default:
    return { ...apiResult, loading: false }
    }
    }



    //OLD HOOK 
        
//     useEffect(() => {
//     if (url) {
//         console.log('running initiated');
//     let ignore = false;
//     fetch(url)
//     .then(response => response.json())
//     .then(json => {
//         let priceData = json[dependency];
//         if (priceData) {
//             setData(priceData.last);
//         }
//     });
//     console.log('cleanup initiated');
//     return () => { ignore = true; };
//     }
//     }, [url, dependency]); // re-run effect if url changes
    
//     return [data, setData] ;
// }
