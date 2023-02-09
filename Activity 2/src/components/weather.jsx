const Weather = ({info}) => {
    return (
      <div>
        <p>{info.conditions}</p>
        <p>Temperature: <span>{info.temp}</span></p>
        <p>Windspeed: <span>{info.windspeed}</span></p>
        <p>Probability of Rain: <span>{info.precipprob}</span></p>
        
      </div>
    )
};

export default Weather;