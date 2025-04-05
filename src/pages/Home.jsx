import React, {useEffect, useState} from 'react';
import axios from 'axios';
import '../css/home.css';
function Home() {
    const [weather, setWeather] = useState(null);
    const [error, setError] = useState(null);

    useEffect(() => {
        axios.get("/.netlify/functions/api/weather")
        .then(res => setWeather(res.data))
        .catch(err => {
            console.error("Weather API error:", err);
            setError("Unable to fetch weather data.");
        });
    }, []);
    return (
        <div className="container text-center">
            <div className="row justify-content-center">
            <div className="col-md-8">
            <h1 className="text-primary fw-bold">Welcome to My Portfolio!</h1>
            <h3 className="text-secondary">Hi, I'm Chioma</h3>
            <p className="lead">I'm a web developer that strives to create user-friendly websites and applications.</p>
            <p>Feel free to explore my portfolio!</p>
            {weather && (
                <div className="mt-4 alert alert-info">
                    <h5> Weather in {weather.city}</h5>
                    <p> Temperature: {weather.temperature}°C</p>
                    <p> Humidity: {weather.humidity}%</p>
                </div>
            )}


        {error && (
            <div className="alert alert-danger">{error}</div>
        )}

            <a href="/project" className="btn btn-success btn-lg mt-4 px-5 py-2">View My Projects</a>
        </div>
      </div>
    </div>
    );
};

export default Home;
