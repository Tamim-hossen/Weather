import { useState } from "react"
import'./Weather.css'
function Weather(){
const [city,setCity] = useState("");
const [temp,setTemp] = useState();
const [humidity,setHumidity] = useState();
const [feelsLike,setFeelsLike] = useState();
const [weatinfo,setWeatherInfo] =useState("");

function weatherinfo (){
    fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=f465a9d6594392d3661d34cdc6191b7e`
        )
          .then((response) => response.json())
          .then ((data) => {
            setTemp(data.main.temp);
            setHumidity(data.main.humidity);
            setFeelsLike(data.main.feels_like);
            setWeatherInfo(data.weather[0].description);
            console.log(data);
          })
          .catch((error) => window.alert('Error Fetching Data',error))
          
}
return(
    <div className='container'>
        <div className='input'>
        <input type='text' placeholder="City Name" onChange={(e)=>
            setCity(e.target.value)
        }/><br/>
        <button onClick={weatherinfo}>Get</button>
        </div>
        <div>
            {temp != null && (
                <div className='display'>
                    <h3>Tempreture: {(Math.round(temp - 273.15) || 0).toString().padStart(2, "0")}°C</h3>
                    <h3>Humidiy: {humidity}%</h3>
                    <h3>Feels Like: {(Math.round(feelsLike - 273.15) || 0).toString().padStart(2, "0")}°C</h3>
                    <h3>Weather: {weatinfo.toUpperCase()}</h3>
                </div>
            )}
            
        </div>
    </div>
    
)
}
export default Weather