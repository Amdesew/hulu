'use client'

// components/Map.tsx
import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { MapContainer, TileLayer, Marker, Popup, useMap, useMapEvents } from 'react-leaflet';
import L from 'leaflet';

interface RentHouse {
  id: number;
  title: string;
  description: string;
  location: string; // Assuming "latitude,longitude"
}

const icon = new L.Icon({
  iconUrl: 'https://leafletjs.com/examples/custom-icons/leaf-red.png',
  shadowUrl: 'https://leafletjs.com/examples/custom-icons/leaf-shadow.png',
  iconSize: [38, 95],
  shadowSize: [50, 64],
  iconAnchor: [22, 94],
  shadowAnchor: [4, 62],
  popupAnchor: [-3, -76],
});

const UserLocationMarker: React.FC = () => {
  const map = useMap();
  const [position, setPosition] = useState<L.LatLng | null>(null);

  useMapEvents({
    locationfound(e) {
      setPosition(e.latlng);
      map.flyTo(e.latlng, map.getZoom());
    }
  });

  useEffect(() => {
    map.locate({ setView: true, maxZoom: 16 });
  }, [map]);

  return position === null ? null : (
    <Marker position={position}>
      <Popup>You are here</Popup>
    </Marker>
  );
};

const Map: React.FC = () => {
  const [rentHouses, setRentHouses] = useState<RentHouse[]>([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get('http://127.0.0.1:8000/RentHouse/');
        setRentHouses(response.data);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();
  }, []);

  return (
    <MapContainer center={[0, 0]} zoom={2} style={{ height: '100vh', width: '100%' }}>
      <TileLayer
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
      />
      {rentHouses.map(rentHouse => {
        const coords = rentHouse.location.split(',').map(Number);
        if (coords.length === 2 && !isNaN(coords[0]) && !isNaN(coords[1])) {
          return (
            <Marker key={rentHouse.id} position={coords as [number, number]} icon={icon}>
              <Popup>
                <h3>{rentHouse.title}</h3>
                <p>{rentHouse.location}</p>
              </Popup>
            </Marker>
          );
        } else {
          console.error('Invalid coordinates:', rentHouse.location);
          return null;
        }
      })}
      <UserLocationMarker />
    </MapContainer>
  );
};

export default Map;
