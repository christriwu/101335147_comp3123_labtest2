const cors = require('cors');
const app = express();
app.use(cors());
const PORT  =   3001



app.get("/weather", (req,res) =>{
    res.send({
        "coord": {
            "lon": -79.4163,
            "lat": 43.7001
        },
        "weather": [
            {
                "id": 800,
                "main": "Clear",
                "description": "clear sky",
                "icon": "01d"
            }
        ],
        "base": "stations",
        "main": {
            "temp": 7.62,
            "feels_like": 4.35,
            "temp_min": 6.31,
            "temp_max": 9.06,
            "pressure": 1007,
            "humidity": 69
        },
        "visibility": 10000,
        "wind": {
            "speed": 5.66,
            "deg": 170,
            "gust": 8.75
        },
        "clouds": {
            "all": 0
        },
        "dt": 1701378067,
        "sys": {
            "type": 2,
            "id": 2043365,
            "country": "CA",
            "sunrise": 1701347412,
            "sunset": 1701380563
        },
        "timezone": -18000,
        "id": 6167865,
        "name": "Toronto",
        "cod": 200
    });
});

app.listen(PORT, () => {
    console.log(`Server is running on ${PORT}`)
})