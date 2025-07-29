// import React, { useRef, useEffect } from 'react';
// import * as maptilersdk from '@maptiler/sdk';
// import "@maptiler/sdk/dist/maptiler-sdk.css";
// import './map.css';

// export default function Map() {
//   const mapContainer = useRef(null);
//   const map = useRef(null);

//   // --- Change these values for a world view ---
//   const worldCenter = { lng: 0, lat: 0 }; // Global center
//   const worldZoom = 2; // A low zoom level to see the whole world
//   // ---------------------------------------------

//   maptilersdk.config.apiKey = import.meta.env.VITE_MAPTILER_API_KEY;

//   useEffect(() => {
//     if (map.current) return; // stops map from initializing more than once

//     map.current = new maptilersdk.Map({
//       container: mapContainer.current,
//       style: maptilersdk.MapStyle.STREETS,
//       center: [worldCenter.lng, worldCenter.lat], // Use worldCenter
//       zoom: worldZoom 
//     });


//     new maptilersdk.Marker({color: "#FF0000"})
//       .setLngLat([139.7525,35.6846]) // This was Tokyo's coordinates
//       .addTo(map.current);
//   }, [worldCenter.lng, worldCenter.lat, worldZoom]); // Update dependencies

//   return (
//     <div className="map-wrap">
//       <div ref={mapContainer} className="map" />
//     </div>
//   );
// }

import React, { useRef, useEffect, useState } from 'react';
import * as maptilersdk from '@maptiler/sdk';
import "@maptiler/sdk/dist/maptiler-sdk.css";
import './map.css'; // Assuming you have some basic styling for .map-wrap and .map

