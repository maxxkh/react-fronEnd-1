import React, { useState } from "react";
import { LineChart, Line, XAxis, YAxis, Tooltip, ResponsiveContainer } from "recharts";

const LineChartComponent = () => {
    const [data, setData] = useState([]);

    const fetchData = async () => {
        try {
            const response = await fetch("/Data.json"); // Fetch the JSON file
            console.log("Response:", response); // Debugging: Log the response

            if (!response.ok) {
                throw new Error(`HTTP error! Status: ${response.status}`);
            }

            const text = await response.text(); // Debugging: Log the raw response text
            console.log("Raw Response Text:", text);

            const jsonData = JSON.parse(text); // Parse the JSON
            console.log("Parsed JSON Data:", jsonData); // Debugging: Log the parsed JSON

            setData(jsonData); // Update the state with the fetched data
        } catch (error) {
            console.error("Error fetching data:", error);
        }
    };

    return (
        <>
        
            <button onClick={fetchData} style={{ marginBottom: 10 }}
            className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 mt-5"
            >
                Fetch Live Data
            </button>
            <div style={{ width: "100%", height: 300 }}>
                <ResponsiveContainer>
                    <LineChart data={data}>
                        <XAxis dataKey="month" />
                        <YAxis />
                        <Tooltip />
                        <Line type="monotone" dataKey="completed" stroke="#8884d8" strokeWidth={2} />
                    </LineChart>
                </ResponsiveContainer>
            </div>
        </>
    );
};

export default LineChartComponent;