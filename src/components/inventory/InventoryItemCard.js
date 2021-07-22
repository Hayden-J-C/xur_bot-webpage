import React from 'react';
import ItemImage from "../item/ItemImage";
import StatsCard from "../item/stats/StatsCard";
import "./InventoryItemCard.css"

const InventoryItemCard = (props) => {
    return (
        <div className="inventory-item-card-container">
            <ItemImage src={props.image.src} altText={props.image.altText}/>
            <div className="inventory-item-header-container">
                <h1 className="inventory-item-title">{props.image.altText}</h1>
                <h2 className="inventory-item-description">They return from fields afar. The eye has passed, the end nears. Do not fade quietly. Let thunder reign again.</h2>
            </div>
            <StatsCard stats={props.stats}/>
            <StatsCard stats={props.stats}/>
        </div>
    );
};

export default InventoryItemCard;