export default function Map() {
    const mapContainer = useRef(null);
    const map = useRef(null);
    const popupRef = useRef(null); // Ref to hold the active popup instance

    // --- Configuration for a world view ---
    const worldCenter = { lng: 0, lat: 0 }; // Global center
    const worldZoom = 1; // A low zoom level to see more of the world
    // ---------------------------------------------

    // Your array of locations, converted to GeoJSON format for the map
    // In a real application, consider passing this as a prop or fetching it.
    const locationsGeoJSON = {
        type: 'FeatureCollection',
        features: [
            {
                type: 'Feature',
                geometry: {
                    type: 'Point',
                    coordinates: [72.8777, 19.0760] // Mumbai
                },
                properties: {
                    name: "Mumbai",
                    country: "India",
                    description: "The bustling financial capital and 'City of Dreams', home to the iconic Gateway of India."
                }
            },
            {
                type: 'Feature',
                geometry: {
                    type: 'Point',
                    coordinates: [2.3522, 48.8566] // Paris
                },
                properties: {
                    name: "Paris",
                    country: "France",
                    description: "The 'City of Love', famous for its Eiffel Tower and romantic ambiance."
                }
            },
            {
                type: 'Feature',
                geometry: {
                    type: 'Point',
                    coordinates: [139.6917, 35.6895] // Tokyo
                },
                properties: {
                    name: "Tokyo",
                    country: "Japan",
                    description: "A vibrant metropolis blending traditional culture with futuristic technology."
                }
            },
            {
                type: 'Feature',
                geometry: {
                    type: 'Point',
                    coordinates: [-74.0060, 40.7128] // New York City
                },
                properties: {
                    name: "New York City",
                    country: "USA",
                    description: "The 'Big Apple', a global hub for finance, fashion, and culture, known for its iconic skyline."
                }
            },
            {
                type: 'Feature',
                geometry: {
                    type: 'Point',
                    coordinates: [55.2708, 25.2048] // Dubai
                },
                properties: {
                    name: "Dubai",
                    country: "UAE",
                    description: "A luxurious city known for its ultramodern architecture and vibrant nightlife, including the Burj Khalifa."
                }
            },
            {
                type: 'Feature',
                geometry: {
                    type: 'Point',
                    coordinates: [12.4964, 41.9028] // Rome
                },
                properties: {
                    name: "Rome",
                    country: "Italy",
                    description: "The 'Eternal City', rich in ancient history, iconic ruins like the Colosseum, and delicious cuisine."
                }
            },
            {
                type: 'Feature',
                geometry: {
                    type: 'Point',
                    coordinates: [151.2093, -33.8688] // Sydney
                },
                properties: {
                    name: "Sydney",
                    country: "Australia",
                    description: "Home to the iconic Opera House and beautiful harbor, offering a vibrant coastal lifestyle."
                }
            },
            {
                type: 'Feature',
                geometry: {
                    type: 'Point',
                    coordinates: [-43.1729, -22.9068] // Rio de Janeiro
                },
                properties: {
                    name: "Rio de Janeiro",
                    country: "Brazil",
                    description: "Known for its stunning beaches, carnival celebrations, and the Christ the Redeemer statue."
                }
            },
            {
                type: 'Feature',
                geometry: {
                    type: 'Point',
                    coordinates: [31.2357, 30.0444] // Cairo
                },
                properties: {
                    name: "Cairo",
                    country: "Egypt",
                    description: "A historic city, gateway to the ancient pyramids and a treasure trove of artifacts."
                }
            },
            {
                type: 'Feature',
                geometry: {
                    type: 'Point',
                    coordinates: [-0.1276, 51.5074] // London
                },
                properties: {
                    name: "London",
                    country: "UK",
                    description: "A historic global city with landmarks like the Tower of London, Buckingham Palace, and diverse culture."
                }
            }
        ]
    };

    maptilersdk.config.apiKey = import.meta.env.VITE_MAPTILER_API_KEY;

    useEffect(() => {
        if (map.current) return; // stops map from initializing more than once

        map.current = new maptilersdk.Map({
            container: mapContainer.current,
            style: maptilersdk.MapStyle.STREETS, // Or your preferred style
            center: [worldCenter.lng, worldCenter.lat],
            zoom: worldZoom
        });

        map.current.on('load', () => {
            // Add the GeoJSON source
            map.current.addSource('destination-points', {
                type: 'geojson',
                data: locationsGeoJSON,
                generateId: true // Important for feature state and event handling
            });

            // Add a symbol layer to display markers from the 'destination-points' source
            map.current.addLayer({
                id: 'destination-markers-layer',
                type: 'symbol',
                source: 'destination-points',
                layout: {
                    'icon-image': 'marker-15', // Uses a built-in default marker icon
                    'icon-allow-overlap': true, // Allows icons to overlap
                    // Optional: add text labels to your markers
                    'text-field': ['get', 'name'],
                    'text-font': ['Open Sans Bold', 'Arial Unicode MS Bold'],
                    'text-offset': [0, 1.25], // Offset text from the icon
                    'text-anchor': 'top'
                },
                paint: {
                    'text-color': '#333',
                    'text-halo-color': '#fff',
                    'text-halo-width': 1
                }
            });

            // Initialize the popup instance once
            popupRef.current = new maptilersdk.Popup({
                closeButton: false, // No close button for hover popups
                closeOnClick: false, // Popup doesn't close on map click
                offset: 25 // Offset from the marker
            });

            // Add mouseenter event listener to the layer for hover
            map.current.on('mouseenter', 'destination-markers-layer', (e) => {
                map.current.getCanvas().style.cursor = 'pointer'; // Change cursor

                const feature = e.features[0];
                if (!feature) return;

                const coordinates = feature.geometry.coordinates.slice();
                const { name, country, description } = feature.properties;

                // Ensure that if the map is zoomed out such that multiple
                // copies of the feature are visible, the popup appears
                // over the copy being pointed to.
                while (Math.abs(e.lngLat.lng - coordinates[0]) > 180) {
                    coordinates[0] += e.lngLat.lng > coordinates[0] ? 360 : -360;
                }

                popupRef.current
                    .setLngLat(coordinates)
                    .setHTML(`
                        <div style="padding: 10px; font-family: sans-serif; max-width: 250px;">
                            <h4 style="margin-top: 0; margin-bottom: 5px; color: #333;">${name}, ${country}</h4>
                            <p style="margin-bottom: 0; color: #666; font-size: 0.9em;">${description}</p>
                        </div>
                    `)
                    .addTo(map.current);
            });

            // Add mouseleave event listener to the layer to hide the popup
            map.current.on('mouseleave', 'destination-markers-layer', () => {
                map.current.getCanvas().style.cursor = ''; // Reset cursor
                if (popupRef.current) {
                    popupRef.current.remove();
                }
            });
        });

        // Clean up map on component unmount
        return () => {
            map.current?.remove();
        };
    }, [worldCenter.lng, worldCenter.lat, worldZoom]); // Depend on initial coords to prevent re-init

    return (
        <div className="map-wrap">
            <div ref={mapContainer} className="map" />
        </div>
    );
}