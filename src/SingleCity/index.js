import React, { useState } from "react";

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
            <Card city={city} setCityCoord={setCityCoord} />
            {data &&
                <div className="DailyCards">
                {data.daily.map(dailyCard => <DailyCard dailyCard={dailyCard} key={dailyCard.dt}/>)}
                </div>
            }
        </div>
    )
}