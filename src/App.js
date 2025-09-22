import React, { useEffect, useState } from "react";
import axios from "axios";
import Plot from "react-plotly.js";
import DataTable from "./components/DataTable";

function App() {
    const [heatmapData, setHeatmapData] = useState([]);
    const [bloomingData, setBloomingData] = useState(null);

    // Load heatmap
    useEffect(() => {
        axios.get("http://127.0.0.1:8000/heatmap")
            .then(res => {
                const data = Object.entries(res.data).map(([region, info]) => ({
                    region,
                    ...info
                }));
                setHeatmapData(data);
            })
            .catch(err => console.error("Error loading heatmap:", err));
    }, []);

    // Load blooming data (default India)
    useEffect(() => {
        axios.get("http://127.0.0.1:8000/blooming?region=India")
            .then(res => setBloomingData(res.data))
            .catch(err => console.error("Error loading blooming data:", err));
    }, []);

    return ( <
        div className = "p-4 font-sans" >
        <
        h1 className = "text-2xl font-bold mb-4 text-center" > 🌸BloomWatch Dashboard < /h1>

        { /* Heatmap */ } <
        div className = "mb-8" >
        <
        h2 className = "text-xl font-semibold mb-2" > Global Blooming Heatmap < /h2> <
        Plot data = {
            [{
                type: "scattermapbox",
                lat: heatmapData.map(d => d.lat),
                lon: heatmapData.map(d => d.lon),
                mode: "markers",
                text: heatmapData.map(d => `${d.region} - ${d.plants.join(", ")}`),
                marker: {
                    size: heatmapData.map(d => d.intensity / 2),
                    color: heatmapData.map(d => d.intensity),
                    colorscale: "YlOrRd",
                    showscale: true
                }
            }]
        }
        layout = {
            {
                autosize: true,
                hovermode: "closest",
                mapbox: {
                    style: "carto-positron",
                    center: { lat: 20, lon: 0 },
                    zoom: 1
                },
                margin: { t: 0, b: 0, l: 0, r: 0 },
                height: 500
            }
        }
        style = {
            { width: "100%", height: "500px" } }
        config = {
            { responsive: true } }
        /> <
        /div>

        { /* Blooming Graphs */ } {
            bloomingData && ( <
                div className = "mb-8" >
                <
                h2 className = "text-xl font-semibold mb-2" > { bloomingData.region } - { bloomingData.plant } <
                /h2> <
                Plot data = {
                    [{
                            x: bloomingData.months,
                            y: bloomingData.blooming,
                            type: "scatter",
                            mode: "lines+markers",
                            name: "Blooming Intensity"
                        },
                        {
                            x: bloomingData.months,
                            y: bloomingData.temperature,
                            type: "scatter",
                            mode: "lines+markers",
                            name: "Temperature (°C)"
                        },
                        {
                            x: bloomingData.months,
                            y: bloomingData.rainfall,
                            type: "bar",
                            name: "Rainfall (mm)"
                        }
                    ]
                }
                layout = {
                    {
                        title: "Blooming Trends",
                        xaxis: { title: "Months" },
                        yaxis: { title: "Values" },
                        height: 400
                    }
                }
                style = {
                    { width: "100%", height: "400px" } }
                /> <
                /div>
            )
        }

        { /* Data Table */ } {
            bloomingData && ( <
                div className = "mb-8" >
                <
                h2 className = "text-xl font-semibold mb-2" > Readable Data < /h2> <
                DataTable bloomingData = { bloomingData }
                /> <
                /div>
            )
        } <
        /div>
    );
}

export default App;