import React from "react";
import "./StatsCard.css"
import StatsIcon from "./StatsIcon";

const StatsCard = (props) => {
    return (
        <div className="stats-card-container">
            {props.stats.map(stat => {
                return (
                    <StatsIcon
                        key={stat.name}
                        name={stat.name}
                        src={stat.src}
                        amount={stat.amount}
                    />
                )
            })}
        </div>
    );
};

export default StatsCard;