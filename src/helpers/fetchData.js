import { useState, useEffect } from 'react';

const url = (module) => {
    let endpoint = ''
    if (module === 'restaurants') endpoint = 'http://localhost:3001/restaurants'
    if (module === 'products') endpoint = 'http://localhost:3001/products'
    if (module === 'products/all') endpoint = 'http://localhost:3001/products/all'
    return endpoint;
}

export const fetchData = (module) => {
    const [data, setData] = useState();
    useEffect(() => {
        fetch(url(module))
        .then(response => response.json())
        .then(data => setData(data))
        .catch(error => console.log(error));
    }, [])

    return data;
}
