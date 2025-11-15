/**
 * Author: Colleen Piccolo
 * Version: 11.14.2025
 */

import React, { useEffect, useState } from "react";

/**
 * The code in this file was largely sourced from the Quick Start
 * React dev page, the page can be found at the following link:  
 * https://react.dev/learn. 
 * 
 * This webpage helped me learn how to use <li> and how to use
 * React in general.
 * 
 * Full citation: "Quick Start." React. Accessed: November 14, 2025.
 * [Online]. Available: https://react.dev/learn.
 */

// This is the structure for the user's favorite busses
// There would be a setter method to update it.
const favoriteBusses = [
  "SMA",
  "SME",
  "SMS"
]

// This is the structure for the user's favorite routes
// There would be a setter method to update it. 
const favoriteRoutes = [
  "Maroon Bay 9 - #8009", 
  "McBryde Hall - #1142", 
  "Patrick Henry WestBound - #1516"
]

// This function would get the status of each bus, this is just
// a sample output string
// @param bus is the bus to get the status for
function getStatus(bus) {
  return "On Schedule";
}

// This function would get the status of the route, this is just
// a sample output string
// @param route is the route to get the status for
function getRouteStatus(route) {
  return "On Schedule";
}

// This would let the user update their favorite busses
// @param newBus is the new bus to be added
// @param priority indicates where in the favorite busses list
// the user would like it to appear
function updateFavoriteBus(newBus, priority) {
  favoriteBusses[priority] = newBus;
}

// This would let the user update their favorite route
// @param newRoute is the new route to be added
// @param priority indicates where in the favorite routes
// list the user would like it to appear
function updateFavoriteRoute(newRoute, priority) {
  favoriteRoutes[priority] = newRoute;
}

// This is the Favorite Routes Page
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