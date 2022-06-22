import { useState, useEffect } from 'react';
import { API_KEY } from "../settings";

export const useForecast = (coords) => {
    const [data, setData] = useState(null);
    useEffect(() => {
        if (coords !== null) {
            const { lat, lon } = coords;
            fetch(`дописать!`)
                .then(res => res.json())
                .then(setData);
        } 
    }, [coords]);
        
        
    return data;
}