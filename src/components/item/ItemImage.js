import React from 'react';
import "./ItemImage.css"

const ItemImage = (props) => {
    return (
        <div className="item-icon-container">
            <img className="item-icon" src={props.src} alt={props.altText}/>
        </div>
    );
};

export default ItemImage;