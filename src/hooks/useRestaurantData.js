import { useState, useEffect } from 'react';

export const useRestaurantData = () => {
    const [data, setData] = useState();
    useEffect(() => {
        fetch('http://localhost:3001/restaurants')
        .then(response => response.json())
        .then(data => setData(data))
        .catch(error => console.log(error))
    }, [])
    return data;
}