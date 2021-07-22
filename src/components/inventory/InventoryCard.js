import InventoryItemCard from "./InventoryItemCard";
import "./InventoryCard.css"
import React from "react";

const InventoryCard = (props) => {
    return (
        <div className="inventory-card-container">
            <h1 className="inventory-header">Inventory</h1>
            <hr className="fading-line" />
            {props.inventoryItems.map(inventoryItem => {
                return (
                    <InventoryItemCard
                        key={inventoryItem.name}
                        image={inventoryItem.image}
                        stats={inventoryItem.stats}
                    />
                )
            })}
        </div>
    );
};

export default InventoryCard;