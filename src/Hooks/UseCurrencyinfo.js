import { useEffect, useState } from "react";

function useCurrencyInfo (currency) {
    const [data, setdata] = useState({})
    useEffect (() => {
        fetch(`https://open.er-api.com/v6/latest/USD`)
        .then((res) => res.json())
        .then((res) => setdata(res.rates))
        console.log(data);
    } , [currency])
    console.log(data);
    return data
}

export default useCurrencyInfo;