/**
 * Author: Colleen Piccolo
 * Version: 11.14.2025
 */

import React, { useEffect, useState } from "react";

/**
 * The code below was largely sourced from the quick start
 * react dev site, the page can be found at:  
 * https://react.dev/learn. 
 */

const favoriteBusses = [
  "SMA",
  "SME",
  "SMS"

]

const favoriteRoutes = [
  "Maroon Bay 9 - #8009", 
  "McBryde Hall - #1142", 
  "Patrick Henry WestBound - #1516"
]

// This function gets the status of each bus, this is just
// a sample output

function getStatus(bus) {
  return "On Schedule";
}

// This function gets the status of the route, this is just
// a sample output

function getRouteStatus(route) {
  return "On Schedule";
}
const FavoriteRoutesPage = () => {
return (
    <div className="favorite">
      <div className="bus">
        Bus
        <li>
          {favoriteBusses[0]} {getStatus(favoriteBusses[0])}
        </li> 
        <li>
          {favoriteBusses[1]} {getStatus(favoriteBusses[1])}
        </li>
        <li>
          {favoriteBusses[2]} {getStatus(favoriteBusses[2])}
        </li>
      </div>
      <div className="route">
        Route
        <li>
          {favoriteRoutes[0]} {getRouteStatus(favoriteRoutes[0])}
        </li>
        <li>
          {favoriteRoutes[1]} {getRouteStatus(favoriteRoutes[1])}
        </li>
        <li>
          {favoriteRoutes[2]} {getRouteStatus(favoriteRoutes[2])}
        </li>
        
      </div>
      
    </div>
  );
};
export default FavoriteRoutesPage;