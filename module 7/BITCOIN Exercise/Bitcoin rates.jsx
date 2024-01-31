import { useState, useEffect } from "react";
import { useExchange } from "./bitcoin hook";

const currencies = ['USD', 'AUD', 'NZD', 'GBP', 'EUR', 'SGD'];


function BitcoinRates() {
    const [currency, setCurrency] = useState(currencies[0]);


// OLD SET FOR CUSTOM HOOK
    // const [exchangeData, setExchangeData] = useExchange(`https://blockchain.info/ticker`, currency)
    const { loading, data, error } = useExchange(`https://blockchain.info/ticker`, currency);

    const options = currencies.map(curr => <option value={curr} key={curr}>{curr}</option>);
    
    
    return (
        <>
    <div className="BitcoinRates componentBox">
    <h3>Bitcoin Exchange Rate</h3>
    <label>Choose currency:
    <select value={currency} onChange={e => setCurrency(e.target.value)}>
    {options}
    </select>
    {/* <h4> 1 BTC - / {currency} / Price: <strong> ${exchangeData} </strong></h4> */}
    </label>
    {loading && <p>Loading...</p>}
    {error && <p>Error: {error}</p>}

            {data && (
                <div>
                    <h4>1 BTC - {currency}</h4>
                    <p>Price: <strong>${data[currency]?.last}</strong></p>


                </div>
                   )}
                   </div>
    </>
    )
    }

export default BitcoinRates



// OLD useEffect 
//    const [price, setPrice] = useState('');
    // useEffect(() => {
    //     console.log('running initiated');
    //     let ignore = false; // flag to allow ignoring of the fetch result
        
    //     fetch(`https://blockchain.info/ticker`)
    //     .then(response => response.json())
    //     .then(json => {
    //         let priceData = json[currency];
    //         if (priceData) {
    //             setPrice(priceData.last);
    //         }
    //     });

    //     return () => {
    //         ignore = true; // ignore now invalid fetch results
    //         console.log('cleanup initiated');
    //         };
    //         }, [currency]); //