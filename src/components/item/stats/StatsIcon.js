import React from "react";
import "./StatsIcon.css"

const StatsIcon = (props) => {
    return (
        <div className="stats-icon-container">
            <img className="stats-icon" src={props.src} alt={props.name}/>
            <div className="stats-text-container">
                <text>{props.amount}</text>
            </div>
        </div>
    );
};

export default StatsIcon;