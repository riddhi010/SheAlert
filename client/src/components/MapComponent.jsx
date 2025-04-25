// src/components/MapComponent.jsx
import { useEffect, useState } from 'react';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';

const containerStyle = {
  width: '100%',
  height: '500px',
};

export default function MapComponent() {
  const [location, setLocation] = useState(null); // No hardcoded fallback

  useEffect(() => {
    navigator.geolocation.getCurrentPosition(
      (pos) => {
        setLocation({
          lat: pos.coords.latitude,
          lng: pos.coords.longitude,
        });
      },
      (err) => {
        console.error("Failed to get location", err);
        alert("Please enable location access to use the map.");
      }
    );
  }, []);

  if (!location) {
    return <p>Fetching your location...</p>; // Optional loading UI
  }

  return (
    <MapContainer
      style={containerStyle}
      center={location}
      zoom={15}
      scrollWheelZoom={false}
    >
      <TileLayer
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
      />
      <Marker position={location}>
        <Popup>Your current location</Popup>
      </Marker>
    </MapContainer>
  );
}
