import React from "react";

import '../App.css';

export const DailyCard = ({ dailyCard }) => {
    console.log(dailyCard);
    const { dt, weather, temp: { day }} = dailyCard;
    const { icon, main } = weather[0];
    const currentDate = new Date(dt * 1000);
    return (
        <div className="DailyCard">
            <div>{currentDate.toString().split(' ')[0]}</div>
            <img className="Icon" src={`http://openweathermap.org/img/wn/${icon}@2x.png`} alt={icon} />
            <div>{day.toFixed(0)}</div>
            <div>{main}</div>
        </div>
    )
}