import React, { useEffect, useState } from "react";
import { MapContainer, Marker, Popup, TileLayer, useMap } from "react-leaflet";
import { FaBus, FaSearch } from "react-icons/fa";
import "../css/MapPage.css";
import axios from "axios";
import { xml2json } from "xml-js";
import ReactDOMServer from "react-dom/server";

const MapPage = () => {
  const [busData, setBusData] = useState([]);
  const colorList = [
    "#FF6B6B",
    "#FF8E72",
    "#FFA600",
    "#FFC300",
    "#F2E94E",
    "#A1E44D",
    "#4CAF50",
    "#2ECC71",
    "#2AB7CA",
    "#3FA9F5",
    "#0074D9",
    "#004E98",
    "#4B7BEC",
    "#7E57C2",
    "#B388FF",
    "#D6336C",
    "#C71585",
    "#FF1493",
    "#FF5F7E",
    "#FFB3C6",
    "#FF9F1C",
    "#FFBE0B",
    "#E07A5F",
    "#9A031E",
    "#EF476F",
    "#118AB2",
    "#06D6A0",
    "#8D99AE",
    "#2B2D42",
    "#6C757D",
    "#343A40",
    "#000000",
  ];

  const colorMap = {};
  let nextColorIndex = 0;

  useEffect(() => {
    fetchBusData();

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
    if (colorMap[routeName]) {
      return colorMap[routeName];
    } else {
      colorMap[routeName] = colorList[nextColorIndex];
      return colorList[nextColorIndex++];
    }
  }

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
              fontWeight: "bold"
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
            ></Marker>
          ))}
        </MapContainer>
      </div>
      <div className="end-block"></div>
    </div>
  );
};

export default MapPage;
