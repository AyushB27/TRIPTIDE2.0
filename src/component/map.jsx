import React, { useRef, useEffect } from 'react';
import * as maptilersdk from '@maptiler/sdk';
import "@maptiler/sdk/dist/maptiler-sdk.css";
import './map.css';

export default function Map() {
  const mapContainer = useRef(null);
  const map = useRef(null);

  // --- Change these values for a world view ---
  const worldCenter = { lng: 0, lat: 0 }; // Global center
  const worldZoom = 2; // A low zoom level to see the whole world
  // ---------------------------------------------

  maptilersdk.config.apiKey = import.meta.env.VITE_MAPTILER_API_KEY;

  useEffect(() => {
    if (map.current) return; // stops map from initializing more than once

    map.current = new maptilersdk.Map({
      container: mapContainer.current,
      style: maptilersdk.MapStyle.STREETS,
      center: [worldCenter.lng, worldCenter.lat], // Use worldCenter
      zoom: worldZoom 
    });


    // new maptilersdk.Marker({color: "#FF0000"})
    //   .setLngLat([139.7525,35.6846]) // This was Tokyo's coordinates
    //   .addTo(map.current);
  }, [worldCenter.lng, worldCenter.lat, worldZoom]); // Update dependencies

  return (
    <div className="map-wrap">
      <div ref={mapContainer} className="map" />
    </div>
  );
}