import React, { useState } from 'react';
import axios from 'axios';

const Weather = () => {
    const [city, setCity] = useState('');
    const [data, setData] = useState(null);
    const [error, setError] = useState('');

    const fetchData = async () => {
        if (!city) {
            setError("Please enter a city");
            return;
        }
        
        setError('');
        try {
            const response = await axios.get(`https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=0cf3d05c6cb443424f42856d18e090b3`);
            setData(response.data);
        } catch (err) {
            setError("City not found. Please try again.");
            setData(null); 
        }
    };

    return (
        <div className="flex justify-center items-center h-screen bg-blue-100">
            <div className="bg-white shadow-lg rounded-xl p-6 w-96 text-center">
                <h1 className="text-2xl font-bold text-blue-600 mb-4">Weather App</h1>
                <input
                    type="text"
                    placeholder="Enter city"
                    value={city}
                    onChange={(e) => setCity(e.target.value)}
                    className="w-full p-2 border rounded-md focus:outline-none focus:ring focus:ring-blue-400"
                />
                <button
                    onClick={fetchData}
                    className="mt-4 w-full bg-blue-500 text-white py-2 rounded-md hover:bg-blue-600 transition duration-300"
                >
                    Get Weather
                </button>
                {error && <p className="text-red-500 mt-2">{error}</p>}
                {data && (
                    <div className="mt-4 p-4 bg-gray-100 rounded-md">
                        <h2 className="text-xl font-semibold text-gray-700">{data.name}</h2>
                        <p className="capitalize text-gray-600">{data.weather[0].description}</p>
                        <p className="text-lg font-bold text-blue-700">🌡 {data.main.temp}°C</p>
                        <p className="text-gray-700">💧 Humidity: {data.main.humidity}%</p>
                    </div>
                )}
            </div>
    </div>
    );
};

export default Weather;
