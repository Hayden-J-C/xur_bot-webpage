import logo from './logo.svg';
import './App.css';
import React from "react";
import MyNavBar from "./components/navbar/MyNavBar";
import InventoryItemCard from "./components/inventory/InventoryItemCard";
import ItemImage from "./components/item/ItemImage";
import StatsIcon from "./components/item/stats/StatsIcon";
import StatsCard from "./components/item/stats/StatsCard";
import InventoryCard from "./components/inventory/InventoryCard";


function App() {
    let image = {
        src: "https://www.bungie.net/common/destiny_content/icons/8fdb2b8a1b871a01bc09452c4192771a.jpg",
        altText: "Thunderlord"
    };
    let stats = [
        {
            name: "Resilience",
            amount: 6,
            src: "https://raw.githubusercontent.com/justrealmilk/destiny-icons/68efc21635159705afc6b94f1a6ea37304cc1697/general/resilience.svg"
        },
        {
            name: "Recovery",
            amount: 10,
            src: "https://raw.githubusercontent.com/justrealmilk/destiny-icons/68efc21635159705afc6b94f1a6ea37304cc1697/general/recovery.svg"
        },
        {
            name: "Mobility",
            amount: 6,
            src: "https://raw.githubusercontent.com/justrealmilk/destiny-icons/68efc21635159705afc6b94f1a6ea37304cc1697/general/mobility.svg"
        }
    ];

    let items = [
        {
            image: image,
            stats: stats
        },
        {
            image: image,
            stats: stats
        },
        {
            image: image,
            stats: stats
        }
    ];

  return (
    <div className="App">
      <MyNavBar/>
      <header className="App-header">
          <img src="https://xur.wiki/assets/xur.png" alt="xur" />
        <InventoryCard inventoryItems={items}/>
      </header>
    </div>
  );
}

export default App;
