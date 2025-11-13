/**
 * Author: Colleen Piccolo
 * Version: 11.13.2025
 */

import React, { useEffect, useState } from "react";

function buttonFunc() {
  return;
}

const FavoriteRoutesPage = () => {
return (
    <div className="favorite">
      <div className="route">
        <button onClick={buttonFunc}>
          Route 1
        </button>
        <button onClick={buttonFunc}>
          Route 2
        </button>
        <button onClick={buttonFunc}>
          Route 3
        </button>
      </div>
      <div className="bus">
          <button onClick={buttonFunc}>
            Route 1
          </button>
          <button onClick={buttonFunc}>
            Route 2
          </button>
          <button onClick={buttonFunc}>
            Route 3
          </button>
      </div>
      
    </div>
  );
};


export default FavoriteRoutesPage;