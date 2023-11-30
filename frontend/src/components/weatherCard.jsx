import React,{useState, useEffect} from 'react';

const WeatherCard = () => {
    const [weatherData, setWeatherData] = useState(null);

    useEffect(() => {
       fetch('http://localhost:3001/weather')
         .then(response => response.json())
         .then(data => setWeatherData(data));
    }, []);
   
    return (
       <div>
         {weatherData ? (
           <div>
             <h1>{weatherData.name}</h1>
             <h2>{weatherData.main.temp} °C</h2>
             <h3>{weatherData.weather[0].description}</h3>
             <h4>Wind speed: {weatherData.wind.speed} m/s</h4>
             <h4>Wind direction: {weatherData.wind.deg}°</h4>
           </div>
         ) : (
           <p>Loading...</p>
         )}
       </div>
    );
}


export default WeatherCard;