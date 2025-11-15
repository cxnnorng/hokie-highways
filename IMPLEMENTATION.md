# Implementation

## Contributions

**Gus Alston:**
I implemented the second part of the settings page, including the account settings button, the fare button, the contact us button, and the notifications switch. Andrew and I collectively designed the code for the settings page, and the features I listed were just what I coded when I was the one on the keyboard. Overall, this work was front-end in nature, and provided some UI features that would be desirable to the client.


**Connor:** I implemented the map page on the frontend with live bus tracking, utilizing Blacksburg Transit's public API. I first started out with coding out the interface as designed in our Figma. I then wrote a function for fetching bus data through a GET method on BT's API documentation. It was returned in XML, so I had to convert it to JSON and clean up unnecessary fields.
I then mapped each bus route to a different color and placed markers on the map for each bus' latitude and longitude (via Leaflet). Lastly, I configured the fetching of bus data to be every 5 seconds so that the map changes based on the current location of buses.


**Andrew Hand**
I implemented the first part of the settings page. I pair programmed with Gus, where I created the needed react fundamentals like constants, states, and the exported structure. I also added the routes to the app.jsx so that each page would be routed to their respective page components. We didn't use AI, so our functionality is very rudimentary, and mostly to get the design of the UI down.

**Emily Tran**
On the backend, I set up endpoints for the buses and route-info to requrest live bus and route data, thus I was able to implement the live bus route updates using BT public API, showing each stop's name, stop code, and estimated arrival time. On the frontend, I tried my best to match the style to the figma wireframe by adding the slider panel when a user clicks a bus to show its route. I also updated the map page with correct color mapping that the real BT transit uses for their route colors.


**Zachary Brosius:**
I implemented the plan a trip page in the frontend folder. I focused on creating the intial UI layout including controlled inputs for entering the origin and destination, departure and arrival times, setting maximum walking distance, and the most amount of transfers before reaching the destination. I also set up the date-time formatting helper, preference handling (max walk and max transfers), and the swap logic used to reverse the origin and destination fields. None of these are functional yet.

**Colleen Piccolo:**
Added basic structure to the FavoriteRoutesPage class. Derived most of the structure from the following React tutorial page: https://react.dev/learn. Added two arrays to hold information about the favorite routes and the favorite busses. 