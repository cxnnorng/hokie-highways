import React, { useEffect, useState } from "react";

/**
 * Settings page needs dark mode switch, Bus update frequency,
 * Additional info (Links): Contact us (Hokie Highways), Service Calendar, Fare Information,
 * Hokie Highways bus stops list
 *
 * Account Settings:
 * Home/Class information
 * Notification Preferences
 *
 *
 */

const SettingsPage = () => {

  /**
 * State variable for bus update frequency (default 5000 ms = 5 seconds)
 */
const [updateFrequency, setUpdateFrequency] = useState(5000); // in milliseconds

/**
 * Link for service calendar
 */
const serviceCalendarLink = "https://ridebt.org/service-calendar/";

/**
 * Link for contact us
 */
const contactLink = "mailto:ajhand@vt.edu";

/**
 * Cost of riding the bus
 */
const farePrice = 0;

const busRoutes = "ridebt.org/routes-schedules";
/**
 * State variable for dark/light mode toggle (light = true, dark = false)
 */
const [lightMode, setLightMode] = useState(true);

/**
 * State variable for notification settings (yes = true, no = false)
 */
const [notifications, setNotifications] = useState(true);

/**
 * Function to change the light/dark mode toggle
 */
const toggleLightMode = () => {
  setLightMode(!lightMode);
};
const toggleNotifications = () => {
  setNotifications(!notifications);
}

  return (
    <div className="">
      <h1>Settings</h1>
      <div>
        <label>
          Bus Update Frequency (ms):
          <input
            type="number"
            value={updateFrequency}
            onChange={(e) => setUpdateFrequency(e.target.value)}
          />
        </label>
        <label>
          Service Calendar:
          <a
            href={serviceCalendarLink}
            target="_blank"
            rel="noopener noreferrer"
          >
            {serviceCalendarLink}
          </a>
        </label>
        <label>
          Contact Us:
          <a href={contactLink}></a>
        </label>
        <label>
          Fare Price: {farePrice}
        </label>
         <label>
          Bus Routes
          <a href={busRoutes}></a>
        </label>
        <label>
          Account Settings
        </label>
        <label>
          Notification Settings
          <input
            type="checkbox"
            checked={notifications}
            onChange={toggleNotifications}
          />
        </label>
        <label>
          <input
            type="checkbox"
            checked={lightMode}
            onChange={toggleLightMode}
          />
          Dark Mode
        </label>
      </div>
    </div>
  );
};

export default SettingsPage;
