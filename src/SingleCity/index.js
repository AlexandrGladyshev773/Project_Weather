import React, { useState } from "react";
import { Link } from 'react-router-dom';
import { Card } from '../Card';
import { useForecast } from '../hooks/useForecast';

import '../App.css';
import { DailyCard } from "../DailyCard"; 

export const SingleCity = (props) => {
    const [cityCoord, setCityCoord] = useState(null);
    const data = useForecast(cityCoord)
    const { city } = props.match.params;
    return (
        <div className="SingleCityWrap">
            <Link to="/home" className="GoBack">Go back</Link>
            <Card city={city} setCityCoord={setCityCoord} />
            {data &&
                <div className="DailyCards">
                {data.daily.map(dailyCard => <DailyCard dailyCard={dailyCard} key={dailyCard.dt}/>)}
                </div>
            }
        </div>
    )
}