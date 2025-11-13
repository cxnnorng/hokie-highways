import express from 'express';
import cors from 'cors';
import axios from 'axios';
import { xml2js } from 'xml-js';

const app = express();
const port = 3000;

app.use(cors());

app.get(`/`, (req, res) => {
    res.send('Hello World!');
});

app.get('/api/buses', async (req, res) => {
  try {
    const btResponse = await axios.get(
      'http://www.bt4uclassic.org/webservices/bt4u_webservice.asmx/GetCurrentBusInfo'
    );

    const json = xml2js(btResponse.data, { compact: true });

    const doc = json.DocumentElement || json.NewDataSet || json;
    const rows = doc.LatestInfoTable || doc.Table || [];

    const arr = (Array.isArray(rows) ? rows : [rows]).map((row) => ({
      busId: row.AgencyVehicleName?._text,
      routeName: row.RouteShortName?._text,
      latitude: parseFloat(row.Latitude?._text),
      longitude: parseFloat(row.Longitude?._text),
    }));

    res.json(arr);
  } catch (err) {
    console.error('Error fetching bus info from BT:', err.message || err);
    res.status(500).json({ error: 'Failed to fetch bus info' });
  }
});

app.get('/api/route-info', async (req, res) => {
  const { routeShortName } = req.query;
  if (!routeShortName) {
    return res.status(400).json({ error: 'routeShortName is required' });
  }

  try {
    const today = new Date().toISOString().split('T')[0];

    const btResponse = await axios.get(
      'http://www.bt4uclassic.org/webservices/bt4u_webservice.asmx/GetArrivalAndDepartureTimesForRoutes',
      {
        params: {
          routeShortNames: routeShortName, 
          noOfTrips: 6,
          serviceDate: today,
        },
      }
    );

    const json = xml2js(btResponse.data, { compact: true });

    const doc = json.DocumentElement || json.NewDataSet || json;
    const containerKey = Object.keys(doc).find((k) =>
      Array.isArray(doc[k])
    );

    const rows = containerKey ? doc[containerKey] : [];

    const arr = (Array.isArray(rows) ? rows : [rows]).map((row) => ({
      stopCode: row.StopCode?._text,
      stopName: row.StopName?._text,
      arrivalTime: row.CalculatedArrivalTime?._text,
      departureTime: row.CalculatedDepartureTime?._text,
    }));

    res.json(arr);
  } catch (err) {
    console.error('Error fetching route info from BT:', err.message || err);
    res.status(500).json({ error: 'Failed to fetch route info' });
  }
});

app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
});