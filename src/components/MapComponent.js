import React, { useState } from 'react';
import Map, { Marker } from 'react-map-gl';
import 'mapbox-gl/dist/mapbox-gl.css';

const MapComponent = () => {
    const [viewState, setViewState] = useState({
        latitude: 20.5937,
        longitude: 78.9629,
        zoom: 4
    });

    // Example data points to show on the map
    const sampleData = [
        { name: "Delhi", lat: 28.7041, lon: 77.1025 },
        { name: "New York", lat: 40.7128, lon: -74.0060 },
    ];

    return ( <
        Map mapboxAccessToken = "YOUR_MAPBOX_ACCESS_TOKEN" // Apni key yahan daalein
        initialViewState = { viewState }
        style = {
            { width: '100%', height: '500px' } }
        mapStyle = "mapbox://styles/mapbox/satellite-streets-v12" // Yeh style 3D buildings dikhata hai
        onMove = { evt => setViewState(evt.viewState) } >
        {
            sampleData.map((marker, index) => ( <
                Marker key = { index }
                latitude = { marker.lat }
                longitude = { marker.lon }
                anchor = "bottom" /
                >
            ))
        } <
        /Map>
    );
};

export default MapComponent;