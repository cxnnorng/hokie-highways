import React, { useEffect, useState } from "react";
import { MapContainer, Marker, Popup, TileLayer, useMap } from "react-leaflet";
import { FaBus, FaSearch } from "react-icons/fa";
import "../css/MapPage.css";
import axios from "axios";
import { xml2json } from "xml-js";
import ReactDOMServer from "react-dom/server";

const RouteColors = {
  SMA: "#0074D9", 
  CAS:  "#000000", 
  BMR:  "#FF5F7E", 
  HWA:  "#004E98", 
  UCB:  "#4CAF50", 
  PHD:  "#FC7999", 
  CRB:  "#CA0000",
  TCR:  "#F56200", 
  TTT:  "#660E03", 
  HXP:  "#11A79A", 
  BLU:  "#000DC7", 
  PRG:  "#7E57C2", 
  SMS:  "#1592FF", 
  PHB:  "#0B7734",
  HWB:  "#0074D9", 
  HDG:  "#794C13", 
  NMG:  "#D60E00", 
  CRC:  "#075023", 
  GRN:  "#FF5F7E",
  HWC:  "#624F85",
  NMP:  "#C92B00",
  SME:  "#007ADD",
}
const MapPage = () => {
  const [busData, setBusData] = useState([]);
  //const [selectedBus, setSelectedBus] = useState(null);

  useEffect(() => {
    fetchBusData();
    // Would be updateFrequency from settings page instead of 5000
    const interval = setInterval(fetchBusData, 5000);
    return () => clearInterval(interval);
  }, []);

  const fetchBusData = async () => {
    try {
      const response = await axios.get(
        "bt/webservices/bt4u_webservice.asmx/GetCurrentBusInfo"
      );
      const result = xml2json(response.data, {
        compact: true,
        spaces: 2,
      });
      console.log(result);
      const resultJson = JSON.parse(result);
      const rawBusData = resultJson["DocumentElement"]["LatestInfoTable"];
      console.log(rawBusData);
      let busData = [];
      rawBusData.forEach((bus) => {
        const busId = bus["AgencyVehicleName"]["_text"];
        const routeName = bus["RouteShortName"]["_text"];
        const latitude = bus["Latitude"]["_text"];
        const longitude = bus["Longitude"]["_text"];
        const color = getRouteColor(routeName);
        busData.push({ busId, routeName, latitude, longitude, color });
      });
      console.log(busData);
      setBusData(busData);
    } catch (error) {
      console.error("Error fetching bus data:", error);
    }
  };

  const getRouteColor = (routeName) => {
    if (RouteColors[routeName]) {
      return RouteColors[routeName];
    } else {
      return "#808080";
    }
  };

  const createBusIcon = (routeName, color) => {
    return L.divIcon({
      className: "",
      html: ReactDOMServer.renderToString(
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          }}
        >
          <span
            style={{
              color: color,
              fontWeight: "bold",
            }}
          >
            {routeName}
          </span>
          <FaBus size={26} color={color} />
        </div>
      ),
    });
  };

  return (
    <div className="map-page">
      <div className="search-container">
        <div className="search-bar">
          <input type="text" placeholder="Where to?" />
          <FaSearch className="icon" />
        </div>
      </div>
      <div className="map-container">
        <MapContainer
          center={[37.2296, -80.4244]}
          zoom={13}
          scrollWheelZoom={false}
          className="leaflet-map"
        >
          <TileLayer
            attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          />
          {busData.map((bus, index) => (
            <Marker
              key={bus.busId}
              position={[bus.latitude, bus.longitude]}
              icon={createBusIcon(bus.routeName, bus.color)}
              // eventHandlers={{
              //   click: () => {
              //     setSelectedBus(bus); 
              //   },
              // }}
            ></Marker>
          ))}
        </MapContainer>
      </div>
      <div className="end-block"></div>
    </div>
  );
};

export default MapPage;
