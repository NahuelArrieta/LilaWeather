const Weather = ({info}) => {
    return (
      <div>
        <p>Description: {info.conditions}</p>
        <p>Temperature: {info.temp}°C</p>
        <p>Windspeed: {info.windspeed} kph</p>
        <p>Probability of precipitation: {info.precipprob}%</p>
        
      </div>
    )
};

export default Weather;